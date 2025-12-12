# 🚀 Turkey Clinic Finder - Basit Versiyon

Temiz, basit, gereksiz şeyler yok!

## ⚡ Hızlı Başlangıç

### 1. Node.js Kur
https://nodejs.org/ - LTS sürümünü indir ve kur

### 2. Kurulum Scriptini Çalıştır
```powershell
.\scripts\basit_kurulum.ps1
```

### 3. Firebase Projesi Oluştur
1. https://console.firebase.google.com/
2. Yeni proje oluştur
3. Firestore Database aktifleştir
4. Authentication aktifleştir
5. Web app ekle ve config bilgilerini kopyala

### 4. .env.local Düzenle
`frontend/.env.local` dosyasına Firebase bilgilerini ekle

### 5. Çalıştır
```powershell
cd frontend
npm run dev
```

Tarayıcıda: http://localhost:3000

## 📦 Teknoloji

- **Next.js 14** - React framework
- **Firebase** - Veritabanı ve Auth
- **Vercel** - Hosting
- **TailwindCSS** - Styling

## 🎯 Özellikler

- ✅ Klinik arama
- ✅ Klinik detayları
- ✅ Yorumlar
- ✅ Blog
- ✅ Çoklu dil (EN/TR/AR)

## 🚀 Deploy

### Vercel (Önerilen)
```powershell
npm i -g vercel
vercel login
vercel
```

### Firebase Hosting
```powershell
npm i -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📝 Notlar

- Backend yok (Firebase Functions opsiyonel)
- Veritabanı yok (Firestore kullan)
- Server yok (Vercel/Firebase Hosting)
- Sadece frontend, temiz ve basit!

## 🆘 Yardım

- Node.js kurulu mu? `node --version`
- Paketler kurulu mu? `npm install`
- Firebase config doğru mu? `.env.local` kontrol et

