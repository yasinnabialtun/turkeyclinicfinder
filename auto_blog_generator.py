#!/usr/bin/env python3
"""
Turkey Clinic Finder - Otomatik Blog Yazısı Üretici
Ücretsiz AI API'leri ile çalışır (Hugging Face, Google Gemini)
"""

import json
import os
import sys
import requests
import time
from datetime import datetime
from pathlib import Path
import subprocess

# Konfigürasyon
CONFIG = {
    "multilingual_file": "multilingual_content.json",
    "output_dir": "generated_articles",
    "api_provider": "huggingface",  # "huggingface" veya "gemini"
    "huggingface_model": "mistralai/Mistral-7B-Instruct-v0.2",  # Ücretsiz model
    "huggingface_api_key": os.getenv("HUGGINGFACE_API_KEY", ""),  # https://huggingface.co/settings/tokens - Environment variable'dan alınır
    "gemini_api_key": os.getenv("GEMINI_API_KEY", ""),  # https://makersuite.google.com/app/apikey
    "languages": ["en", "tr", "ar"],
    "min_words": 800,
    "max_words": 1500,
}

# Blog yazısı konuları (en çok aranan sorular)
BLOG_TOPICS = [
    "Sapphire FUE Hair Transplant Technique in Turkey",
    "Hair Transplant Recovery Timeline: Day by Day Guide",
    "Best Time of Year for Hair Transplant in Turkey",
    "Hair Transplant Before and After: What to Expect",
    "Dental Veneers vs Crowns: Which is Better in Turkey?",
    "Teeth Whitening in Turkey: Methods and Costs",
    "Dental Implant Success Rate in Turkey",
    "All-on-4 vs All-on-6: Which is Better?",
    "Breast Augmentation in Turkey: Complete Guide",
    "Liposuction Recovery and Results in Turkey",
    "Facelift Surgery in Turkey: Cost and Recovery",
    "Rhinoplasty Revision Surgery in Turkey",
    "Cataract Surgery in Turkey: Complete Guide",
    "PRK vs LASIK: Which is Better for You?",
    "Gastric Balloon in Turkey: Non-Surgical Weight Loss",
    "Bariatric Surgery Success Stories from Turkey",
    "IVF Treatment in Turkey: Success Rates and Costs",
    "Orthopedic Surgery in Turkey: Complete Guide",
    "Turkey vs Other Countries: Medical Tourism Comparison",
    "How to Verify a Medical Clinic in Turkey",
]

def load_existing_content():
    """Mevcut içeriği yükle"""
    if os.path.exists(CONFIG["multilingual_file"]):
        with open(CONFIG["multilingual_file"], "r", encoding="utf-8") as f:
            return json.load(f)
    return {"blog_posts": []}

def save_content(content):
    """İçeriği kaydet"""
    with open(CONFIG["multilingual_file"], "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)

def generate_slug(title, language="en"):
    """SEO-friendly slug oluştur"""
    import re
    if language == "tr":
        # Türkçe karakterleri değiştir
        title = title.lower()
        title = title.replace("ş", "s").replace("ğ", "g").replace("ü", "u")
        title = title.replace("ö", "o").replace("ç", "c").replace("ı", "i")
    elif language == "ar":
        # Arapça için transliteration (basit)
        title = title.lower()
    
    # Genel slug oluşturma
    slug = re.sub(r'[^\w\s-]', '', title)
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

def call_huggingface_api(prompt, max_retries=3):
    """Hugging Face API çağrısı (ücretsiz tier)"""
    if not CONFIG["huggingface_api_key"]:
        print("⚠️  Hugging Face API key bulunamadı!")
        print("   Ücretsiz key almak için: https://huggingface.co/settings/tokens")
        return None
    
    api_url = f"https://api-inference.huggingface.co/models/{CONFIG['huggingface_model']}"
    headers = {
        "Authorization": f"Bearer {CONFIG['huggingface_api_key']}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "inputs": prompt,
        "parameters": {
            "max_new_tokens": 2000,
            "temperature": 0.7,
            "top_p": 0.9,
            "return_full_text": False
        }
    }
    
    for attempt in range(max_retries):
        try:
            response = requests.post(api_url, headers=headers, json=payload, timeout=60)
            
            if response.status_code == 503:
                # Model yükleniyor, bekle
                wait_time = 10 * (attempt + 1)
                print(f"⏳ Model yükleniyor, {wait_time} saniye bekleniyor...")
                time.sleep(wait_time)
                continue
            
            if response.status_code == 200:
                result = response.json()
                if isinstance(result, list) and len(result) > 0:
                    return result[0].get("generated_text", "")
                return result.get("generated_text", "")
            else:
                print(f"❌ API Hatası: {response.status_code} - {response.text}")
                return None
                
        except Exception as e:
            print(f"❌ Hata (Deneme {attempt + 1}/{max_retries}): {str(e)}")
            if attempt < max_retries - 1:
                time.sleep(5)
    
    return None

def call_gemini_api(prompt):
    """Google Gemini API çağrısı (ücretsiz tier)"""
    if not CONFIG["gemini_api_key"]:
        print("⚠️  Gemini API key bulunamadı!")
        print("   Ücretsiz key almak için: https://makersuite.google.com/app/apikey")
        return None
    
    try:
        import google.generativeai as genai
        genai.configure(api_key=CONFIG["gemini_api_key"])
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        return response.text
    except ImportError:
        print("⚠️  google-generativeai paketi yüklü değil!")
        print("   Yüklemek için: pip install google-generativeai")
        return None
    except Exception as e:
        print(f"❌ Gemini API Hatası: {str(e)}")
        return None

def generate_article(topic, language="en"):
    """AI ile blog yazısı üret"""
    
    # Dil bazlı prompt'lar
    prompts = {
        "en": f"""Write a comprehensive, SEO-optimized blog article about "{topic}" in Turkey for medical tourism.

Requirements:
- 800-1500 words
- SEO-optimized with relevant keywords
- Medically accurate and professional
- Include sections: Introduction, Main Content, Benefits, Cost Information, Conclusion
- Use markdown formatting (## for headings, ** for bold)
- Original, unique content
- No plagiarism

Write the article:""",
        
        "tr": f"""Türkiye'de medikal turizm için "{topic}" hakkında kapsamlı, SEO optimize edilmiş bir blog makalesi yaz.

Gereksinimler:
- 800-1500 kelime
- İlgili anahtar kelimelerle SEO optimize
- Tıbbi olarak doğru ve profesyonel
- Bölümler içer: Giriş, Ana İçerik, Avantajlar, Maliyet Bilgisi, Sonuç
- Markdown formatı kullan (## başlıklar için, ** kalın için)
- Özgün, benzersiz içerik
- İntihal yok

Makaleyi yaz:""",
        
        "ar": f"""اكتب مقالة مدونة شاملة ومحسّنة لمحركات البحث حول "{topic}" في تركيا للسياحة الطبية.

المتطلبات:
- 800-1500 كلمة
- محسّنة لمحركات البحث بكلمات مفتاحية ذات صلة
- دقيقة طبياً واحترافية
- تتضمن أقسام: مقدمة، المحتوى الرئيسي، الفوائد، معلومات التكلفة، الخلاصة
- استخدم تنسيق Markdown (## للعناوين، ** للخط العريض)
- محتوى أصلي وفريد
- لا انتحال

اكتب المقالة:"""
    }
    
    prompt = prompts.get(language, prompts["en"])
    
    # API çağrısı
    if CONFIG["api_provider"] == "huggingface":
        article = call_huggingface_api(prompt)
    elif CONFIG["api_provider"] == "gemini":
        article = call_gemini_api(prompt)
    else:
        print(f"❌ Bilinmeyen API provider: {CONFIG['api_provider']}")
        return None
    
    return article

def generate_seo_keywords(topic, language="en"):
    """SEO anahtar kelimeleri üret"""
    keywords_map = {
        "en": [
            f"{topic.lower()} turkey",
            f"{topic.lower()} cost turkey",
            f"{topic.lower()} safe turkey",
            f"best {topic.lower()} turkey",
            f"turkey {topic.lower()}",
        ],
        "tr": [
            f"{topic.lower()} türkiye",
            f"{topic.lower()} fiyatı türkiye",
            f"{topic.lower()} güvenli türkiye",
            f"en iyi {topic.lower()} türkiye",
            f"türkiye {topic.lower()}",
        ],
        "ar": [
            f"{topic.lower()} تركيا",
            f"تكلفة {topic.lower()} تركيا",
            f"{topic.lower()} آمن تركيا",
            f"أفضل {topic.lower()} تركيا",
            f"تركيا {topic.lower()}",
        ]
    }
    return keywords_map.get(language, keywords_map["en"])

def create_blog_post(topic):
    """3 dilde blog yazısı oluştur"""
    print(f"\n📝 Blog yazısı oluşturuluyor: {topic}")
    
    blog_post = {}
    
    for lang in CONFIG["languages"]:
        print(f"   🌐 {lang.upper()} dilinde yazılıyor...")
        
        # Başlık oluştur
        title = topic if lang == "en" else f"{topic} ({lang})"
        
        # Slug oluştur
        slug = generate_slug(topic, lang)
        
        # Makale üret
        article = generate_article(topic, lang)
        
        if not article:
            print(f"   ❌ {lang.upper()} için makale üretilemedi!")
            continue
        
        # SEO keywords
        keywords = generate_seo_keywords(topic, lang)
        
        # Blog post objesi
        blog_post[lang] = {
            "title": title,
            "slug": slug,
            "article": article,
            "seo_keywords": keywords,
            "featured_image_prompt": f"Professional DSLR photograph related to {topic} in Turkey. Modern medical facility, professional medical setting, natural lighting, studio quality, photorealistic, 4K resolution"
        }
        
        print(f"   ✅ {lang.upper()} tamamlandı!")
        time.sleep(2)  # Rate limiting için bekle
    
    return blog_post

def main():
    """Ana fonksiyon"""
    print("=" * 60)
    print("🚀 Turkey Clinic Finder - Otomatik Blog Yazısı Üretici")
    print("=" * 60)
    
    # API key kontrolü
    if CONFIG["api_provider"] == "huggingface" and not CONFIG["huggingface_api_key"]:
        print("\n⚠️  Hugging Face API key gerekli!")
        print("   1. https://huggingface.co/settings/tokens adresine git")
        print("   2. Yeni token oluştur (Read permission yeterli)")
        print("   3. Terminal'de çalıştır: set HUGGINGFACE_API_KEY=your_token_here")
        print("   4. Veya .env dosyasına ekle: HUGGINGFACE_API_KEY=your_token_here")
        return
    
    if CONFIG["api_provider"] == "gemini" and not CONFIG["gemini_api_key"]:
        print("\n⚠️  Gemini API key gerekli!")
        print("   1. https://makersuite.google.com/app/apikey adresine git")
        print("   2. Yeni API key oluştur")
        print("   3. Terminal'de çalıştır: set GEMINI_API_KEY=your_key_here")
        print("   4. Veya .env dosyasına ekle: GEMINI_API_KEY=your_key_here")
        return
    
    # Mevcut içeriği yükle
    content = load_existing_content()
    if "blog_posts" not in content:
        content["blog_posts"] = []
    
    # Kaç makale üretilecek?
    print(f"\n📚 Toplam {len(BLOG_TOPICS)} konu mevcut")
    try:
        num_articles = int(input("Kaç makale üretmek istersiniz? (1-20): ") or "1")
        num_articles = max(1, min(num_articles, len(BLOG_TOPICS)))
    except:
        num_articles = 1
    
    # Hangi konular?
    print("\nMevcut konular:")
    for i, topic in enumerate(BLOG_TOPICS[:num_articles], 1):
        print(f"   {i}. {topic}")
    
    # Makaleleri üret
    generated = 0
    for i, topic in enumerate(BLOG_TOPICS[:num_articles]):
        try:
            blog_post = create_blog_post(topic)
            
            if blog_post and len(blog_post) == 3:  # 3 dil tamamlandı
                content["blog_posts"].append(blog_post)
                generated += 1
                print(f"✅ {i+1}/{num_articles} tamamlandı!")
            else:
                print(f"⚠️  {i+1}/{num_articles} eksik dil var, atlanıyor...")
            
            # Rate limiting
            if i < num_articles - 1:
                print("⏳ 5 saniye bekleniyor...")
                time.sleep(5)
                
        except KeyboardInterrupt:
            print("\n⚠️  Kullanıcı tarafından durduruldu!")
            break
        except Exception as e:
            print(f"❌ Hata: {str(e)}")
            continue
    
    # Kaydet
    if generated > 0:
        save_content(content)
        print(f"\n✅ {generated} blog yazısı başarıyla eklendi!")
        print(f"📁 Dosya: {CONFIG['multilingual_file']}")
        
        # Git commit (opsiyonel)
        commit = input("\n💾 GitHub'a commit yapmak ister misiniz? (y/n): ").lower()
        if commit == "y":
            try:
                subprocess.run(["git", "add", CONFIG["multilingual_file"]], check=True)
                subprocess.run(["git", "commit", "-m", f"Auto-generate {generated} blog posts"], check=True)
                push = input("🚀 Push yapmak ister misiniz? (y/n): ").lower()
                if push == "y":
                    subprocess.run(["git", "push", "origin", "main"], check=True)
                    print("✅ GitHub'a push edildi!")
            except Exception as e:
                print(f"⚠️  Git hatası: {str(e)}")
    else:
        print("\n❌ Hiç makale üretilemedi!")

if __name__ == "__main__":
    main()

