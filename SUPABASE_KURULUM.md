# 🗄️ Supabase Kurulum Rehberi (Ücretsiz Database)

Supabase = Firebase alternatifi, PostgreSQL tabanlı, tamamen ücretsiz başlangıç!

## ✅ Supabase Ücretsiz Plan

- ✅ **500MB** database
- ✅ **2GB** bandwidth/ay
- ✅ **50,000** aktif kullanıcı/ay
- ✅ **500MB** file storage
- ✅ **2GB** transfer/ay
- ✅ **Realtime** özellikler
- ✅ **Authentication** dahil
- ✅ **Auto API** (REST + GraphQL)

Küçük-orta projeler için yeterli!

## 🚀 Hızlı Kurulum (5 Dakika)

### 1. Supabase Projesi Oluştur

1. https://supabase.com/ - Git
2. "Start your project" butonuna tıkla
3. GitHub ile giriş yap
4. "New Project" butonuna tıkla
5. Proje bilgileri:
   - **Name:** `turkey-clinic-finder`
   - **Database Password:** Güçlü bir şifre (kaydet!)
   - **Region:** `West Europe` (Türkiye'ye yakın)
6. "Create new project" butonuna tıkla
7. 2-3 dakika bekle (proje oluşturuluyor)

### 2. API Keys Al

1. Proje açıldıktan sonra sol menüden **Settings** (⚙️) > **API**
2. Şu bilgileri kopyala:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon public key:** `eyJhbGc...` (uzun string)
   - **service_role key:** (gizli tut, sadece backend için)

### 3. Frontend'e Entegre Et

`frontend/.env.local` dosyasına ekle:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

### 4. Supabase Client Kur

```powershell
cd frontend
npm install @supabase/supabase-js
```

## 📊 Database Tabloları Oluştur

Supabase Dashboard > SQL Editor'den çalıştır:

```sql
-- Clinics tablosu
CREATE TABLE clinics (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT,
  treatments TEXT[],
  rating DECIMAL(3,2),
  review_count INTEGER DEFAULT 0,
  price_range TEXT,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Reviews tablosu
CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  clinic_id BIGINT REFERENCES clinics(id),
  user_id UUID REFERENCES auth.users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Leads tablosu
CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  clinic_id BIGINT REFERENCES clinics(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  treatment TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index'ler
CREATE INDEX idx_clinics_city ON clinics(city);
CREATE INDEX idx_reviews_clinic ON reviews(clinic_id);
CREATE INDEX idx_leads_clinic ON leads(clinic_id);
```

## 🔐 Row Level Security (RLS)

Güvenlik için RLS aktifleştir:

```sql
-- Clinics: Herkes okuyabilir
ALTER TABLE clinics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Clinics are viewable by everyone" ON clinics
  FOR SELECT USING (true);

-- Reviews: Herkes okuyabilir, authenticated kullanıcılar yazabilir
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Reviews are viewable by everyone" ON reviews
  FOR SELECT USING (true);
CREATE POLICY "Users can insert reviews" ON reviews
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Leads: Sadece authenticated kullanıcılar yazabilir
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can insert leads" ON leads
  FOR INSERT WITH CHECK (true);
```

## 💻 Frontend'de Kullanım

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Veri çek
const { data, error } = await supabase
  .from('clinics')
  .select('*')
  .eq('city', 'Istanbul');

// Veri ekle
const { data, error } = await supabase
  .from('leads')
  .insert({ name: 'John', email: 'john@example.com' });
```

## ✅ Avantajlar

- ✅ **PostgreSQL** - Güçlü SQL database
- ✅ **Ücretsiz** - Cömert free tier
- ✅ **Realtime** - Canlı güncellemeler
- ✅ **Auth** - Kullanıcı yönetimi dahil
- ✅ **Storage** - Dosya depolama
- ✅ **Auto API** - REST ve GraphQL otomatik

## 🆚 Supabase vs Firebase

| Özellik | Supabase | Firebase |
|---------|----------|----------|
| Database | PostgreSQL (SQL) | Firestore (NoSQL) |
| Ücretsiz Limit | 500MB | 1GB |
| Query | SQL | NoSQL |
| Realtime | ✅ | ✅ |
| Auth | ✅ | ✅ |
| Storage | ✅ | ✅ |

## 🚀 Sonraki Adımlar

1. Supabase projesi oluştur
2. API keys al
3. Tabloları oluştur
4. Frontend'e entegre et
5. Test et!

