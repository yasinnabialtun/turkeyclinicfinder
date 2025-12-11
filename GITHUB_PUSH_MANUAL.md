# 🚀 GitHub Push ve Vercel Deploy - Manuel Talimatlar

## ⚠️ Git Yüklü Değil - GitHub Desktop Kullanın

Sisteminizde Git yüklü olmadığı için GitHub Desktop kullanmanız gerekiyor.

## 📋 Adım Adım Talimatlar

### 1️⃣ GitHub Desktop ile Push

#### A. GitHub Desktop'ı Açın
- Windows Başlat menüsünden "GitHub Desktop" arayın ve açın
- Veya: `C:\Users\yasin\AppData\Local\GitHubDesktop\GitHubDesktop.exe`

#### B. Repository'yi Seçin
1. GitHub Desktop açıldığında `turkeyclinicfinder` repository'sini seçin
2. Eğer görünmüyorsa: **File > Add Local Repository**
3. Şu klasörü seçin: `C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder`

#### C. Değişiklikleri Görün
- Sol panelde tüm değişiklikler görünecek:
  - ✅ 5 yeni blog makalesi
  - ✅ ConsultationForm component
  - ✅ Email service
  - ✅ SEO iyileştirmeleri
  - ✅ Contact sayfası güncellemeleri

#### D. Commit Yapın
1. **Summary (Commit Message):**
   ```
   Add 5 new SEO articles, email integration, consultation forms, and comprehensive improvements
   ```
2. **Description (Opsiyonel):**
   ```
   - Added 5 comprehensive SEO articles (17 total)
   - Implemented email integration with consultation forms
   - Added ConsultationForm component to homepage, contact, and clinic pages
   - Updated sitemap with all new articles
   - SEO optimizations and improvements
   ```
3. **"Commit to main"** butonuna tıklayın

#### E. Push Yapın
1. **"Push origin"** butonuna tıklayın
2. Veya: **Repository > Push** menüsünden
3. Push tamamlandığında GitHub'a yüklenecek

### 2️⃣ Vercel Otomatik Deploy

GitHub'a push yaptığınızda:
- ✅ Vercel otomatik olarak deploy başlatır
- ✅ 2-5 dakika içinde site canlı olur
- ✅ Vercel Dashboard'dan durumu takip edebilirsiniz

**Vercel Dashboard:** https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder

### 3️⃣ Deploy Durumunu Kontrol Edin

1. **Vercel Dashboard'a gidin**
2. **"Deployments" sekmesine bakın**
3. **En son deployment'ı kontrol edin:**
   - ✅ Yeşil = Başarılı
   - ⏳ Sarı = Devam ediyor
   - ❌ Kırmızı = Hata var

## 🔧 Alternatif: Vercel Dashboard'dan Manuel Deploy

Eğer GitHub push yapmak istemiyorsanız:

1. **Vercel Dashboard'a gidin:** https://vercel.com
2. **Projenizi seçin:** `turkeyclinicfinder`
3. **"Deployments" sekmesine gidin**
4. **"Redeploy"** butonuna tıklayın
5. **Veya "Create Deployment"** ile yeni deployment başlatın

## 📧 Email Kurulumu (Backend Deploy Sonrası)

Backend deploy edildikten sonra `.env` dosyasına ekleyin:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=info@turkeyclinicfinder.com
```

## ✅ Deploy Sonrası Kontrol Listesi

- [ ] Site açılıyor mu? (https://turkeyclinicfinder.vercel.app)
- [ ] Tüm sayfalar çalışıyor mu?
- [ ] Blog makaleleri görünüyor mu? (17 makale)
- [ ] Consultation form çalışıyor mu?
- [ ] Email bildirimleri geliyor mu?
- [ ] AdSense ads görünüyor mu?
- [ ] Sitemap erişilebilir mi? (/sitemap.xml)
- [ ] Robots.txt erişilebilir mi? (/robots.txt)

## 🆘 Sorun Giderme

### GitHub Desktop Bulunamıyor
- **İndir:** https://desktop.github.com/
- **Kurulum:** Kurulum sonrası GitHub hesabınızla giriş yapın

### Vercel Deploy Hatası
- **Build logları kontrol edin:** Vercel Dashboard > Deployment > Build Logs
- **Environment variables kontrol edin:** Settings > Environment Variables
- **Root directory kontrol edin:** Settings > General > Root Directory = `frontend`

### Email Çalışmıyor
- **SMTP ayarlarını kontrol edin:** Backend `.env` dosyası
- **Gmail App Password kullanın:** Normal şifre çalışmaz
- **Firewall kontrol edin:** Port 587 açık olmalı

---

**Önemli:** GitHub Desktop ile push yapmak en kolay yöntemdir. Git yüklü değilse bu yöntemi kullanın.

