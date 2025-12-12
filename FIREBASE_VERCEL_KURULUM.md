# 🔥 Firebase + Vercel Kurulum Rehberi

En basit ve hızlı kurulum yöntemi! Docker, PostgreSQL, Redis gibi karmaşık şeyler yok.

## 🎯 Ne Kullanacağız?

- **Firebase Firestore** - Veritabanı (PostgreSQL yerine)
- **Firebase Authentication** - Kullanıcı girişi
- **Firebase Functions** - Backend API (opsiyonel)
- **Vercel** - Frontend hosting (Next.js için mükemmel)

## 📋 Adım 1: Firebase Projesi Oluşturma

### 1. Firebase Console'a Gidin
- https://console.firebase.google.com/
- Google hesabınızla giriş yapın

### 2. Yeni Proje Oluşturun
1. "Add project" (Proje ekle) butonuna tıklayın
2. Proje adı: `turkey-clinic-finder`
3. Google Analytics: İsterseniz açabilirsiniz (opsiyonel)
4. "Create project" (Proje oluştur)

### 3. Firestore Database'i Aktifleştirin
1. Sol menüden "Firestore Database" seçin
2. "Create database" (Veritabanı oluştur) butonuna tıklayın
3. **Test mode** seçin (geliştirme için)
4. Location: `europe-west` (Türkiye'ye yakın)
5. "Enable" (Etkinleştir)

### 4. Authentication'ı Aktifleştirin
1. Sol menüden "Authentication" seçin
2. "Get started" (Başlayın) butonuna tıklayın
3. "Email/Password" seçeneğini açın
4. "Enable" (Etkinleştir)

### 5. Firebase Yapılandırma Bilgilerini Alın
1. Proje ayarlarına gidin (⚙️ ikonu)
2. "Your apps" bölümünden Web (</>) ikonuna tıklayın
3. App nickname: `turkey-clinic-finder-web`
4. "Register app" (Uygulamayı kaydet)
5. **Yapılandırma bilgilerini kopyalayın** (daha sonra kullanacağız)

## 📋 Adım 2: Vercel Hesabı Oluşturma

### 1. Vercel'e Gidin
- https://vercel.com/
- GitHub hesabınızla giriş yapın (önerilen)

### 2. Projeyi İçe Aktarın
1. "Add New..." > "Project" (Yeni Proje)
2. GitHub repository'nizi seçin: `turkeyclinicfinder`
3. Framework Preset: **Next.js** (otomatik algılanır)
4. Root Directory: `frontend`
5. Environment Variables ekleyin (aşağıda)

## 🔧 Adım 3: Frontend'i Firebase'e Bağlama

### 1. Firebase SDK'yı Kurun

```powershell
cd frontend
npm install firebase
```

### 2. Firebase Yapılandırması

`frontend/src/lib/firebase.ts` dosyası oluşturun (aşağıda kod var)

### 3. Environment Variables

Vercel'de veya `.env.local` dosyasında:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 🚀 Adım 4: Vercel'e Deploy

### Otomatik (GitHub ile)
1. GitHub'a push yapın
2. Vercel otomatik deploy eder

### Manuel
```powershell
# Vercel CLI kurun
npm i -g vercel

# Frontend klasöründe
cd frontend
vercel
```

## 📊 Firestore Veri Yapısı

Firestore'da şu koleksiyonları oluşturun:

```
clinics/
  {clinicId}/
    name: string
    city: string
    treatments: array
    rating: number
    ...

users/
  {userId}/
    email: string
    role: string
    ...

reviews/
  {reviewId}/
    clinicId: string
    rating: number
    content: string
    ...

leads/
  {leadId}/
    name: string
    email: string
    clinicId: string
    ...
```

## ✅ Avantajlar

- ✅ **Ücretsiz başlangıç** - Firebase ve Vercel free tier
- ✅ **Otomatik ölçeklenme** - Trafik arttıkça otomatik
- ✅ **CDN dahil** - Hızlı yükleme
- ✅ **SSL otomatik** - HTTPS hazır
- ✅ **Kolay yönetim** - Web arayüzünden her şey
- ✅ **Gerçek zamanlı** - Firestore real-time updates

## 💰 Maliyet

**Firebase Free Tier:**
- Firestore: 50K okuma/gün, 20K yazma/gün
- Authentication: Sınırsız
- Storage: 5GB
- Functions: 2M çağrı/ay

**Vercel Free Tier:**
- Bandwidth: 100GB/ay
- Build: Sınırsız
- SSL: Dahil

Küçük-orta ölçekli projeler için yeterli!

## 🔥 Hızlı Başlangıç

1. Firebase projesi oluştur (5 dk)
2. Firestore ve Auth aktifleştir (2 dk)
3. Firebase config'i frontend'e ekle (2 dk)
4. Vercel'e deploy et (5 dk)

**Toplam: 15 dakika!** 🚀

## 📝 Sonraki Adımlar

Kurulum tamamlandıktan sonra:
1. Firestore security rules ayarlayın
2. Firebase Functions ekleyin (opsiyonel)
3. Analytics ekleyin (opsiyonel)
4. Custom domain bağlayın (opsiyonel)

