# 🚀 Vercel'e Deploy Rehberi (Ücretsiz)

Vercel'in ücretsiz planı var ve Next.js için mükemmel!

## ✅ Vercel Ücretsiz Plan Özellikleri

- ✅ **Sınırsız** proje
- ✅ **100GB** bandwidth/ay
- ✅ **Sınırsız** build
- ✅ **Otomatik SSL** (HTTPS)
- ✅ **CDN** dahil
- ✅ **Custom domain** (ücretsiz)
- ✅ **Preview deployments** (her commit için)
- ✅ **Analytics** (basit)

## 🚀 Hızlı Deploy (5 Dakika)

### Yöntem 1: GitHub ile (Önerilen - En Kolay)

1. **GitHub'a Push Yap**
   ```powershell
   git add .
   git commit -m "Ready for Vercel"
   git push origin main
   ```

2. **Vercel'e Git**
   - https://vercel.com/
   - GitHub hesabınla giriş yap

3. **Projeyi İçe Aktar**
   - "Add New..." > "Project"
   - GitHub repository'ni seç: `turkeyclinicfinder`
   - **Root Directory:** `frontend` seç
   - Framework: Next.js (otomatik algılanır)
   - "Deploy" butonuna tıkla

4. **Hepsi Bu Kadar!** 🎉
   - Otomatik deploy edilir
   - URL alırsın: `turkeyclinicfinder.vercel.app`

### Yöntem 2: Vercel CLI ile

```powershell
# Vercel CLI kur
npm i -g vercel

# Frontend klasörüne git
cd frontend

# Login ol
vercel login

# Deploy et
vercel

# Production'a deploy
vercel --prod
```

## 📝 Environment Variables (Opsiyonel)

Eğer Firebase kullanacaksan, Vercel'de Environment Variables ekle:

1. Vercel Dashboard > Project > Settings > Environment Variables
2. Şunları ekle:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - vb.

## 🎯 Otomatik Deploy

Her GitHub push'unda otomatik deploy edilir!

## 💡 İpuçları

- **Preview Deployments:** Her PR için otomatik preview URL
- **Custom Domain:** Vercel'de domain ekle, DNS ayarla
- **Analytics:** Vercel Analytics ekle (ücretsiz)
- **Speed Insights:** Performans metrikleri (ücretsiz)

## 🆘 Sorun mu Var?

- Build hatası? Vercel loglarına bak
- Environment variable? Settings'ten ekle
- Domain sorunu? DNS ayarlarını kontrol et

## ✅ Deploy Sonrası

1. URL'yi kontrol et
2. Sayfaları test et
3. Custom domain ekle (opsiyonel)
4. Analytics'i aktifleştir (opsiyonel)

