# 🚀 Vercel Deploy - Adım Adım Rehber

## ✅ GitHub'a Push Edildi!

Kodlar GitHub'a push edildi. Şimdi Vercel'de deploy edelim.

## 📝 Chrome'dan Yapılacaklar

### 1. Vercel'e Git
https://vercel.com/dashboard

### 2. GitHub ile Giriş Yap
- Eğer giriş yapmadıysan:
  - "Continue with GitHub" butonuna tıkla
  - GitHub'a giriş yap
  - Vercel'e izin ver

### 3. Projeyi Import Et
1. "Add New..." > "Project" butonuna tıkla
2. `turkeyclinicfinder` repository'sini seç
3. "Import" butonuna tıkla

### 4. ⚠️ ÖNEMLİ - Root Directory
**Root Directory:** `frontend` yaz (ÖNEMLİ!)

Framework otomatik algılanır: **Next.js**

### 5. Environment Variables Ekle (Deploy Öncesi!)

**Settings** sekmesine git > **Environment Variables**

Şu değişkenleri ekle:

**1. NEXT_PUBLIC_SUPABASE_URL**
```
https://czfcnckknavfolhiqpum.supabase.co
```

**2. NEXT_PUBLIC_SUPABASE_ANON_KEY**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmNuY2trbmF2Zm9saGlxcHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0OTM2MjUsImV4cCI6MjA4MTA2OTYyNX0.EDiTlfyXHgjM8CxO5B0rGw6jexGfVfjrcvZI9gPM8dM
```

**Her ikisini de şu ortamlar için ekle:**
- ✅ Production
- ✅ Preview  
- ✅ Development

### 6. Deploy Et!
1. "Deploy" butonuna tıkla
2. 2-3 dakika bekle
3. URL alırsın: `turkeyclinicfinder.vercel.app`

## ✅ Deploy Sonrası

1. **URL'yi kontrol et:**
   - Site çalışıyor mu?
   - Klinikler görünüyor mu?

2. **Supabase bağlantısını test et:**
   - Klinikler Supabase'den geliyor mu?
   - Başvuru formu çalışıyor mu?

## 🆘 Sorun mu Var?

- **Build hatası?** Vercel loglarına bak
- **Environment variables?** Settings'ten kontrol et
- **Root directory?** `frontend` olduğundan emin ol

## 🎉 Başarılı!

Deploy başarılı olduğunda:
- ✅ Site canlı
- ✅ Supabase bağlantısı çalışıyor
- ✅ Ücretsiz hosting
- ✅ Otomatik SSL (HTTPS)
- ✅ CDN dahil

