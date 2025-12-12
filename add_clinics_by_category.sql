-- Turkey Clinic Finder - Kategori Bazlı Klinik Ekleme Scripti
-- Supabase SQL Editor'de çalıştır

-- Saç Ekimi Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Hair Transplant Center', 'Istanbul', ARRAY['Hair Transplant', 'Beard Transplant', 'Eyebrow Transplant'], '$1,500 - $3,000', 'Leading hair transplant clinic in Istanbul with 15+ years of experience. Specializes in FUE and DHI techniques with international accreditation.', 'info@istanbulhaircenter.com', '+90 212 555 0101', 'Nişantaşı, Istanbul'),
('Ankara Hair Restoration Clinic', 'Ankara', ARRAY['Hair Transplant', 'FUE', 'Sapphire FUE'], '$1,200 - $2,800', 'Modern hair transplant facility in Ankara offering advanced FUE techniques with experienced surgeons.', 'info@ankarahairclinic.com', '+90 312 555 0202', 'Çankaya, Ankara'),
('Izmir Hair Transplant Institute', 'Izmir', ARRAY['Hair Transplant', 'Beard Transplant', 'DHI'], '$1,300 - $2,900', 'Premium hair transplant services in Izmir with state-of-the-art equipment and certified surgeons.', 'info@izmirhairinstitute.com', '+90 232 555 0303', 'Alsancak, Izmir'),
('Antalya Hair Center', 'Antalya', ARRAY['Hair Transplant', 'FUE', 'Beard Transplant'], '$1,400 - $3,200', 'Combines medical excellence with beautiful Antalya location. All-inclusive packages available.', 'info@antalyahaircenter.com', '+90 242 555 0404', 'Lara, Antalya'),
('Bursa Hair Transplant Clinic', 'Bursa', ARRAY['Hair Transplant', 'FUE', 'Sapphire FUE'], '$1,100 - $2,600', 'Affordable hair transplant solutions in Bursa with high success rates and patient satisfaction.', 'info@bursahairclinic.com', '+90 224 555 0505', 'Nilüfer, Bursa')
ON CONFLICT DO NOTHING;

-- Diş Hekimliği Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Dental Care Center', 'Istanbul', ARRAY['Dental Implants', 'Teeth Whitening', 'Veneers', 'All-on-4'], '$800 - $2,500', 'Comprehensive dental services in Istanbul with German and Swiss dental materials. JCI accredited facility.', 'info@istanbuldental.com', '+90 212 555 0606', 'Şişli, Istanbul'),
('Ankara Smile Clinic', 'Ankara', ARRAY['Dental Implants', 'Orthodontics', 'Teeth Whitening', 'Crowns'], '$700 - $2,200', 'Modern dental clinic in Ankara offering full range of cosmetic and restorative dentistry.', 'info@ankarasmile.com', '+90 312 555 0707', 'Kızılay, Ankara'),
('Izmir Dental Excellence', 'Izmir', ARRAY['Dental Implants', 'Veneers', 'All-on-4', 'Full Mouth Restoration'], '$900 - $3,000', 'Premium dental clinic in Izmir with internationally trained dentists and latest technology.', 'info@izmirdental.com', '+90 232 555 0808', 'Konak, Izmir'),
('Antalya Dental Tourism Center', 'Antalya', ARRAY['Dental Implants', 'Teeth Whitening', 'Veneers', 'Dental Tourism Packages'], '$750 - $2,400', 'Specializes in dental tourism with all-inclusive packages including accommodation and transfers.', 'info@antalyadental.com', '+90 242 555 0909', 'Konyaaltı, Antalya'),
('Bursa Modern Dentistry', 'Bursa', ARRAY['Dental Implants', 'Orthodontics', 'Teeth Whitening'], '$650 - $2,000', 'Affordable dental care in Bursa with modern equipment and experienced dental professionals.', 'info@bursadental.com', '+90 224 555 1010', 'Osmangazi, Bursa')
ON CONFLICT DO NOTHING;

-- Plastik Cerrahi Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Plastic Surgery Center', 'Istanbul', ARRAY['Rhinoplasty', 'Breast Augmentation', 'Liposuction', 'Tummy Tuck'], '$3,000 - $8,000', 'Leading plastic surgery center in Istanbul with board-certified surgeons and international certifications.', 'info@istanbulplasticsurgery.com', '+90 212 555 1111', 'Bebek, Istanbul'),
('Ankara Aesthetic Clinic', 'Ankara', ARRAY['Rhinoplasty', 'Breast Augmentation', 'Facelift', 'Botox'], '$2,800 - $7,500', 'Comprehensive aesthetic surgery services in Ankara with modern facilities and experienced surgeons.', 'info@ankaraesthetic.com', '+90 312 555 1212', 'Çankaya, Ankara'),
('Izmir Cosmetic Surgery Institute', 'Izmir', ARRAY['Rhinoplasty', 'Breast Augmentation', 'Liposuction', 'Mommy Makeover'], '$3,200 - $8,500', 'Premium cosmetic surgery services in Izmir with state-of-the-art operating rooms.', 'info@izmircosmetic.com', '+90 232 555 1313', 'Karşıyaka, Izmir'),
('Antalya Beauty Center', 'Antalya', ARRAY['Rhinoplasty', 'Breast Augmentation', 'Liposuction', 'Body Contouring'], '$2,900 - $7,800', 'Combines plastic surgery with vacation in beautiful Antalya. All-inclusive packages available.', 'info@antalyabeauty.com', '+90 242 555 1414', 'Lara, Antalya'),
('Bursa Aesthetic Surgery', 'Bursa', ARRAY['Rhinoplasty', 'Breast Augmentation', 'Liposuction'], '$2,500 - $7,000', 'Affordable aesthetic surgery in Bursa with high-quality results and patient care.', 'info@bursaaesthetic.com', '+90 224 555 1515', 'Nilüfer, Bursa')
ON CONFLICT DO NOTHING;

-- Tüp Bebek (IVF) Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul IVF Center', 'Istanbul', ARRAY['IVF Treatment', 'ICSI', 'Egg Donation', 'Embryo Transfer'], '$3,000 - $5,000', 'Leading IVF center in Istanbul with high success rates and experienced fertility specialists.', 'info@istanbulivf.com', '+90 212 555 1616', 'Levent, Istanbul'),
('Ankara Fertility Clinic', 'Ankara', ARRAY['IVF Treatment', 'ICSI', 'Frozen Embryo Transfer'], '$2,800 - $4,800', 'Modern fertility clinic in Ankara offering comprehensive IVF services with latest technology.', 'info@ankarafertility.com', '+90 312 555 1717', 'Çankaya, Ankara'),
('Izmir Reproductive Health Center', 'Izmir', ARRAY['IVF Treatment', 'ICSI', 'Egg Donation', 'Surrogacy'], '$3,200 - $5,200', 'Premium IVF services in Izmir with international success rates and patient support.', 'info@izmirivf.com', '+90 232 555 1818', 'Alsancak, Izmir'),
('Antalya IVF Clinic', 'Antalya', ARRAY['IVF Treatment', 'ICSI', 'Embryo Transfer'], '$2,900 - $4,900', 'Fertility treatment in beautiful Antalya with all-inclusive packages and accommodation.', 'info@antalyavf.com', '+90 242 555 1919', 'Lara, Antalya')
ON CONFLICT DO NOTHING;

-- Ortopedi Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Orthopedic Center', 'Istanbul', ARRAY['Knee Surgery', 'Hip Replacement', 'Shoulder Surgery', 'Sports Medicine'], '$2,000 - $6,000', 'Comprehensive orthopedic services in Istanbul with experienced surgeons and rehabilitation facilities.', 'info@istanbulortho.com', '+90 212 555 2020', 'Şişli, Istanbul'),
('Ankara Sports Medicine Clinic', 'Ankara', ARRAY['Knee Surgery', 'Hip Replacement', 'Sports Medicine', 'Physical Therapy'], '$1,800 - $5,500', 'Specialized sports medicine and orthopedic surgery in Ankara with modern rehabilitation center.', 'info@ankarasports.com', '+90 312 555 2121', 'Çankaya, Ankara'),
('Izmir Orthopedic Institute', 'Izmir', ARRAY['Knee Surgery', 'Hip Replacement', 'Spine Surgery', 'Arthroscopy'], '$2,200 - $6,500', 'Advanced orthopedic surgery in Izmir with minimally invasive techniques and robotic surgery.', 'info@izmirortho.com', '+90 232 555 2222', 'Konak, Izmir'),
('Bursa Orthopedic Clinic', 'Bursa', ARRAY['Knee Surgery', 'Hip Replacement', 'Sports Medicine'], '$1,900 - $5,800', 'Affordable orthopedic care in Bursa with experienced surgeons and comprehensive rehabilitation.', 'info@bursaortho.com', '+90 224 555 2323', 'Nilüfer, Bursa')
ON CONFLICT DO NOTHING;

-- Oftalmoloji (Göz Cerrahisi) Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Eye Surgery Center', 'Istanbul', ARRAY['LASIK', 'Cataract Surgery', 'Retinal Surgery', 'Eye Exams'], '$1,200 - $4,000', 'Leading eye surgery center in Istanbul with latest laser technology and experienced ophthalmologists.', 'info@istanbuleye.com', '+90 212 555 2424', 'Nişantaşı, Istanbul'),
('Ankara Vision Clinic', 'Ankara', ARRAY['LASIK', 'Cataract Surgery', 'Glaucoma Treatment'], '$1,000 - $3,500', 'Comprehensive eye care in Ankara with modern diagnostic equipment and surgical facilities.', 'info@ankaravision.com', '+90 312 555 2525', 'Kızılay, Ankara'),
('Izmir Eye Institute', 'Izmir', ARRAY['LASIK', 'Cataract Surgery', 'Retinal Surgery', 'Corneal Transplant'], '$1,300 - $4,200', 'Advanced eye surgery in Izmir with international standards and patient care.', 'info@izmirvision.com', '+90 232 555 2626', 'Karşıyaka, Izmir')
ON CONFLICT DO NOTHING;

-- Obezite Cerrahisi (Bariatric Surgery) Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Bariatric Center', 'Istanbul', ARRAY['Gastric Sleeve', 'Gastric Bypass', 'Gastric Balloon', 'Weight Loss Surgery'], '$4,000 - $8,000', 'Leading bariatric surgery center in Istanbul with comprehensive pre and post-operative care.', 'info@istanbulbariatric.com', '+90 212 555 2727', 'Şişli, Istanbul'),
('Ankara Weight Loss Clinic', 'Ankara', ARRAY['Gastric Sleeve', 'Gastric Bypass', 'Gastric Balloon'], '$3,800 - $7,500', 'Specialized weight loss surgery in Ankara with experienced bariatric surgeons and nutrition support.', 'info@ankaraweightloss.com', '+90 312 555 2828', 'Çankaya, Ankara'),
('Izmir Bariatric Surgery', 'Izmir', ARRAY['Gastric Sleeve', 'Gastric Bypass', 'Sleeve Gastrectomy'], '$4,200 - $8,500', 'Advanced bariatric surgery in Izmir with minimally invasive techniques and comprehensive follow-up.', 'info@izmirbariatric.com', '+90 232 555 2929', 'Alsancak, Izmir')
ON CONFLICT DO NOTHING;

-- Onkoloji (Kanser Tedavisi) Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Oncology Center', 'Istanbul', ARRAY['Cancer Treatment', 'Chemotherapy', 'Radiation Therapy', 'Immunotherapy'], '$5,000 - $15,000', 'Comprehensive cancer treatment center in Istanbul with latest oncology technology and experienced oncologists.', 'info@istanbuloncology.com', '+90 212 555 3030', 'Şişli, Istanbul'),
('Ankara Cancer Institute', 'Ankara', ARRAY['Cancer Treatment', 'Chemotherapy', 'Radiation Therapy'], '$4,500 - $12,000', 'Advanced cancer treatment in Ankara with multidisciplinary approach and patient support services.', 'info@ankaracancer.com', '+90 312 555 3131', 'Çankaya, Ankara')
ON CONFLICT DO NOTHING;

-- Kardiyoloji Klinikleri
INSERT INTO clinics (name, city, treatments, price_range, description, email, phone, address) VALUES
('Istanbul Heart Center', 'Istanbul', ARRAY['Cardiac Surgery', 'Angioplasty', 'Heart Valve Surgery', 'Cardiac Checkup'], '$3,500 - $10,000', 'Leading cardiac care center in Istanbul with advanced cardiac surgery and interventional cardiology.', 'info@istanbulheart.com', '+90 212 555 3232', 'Şişli, Istanbul'),
('Ankara Cardiology Clinic', 'Ankara', ARRAY['Cardiac Surgery', 'Angioplasty', 'Heart Valve Surgery'], '$3,200 - $9,500', 'Comprehensive cardiac care in Ankara with experienced cardiologists and modern cardiac facilities.', 'info@ankaracardio.com', '+90 312 555 3333', 'Kızılay, Ankara')
ON CONFLICT DO NOTHING;

