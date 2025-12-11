# 🚀 Vercel Deploy Talimatları - Hemen Deploy Et

## ✅ Hazır Olan Tüm Özellikler

- ✅ 17 kapsamlı SEO makale
- ✅ Mail entegrasyonu (ücretsiz danışmanlık formu)
- ✅ AdSense entegrasyonu
- ✅ Admin panel
- ✅ Tüm sayfalar ve bileşenler

## 📤 Vercel'e Deploy Etme Yöntemleri

### Yöntem 1: GitHub Desktop ile (ÖNERİLEN - En Kolay)

1. **GitHub Desktop'ı açın**
2. **Repository seçin:** `turkeyclinicfinder`
3. **Tüm değişiklikleri göreceksiniz:**
   - 17 blog makalesi
   - ConsultationForm component
   - Email service
   - SEO iyileştirmeleri
   - AdSense entegrasyonu

4. **Commit Message:**
   ```
   Add 5 new SEO articles, email integration, consultation forms, and comprehensive improvements
   ```

5. **"Commit to main" butonuna tıklayın**
6. **"Push origin" butonuna tıklayın**

7. **Vercel Otomatik Deploy:**
   - GitHub'a push yaptığınızda Vercel otomatik olarak deploy başlatır
   - Vercel Dashboard'dan durumu takip edebilirsiniz: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder

### Yöntem 2: Vercel Dashboard'dan Manuel Deploy

1. **Vercel Dashboard'a gidin:** https://vercel.com
2. **Projenizi seçin:** `turkeyclinicfinder`
3. **"Deployments" sekmesine gidin**
4. **"Redeploy" butonuna tıklayın**
5. **Veya "Create Deployment" ile yeni deployment başlatın**

### Yöntem 3: Vercel CLI (Node.js yüklüyse)

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

## ⚙️ Vercel Proje Ayarları

Deploy öncesi Vercel Dashboard'da kontrol edin:

### Build Settings
- **Framework Preset:** Next.js
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Environment Variables
Vercel Dashboard > Settings > Environment Variables'da ekleyin:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

## 📧 Email Ayarları (Backend için)

Backend deploy edildikten sonra, backend `.env` dosyasına ekleyin:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=info@turkeyclinicfinder.com
```

**Gmail için App Password:**
1. Google Account > Security
2. 2-Step Verification'ı açın
3. App Passwords oluşturun
4. Oluşturulan şifreyi `SMTP_PASSWORD` olarak kullanın

## ✅ Deploy Sonrası Kontrol Listesi

- [ ] Site canlı ve açılıyor
- [ ] Tüm sayfalar çalışıyor
- [ ] Blog makaleleri görünüyor
- [ ] Consultation form çalışıyor
- [ ] Email bildirimleri geliyor
- [ ] AdSense ads görünüyor
- [ ] SEO meta tags doğru
- [ ] Sitemap erişilebilir: `/sitemap.xml`
- [ ] Robots.txt erişilebilir: `/robots.txt`

## 🎯 Hızlı Deploy Adımları

1. ✅ GitHub Desktop'ı aç
2. ✅ Tüm değişiklikleri commit et
3. ✅ Push yap
4. ✅ Vercel otomatik deploy edecek
5. ✅ 2-5 dakika içinde site canlı olacak

## 📊 Deploy Sonrası

Site canlı olduktan sonra:
- Google Search Console'a sitemap gönderin
- AdSense ad units oluşturun
- Email test edin
- Tüm sayfaları kontrol edin

---

**Not:** Node.js yüklü değilse, GitHub Desktop kullanarak push yapın. Vercel GitHub entegrasyonu varsa otomatik deploy olacaktır.

