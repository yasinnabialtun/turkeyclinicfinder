-- Turkey Clinic Finder Database Schema
-- Supabase SQL Editor'de çalıştır

-- Clinics tablosu
CREATE TABLE IF NOT EXISTS clinics (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT,
  treatments TEXT[],
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  price_range TEXT,
  description TEXT,
  image_url TEXT,
  website_url TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews tablosu
CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  clinic_id BIGINT REFERENCES clinics(id) ON DELETE CASCADE,
  user_name TEXT,
  user_email TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  content TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads (Consultation Requests) tablosu
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  clinic_id BIGINT REFERENCES clinics(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  treatment TEXT,
  message TEXT,
  preferred_date DATE,
  budget TEXT,
  status TEXT DEFAULT 'new',
  accommodation_needed BOOLEAN DEFAULT false,
  travel_assistance_needed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index'ler (performans için)
CREATE INDEX IF NOT EXISTS idx_clinics_city ON clinics(city);
CREATE INDEX IF NOT EXISTS idx_clinics_treatments ON clinics USING GIN(treatments);
CREATE INDEX IF NOT EXISTS idx_reviews_clinic ON reviews(clinic_id);
CREATE INDEX IF NOT EXISTS idx_reviews_created ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_clinic ON leads(clinic_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

-- Row Level Security (RLS) - Güvenlik
ALTER TABLE clinics ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policies: Herkes okuyabilir, herkes yazabilir (public app için)
-- Önce mevcut policy'leri sil (varsa)
DROP POLICY IF EXISTS "Clinics are viewable by everyone" ON clinics;
DROP POLICY IF EXISTS "Reviews are viewable by everyone" ON reviews;
DROP POLICY IF EXISTS "Anyone can insert reviews" ON reviews;
DROP POLICY IF EXISTS "Anyone can insert leads" ON leads;

-- Policy'leri oluştur
CREATE POLICY "Clinics are viewable by everyone" ON clinics
  FOR SELECT USING (true);

CREATE POLICY "Reviews are viewable by everyone" ON reviews
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert reviews" ON reviews
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Updated_at trigger (otomatik güncelleme)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Önce mevcut trigger'ı sil (varsa)
DROP TRIGGER IF EXISTS update_clinics_updated_at ON clinics;

-- Trigger'ı oluştur
CREATE TRIGGER update_clinics_updated_at BEFORE UPDATE ON clinics
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Örnek veri ekle (test için)
INSERT INTO clinics (name, city, treatments, rating, review_count, price_range, description) VALUES
('Istanbul Hair Transplant Center', 'Istanbul', ARRAY['Hair Transplant', 'Beard Transplant'], 4.8, 245, '$1,500 - $3,000', 'Leading hair transplant clinic in Istanbul with 15+ years of experience.'),
('Ankara Dental Care', 'Ankara', ARRAY['Dental Implants', 'Teeth Whitening', 'Orthodontics'], 4.7, 189, '$800 - $2,500', 'Modern dental clinic offering comprehensive dental services.'),
('Izmir Plastic Surgery', 'Izmir', ARRAY['Rhinoplasty', 'Breast Augmentation', 'Liposuction'], 4.9, 312, '$3,000 - $8,000', 'Expert plastic surgeons with international certifications.'),
('Antalya Medical Center', 'Antalya', ARRAY['Hair Transplant', 'Dental Care', 'Eye Surgery'], 4.6, 156, '$1,200 - $4,000', 'Full-service medical center in beautiful Antalya.'),
('Bursa Orthopedic Clinic', 'Bursa', ARRAY['Knee Surgery', 'Hip Replacement', 'Sports Medicine'], 4.5, 98, '$2,000 - $6,000', 'Specialized orthopedic treatments and rehabilitation.')
ON CONFLICT DO NOTHING;

