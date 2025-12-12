# 🗄️ Supabase Setup - Adım Adım

## ✅ 1. .env.local Dosyasını Düzenle

`frontend/.env.local` dosyasını aç ve şu satırları ekle/güncelle:

```env
NEXT_PUBLIC_SUPABASE_URL=https://czfcnckknavfolhiqpum.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmNuY2trbmF2Zm9saGlxcHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0OTM2MjUsImV4cCI6MjA4MTA2OTYyNX0.EDiTlfyXHgjM8CxO5B0rGw6jexGfVfjrcvZI9gPM8dM
```

## ✅ 2. Supabase SQL Editor'a Git

1. **Supabase Dashboard'a git:**
   - https://supabase.com/dashboard
   - Projeni seç: `turkey-clinic-finder`

2. **SQL Editor'ı aç:**
   - Sol menüden **"SQL Editor"** seç
   - VEYA direkt: https://supabase.com/dashboard/project/czfcnckknavfolhiqpum/sql/new

3. **Yeni query oluştur:**
   - "New query" butonuna tıkla

## ✅ 3. SQL'i Çalıştır

1. **SQL dosyasını aç:**
   - Proje klasöründe `supabase_schema.sql` dosyasını aç

2. **Kopyala ve yapıştır:**
   - Tüm içeriği kopyala (Ctrl+A, Ctrl+C)
   - SQL Editor'a yapıştır (Ctrl+V)

3. **Çalıştır:**
   - "Run" butonuna tıkla (veya Ctrl+Enter)
   - "Success" mesajını gör

## ✅ 4. Kontrol Et

1. **Table Editor'a git:**
   - Sol menüden "Table Editor" seç
   - "clinics" tablosuna bak
   - 5 örnek klinik görünmeli

## ✅ 5. Frontend'i Test Et

```powershell
cd frontend
npm run dev
```

Tarayıcıda: http://localhost:3000

## 📊 Oluşturulan Tablolar

- ✅ **clinics** - Klinik bilgileri (5 örnek veri ile)
- ✅ **reviews** - Yorumlar
- ✅ **leads** - Danışma talepleri

## 🔐 Güvenlik

- ✅ Row Level Security (RLS) aktif
- ✅ Public read access (herkes okuyabilir)
- ✅ Public insert access (herkes yazabilir)

## 🆘 Sorun mu Var?

- **SQL hatası?** SQL Editor'daki hata mesajını kontrol et
- **Tablo görünmüyor?** Table Editor'da refresh yap
- **Connection hatası?** `.env.local` dosyasını kontrol et

