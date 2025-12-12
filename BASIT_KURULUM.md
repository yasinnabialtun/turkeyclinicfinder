# 🚀 Basit Kurulum - Next.js + Firebase + Vercel

En basit ve temiz kurulum. Gereksiz şeyler yok!

## 📦 Ne Gerekiyor?

1. **Node.js** (sadece bu!)
2. **Firebase hesabı** (ücretsiz)
3. **Vercel hesabı** (ücretsiz)

## ⚡ Hızlı Başlangıç (5 Dakika)

### 1. Node.js Kur
- https://nodejs.org/ - LTS sürümünü indir
- Kur ve bilgisayarı yeniden başlat

### 2. Firebase Projesi Oluştur
1. https://console.firebase.google.com/ - Git
2. "Add project" - Yeni proje
3. Firestore Database - Aktifleştir (Test mode)
4. Authentication - Aktifleştir (Email/Password)
5. Project Settings > Your apps > Web app ekle
6. Config bilgilerini kopyala

### 3. Projeyi Çalıştır

```powershell
# Frontend klasörüne git
cd frontend

# Paketleri kur
npm install

# .env.local oluştur ve Firebase bilgilerini ekle
# (Aşağıdaki örneğe bak)

# Çalıştır
npm run dev
```

### 4. .env.local Dosyası

`frontend/.env.local` dosyası oluştur:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 5. Vercel'e Deploy

```powershell
# Vercel CLI kur (bir kere)
npm i -g vercel

# Login ol
vercel login

# Deploy et
cd frontend
vercel
```

**Hepsi bu kadar!** 🎉

## 📁 Proje Yapısı

```
frontend/
├── src/
│   ├── app/          # Sayfalar (Next.js App Router)
│   ├── components/   # React bileşenleri
│   └── lib/          # Firebase, utilities
├── public/            # Statik dosyalar
└── package.json      # Bağımlılıklar
```

## 🔥 Firebase Kullanımı

Veritabanı işlemleri için `src/lib/firebase.ts` kullan:

```typescript
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

// Veri çek
const clinicsRef = collection(db, 'clinics');
const snapshot = await getDocs(clinicsRef);
```

## 🚀 Vercel Deploy

1. GitHub'a push yap
2. Vercel'de "Import Project"
3. Otomatik deploy!

## ✅ Avantajlar

- ✅ Sadece Node.js gerekli
- ✅ Backend yok (Firebase Functions opsiyonel)
- ✅ Veritabanı yok (Firestore)
- ✅ Server yok (Vercel)
- ✅ Ücretsiz başlangıç
- ✅ Otomatik SSL
- ✅ CDN dahil

## 💡 İpuçları

- Local development: `npm run dev`
- Production build: `npm run build`
- Vercel otomatik deploy eder
- Firebase Console'dan verileri yönet

## 🆘 Sorun mu Var?

- Node.js kurulu mu? `node --version`
- Paketler kurulu mu? `npm install`
- Firebase config doğru mu? `.env.local` kontrol et
- Port 3000 kullanılıyor mu? Farklı port: `npm run dev -- -p 3001`

