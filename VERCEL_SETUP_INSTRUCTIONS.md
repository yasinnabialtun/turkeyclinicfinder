# Vercel Deployment Ayarları

## Sorun
Site şu anda 404 hatası veriyor çünkü Vercel root'ta `package.json` bulamıyor. Proje monorepo yapısında (hem frontend hem backend var).

## Çözüm

Vercel Dashboard'da şu ayarları yapın:

1. **Vercel Dashboard'a gidin**: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder
2. **Settings** sekmesine tıklayın
3. **General** bölümünde **Root Directory** ayarını bulun
4. **Root Directory** değerini `frontend` olarak ayarlayın
5. **Save** butonuna tıklayın
6. Yeni bir deployment tetikleyin (Settings > Deployments > Redeploy)

## Alternatif: Vercel.json ile Otomatik

Root'ta `vercel.json` dosyası oluşturuldu ancak Vercel bazen bu ayarı göz ardı edebilir. Dashboard'dan manuel ayar yapmak daha garantili.

## Environment Variables

Vercel Dashboard > Settings > Environment Variables bölümünde şunları ekleyin:

- `NEXT_PUBLIC_API_URL`: Backend API URL'iniz (örn: `https://your-backend.railway.app`)
- `NEXT_PUBLIC_SITE_URL`: (Opsiyonel) Site URL'iniz

## Not

Root'ta `vercel.json` dosyası var ama Vercel bazen monorepo yapılarında dashboard ayarlarını tercih eder.

