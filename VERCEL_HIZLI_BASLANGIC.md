# ⚡ Vercel'e Hızlı Deploy (Ücretsiz)

## 🎯 Adım Adım (5 Dakika)

### 1. GitHub'a Push Yapıldı ✅
Proje GitHub'a push edildi.

### 2. Vercel'e Git
Tarayıcıda Vercel sayfası açıldı.

### 3. GitHub ile Giriş Yap
- "Continue with GitHub" butonuna tıkla
- GitHub hesabını seç ve izin ver

### 4. Projeyi İçe Aktar
1. "Add New..." > "Project" butonuna tıkla
2. GitHub repository'lerinden **turkeyclinicfinder** seç
3. **Root Directory:** `frontend` yaz (ÖNEMLİ!)
4. Framework: **Next.js** (otomatik algılanır)
5. Build Settings:
   - Build Command: `npm run build` (varsayılan)
   - Output Directory: `.next` (varsayılan)
   - Install Command: `npm install` (varsayılan)
6. **"Deploy"** butonuna tıkla

### 5. Bekle (2-3 dakika)
Vercel otomatik olarak:
- Paketleri kurar
- Projeyi build eder
- Deploy eder

### 6. Hazır! 🎉
URL alırsın: `turkeyclinicfinder.vercel.app`

## ✅ Vercel Ücretsiz Plan

- ✅ Sınırsız proje
- ✅ 100GB bandwidth/ay
- ✅ Sınırsız build
- ✅ Otomatik SSL (HTTPS)
- ✅ CDN dahil
- ✅ Custom domain (ücretsiz)
- ✅ Preview deployments

## 🔄 Otomatik Deploy

Her GitHub push'unda otomatik deploy edilir!

## 📝 Sonraki Adımlar

1. **Custom Domain Ekle** (opsiyonel)
   - Vercel Dashboard > Settings > Domains
   - Domain ekle ve DNS ayarla

2. **Environment Variables** (Firebase için)
   - Settings > Environment Variables
   - Firebase config bilgilerini ekle

3. **Analytics Ekle** (opsiyonel)
   - Analytics tab'ından ekle

## 🆘 Sorun mu Var?

- **Build hatası?** Vercel loglarına bak
- **Root directory?** `frontend` olduğundan emin ol
- **Framework?** Next.js seçili olmalı

