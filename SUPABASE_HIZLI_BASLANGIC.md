# ⚡ Supabase Hızlı Başlangıç

## ✅ Yapılanlar

- ✅ Supabase projesi oluşturuldu
- ✅ API keys `.env.local` dosyasına eklendi
- ✅ Supabase client kuruldu

## 🚀 Şimdi Yapılacaklar

### 1. Database Tablolarını Oluştur

1. **SQL Editor'a Git:**
   - Supabase Dashboard > SQL Editor (sol menü)
   - VEYA: https://czfcnckknavfolhiqpum.supabase.co/project/czfcnckknavfolhiqpum/sql/new

2. **SQL'i Çalıştır:**
   - `supabase_schema.sql` dosyasındaki tüm SQL'i kopyala
   - SQL Editor'a yapıştır
   - "Run" butonuna tıkla (veya Ctrl+Enter)

3. **Kontrol Et:**
   - Sol menüden "Table Editor" > "clinics" tablosuna bak
   - 5 örnek klinik görünmeli

### 2. Frontend'i Test Et

```powershell
cd frontend
npm run dev
```

Tarayıcıda: http://localhost:3000

### 3. Vercel'e Deploy Et

Environment variables ekle:

1. Vercel Dashboard > Project > Settings > Environment Variables
2. Şunları ekle:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://czfcnckknavfolhiqpum.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (anon key)

3. Redeploy et

## 📊 Database Yapısı

### Tables:
- **clinics** - Klinik bilgileri
- **reviews** - Yorumlar
- **leads** - Danışma talepleri

### Security:
- ✅ Row Level Security (RLS) aktif
- ✅ Public read access
- ✅ Public insert access (reviews, leads)

## 💻 Frontend'de Kullanım

```typescript
import { getClinics, createLead } from '@/lib/supabase';

// Klinikleri çek
const { data, error } = await getClinics({ city: 'Istanbul' });

// Lead oluştur
const result = await createLead({
  name: 'John Doe',
  email: 'john@example.com',
  country: 'USA',
  treatment: 'Hair Transplant'
});
```

## ✅ Avantajlar

- ✅ **Ücretsiz** - 500MB database
- ✅ **PostgreSQL** - Güçlü SQL
- ✅ **Realtime** - Canlı güncellemeler
- ✅ **Auth** - Kullanıcı yönetimi (opsiyonel)
- ✅ **Storage** - Dosya depolama (opsiyonel)

## 🆘 Sorun mu Var?

- **SQL hatası?** SQL Editor loglarına bak
- **Connection hatası?** `.env.local` dosyasını kontrol et
- **RLS hatası?** Policies'leri kontrol et

