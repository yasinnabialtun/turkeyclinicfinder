# 🚀 Firebase Olmadan Kurulum

Firebase limiti dolmuşsa, alternatif çözümler:

## Seçenek 1: Mock Data ile Çalıştır (En Basit)

Sadece frontend'i çalıştır, veriler mock data'dan gelir:

```powershell
cd frontend
npm run dev
```

Veriler `frontend/src/data/` klasöründen gelecek.

## Seçenek 2: Supabase (Firebase Alternatifi - Ücretsiz)

1. https://supabase.com/ - Git
2. Yeni proje oluştur
3. PostgreSQL veritabanı hazır
4. API key'leri al
5. Frontend'e entegre et

## Seçenek 3: JSON Server (Local Development)

Basit bir JSON API server:

```powershell
npm install -g json-server
json-server --watch data.json --port 3001
```

## Seçenek 4: Vercel + JSON Files

Statik JSON dosyalarından veri çek, Vercel'e deploy et.

## Seçenek 5: Sadece Frontend (En Basit)

Backend yok, sadece frontend çalışır. Veriler statik veya mock.

Hangi seçeneği tercih edersin?

