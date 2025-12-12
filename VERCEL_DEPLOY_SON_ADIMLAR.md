# 🚀 Vercel Deploy - Son Adımlar

## ✅ GitHub'a Push Edildi!

Kodlar GitHub'a push edildi. Şimdi Vercel'de deploy edelim.

## 📝 Vercel'de Yapılacaklar

### 1. Projeyi Seç veya Yeni Proje Oluştur

1. **Vercel Dashboard'a git:**
   - https://vercel.com/dashboard
   - Eğer proje yoksa: "Add New..." > "Project"

2. **Repository'yi seç:**
   - `turkeyclinicfinder` repository'sini bul
   - "Import" butonuna tıkla

### 2. Project Settings

**ÖNEMLİ:** Root Directory ayarı:
- **Root Directory:** `frontend` yaz (ÖNEMLİ!)

Framework otomatik algılanır: **Next.js**

Build Settings (varsayılanlar genelde yeterli):
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 3. Environment Variables Ekle (ÖNEMLİ!)

**Deploy etmeden önce** environment variables ekle:

1. **Settings** sekmesine git
2. **Environment Variables** bölümüne git
3. Şu değişkenleri ekle:

```
NEXT_PUBLIC_SUPABASE_URL
https://czfcnckknavfolhiqpum.supabase.co
```

```
NEXT_PUBLIC_SUPABASE_ANON_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmNuY2trbmF2Zm9saGlxcHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0OTM2MjUsImV4cCI6MjA4MTA2OTYyNX0.EDiTlfyXHgjM8CxO5B0rGw6jexGfVfjrcvZI9gPM8dM
```

**Her ikisini de ekle:**
- ✅ Production
- ✅ Preview
- ✅ Development

### 4. Deploy Et!

1. **"Deploy"** butonuna tıkla
2. 2-3 dakika bekle
3. URL alırsın: `turkeyclinicfinder.vercel.app`

## ✅ Deploy Sonrası

1. **URL'yi kontrol et:**
   - Site çalışıyor mu?
   - Klinikler görünüyor mu?

2. **Supabase bağlantısını test et:**
   - Klinikler Supabase'den geliyor mu?

3. **Custom Domain ekle (opsiyonel):**
   - Settings > Domains
   - Domain ekle ve DNS ayarla

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

