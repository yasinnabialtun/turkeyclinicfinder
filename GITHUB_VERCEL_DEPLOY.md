# 🚀 GitHub Güncelleme ve Vercel Deploy - Hızlı Rehber

## ⚠️ Git Yüklü Değil - İki Seçenek

## 🎯 YÖNTEM 1: GitHub Web Interface (ÖNERİLEN - 10 Dakika)

### Adım 1: GitHub.com'a Gidin
1. **Tarayıcıda açın:** https://github.com
2. **Giriş yapın**
3. **Repository'nizi açın:** `turkeyclinicfinder`

### Adım 2: Dosyaları Yükleyin
1. **"Add file"** → **"Upload files"** butonuna tıklayın
2. **Yeni/Değişen dosyaları sürükleyip bırakın:**

**Güncellenen Dosyalar:**
- `frontend/src/components/ModernHeader.tsx`
- `frontend/src/components/Header.tsx`
- `frontend/src/lib/api.ts`
- `frontend/src/app/admin/layout.tsx`
- `frontend/src/app/admin/leads/page.tsx`
- `frontend/src/app/contact/page.tsx`
- `frontend/src/app/about/page.tsx`
- `frontend/src/components/ModernFooter.tsx`
- `frontend/src/lib/seo.ts`
- `backend/app/services/email_service.py`

3. **"Commit changes"** butonuna tıklayın
4. **Commit message:**
   ```
   Remove login system, update email to info@ynadijital.com, remove phone numbers, add leads management
   ```
5. **"Commit changes"** butonuna tıklayın

### Adım 3: Vercel Otomatik Deploy
- ✅ GitHub'a commit yaptığınızda Vercel **otomatik deploy** başlatır
- ✅ 2-5 dakika içinde site canlı olur
- ✅ Vercel Dashboard: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder

## 🎯 YÖNTEM 2: Vercel Dashboard'dan Manuel Deploy

### Adım 1: Vercel Dashboard'a Gidin
1. **Tarayıcıda açın:** https://vercel.com
2. **Giriş yapın** (GitHub hesabınızla)
3. **Projenizi seçin:** `turkeyclinicfinder`

### Adım 2: Manuel Deploy
1. **"Deployments"** sekmesine gidin
2. **"Redeploy"** butonuna tıklayın
   - Veya **"Create Deployment"** → **"Import Project"**
3. **GitHub repository'nizi seçin:** `turkeyclinicfinder`
4. **Root Directory:** `frontend` olarak ayarlayın
5. **Deploy** butonuna tıklayın

### Adım 3: Environment Variables (Önemli!)
**Settings > Environment Variables** sekmesine gidin ve ekleyin:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

**Deploy başlar ve 2-5 dakika içinde site canlı olur!**

## ✅ Deploy Sonrası Kontrol

- [ ] Site açılıyor mu?
- [ ] Login butonu görünmüyor mu?
- [ ] Email adresi info@ynadijital.com olarak görünüyor mu?
- [ ] Telefon numaraları kaldırılmış mı?
- [ ] Consultation form çalışıyor mu?
- [ ] Admin panel erişilebilir mi?

## 📊 Deploy Edilecek Değişiklikler

- ✅ Login sistemi kaldırıldı
- ✅ Email adresi güncellendi: info@ynadijital.com
- ✅ Telefon numaraları kaldırıldı
- ✅ Leads management eklendi
- ✅ Admin panel public erişilebilir

---

**ÖNERİ:** GitHub Web Interface kullanın (Yöntem 1) - En kolay ve hızlı!

**Site URL:** https://turkeyclinicfinder.vercel.app (veya özel domain)

