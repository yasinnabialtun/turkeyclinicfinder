# 📧 Email ve Lead Toplama Sistemi - Detaylı Açıklama

## 🎯 Sistem Nasıl Çalışıyor?

### 1. Lead Toplama Süreci

#### Frontend (Kullanıcı Tarafı)
1. **ConsultationForm Component** (`frontend/src/components/ConsultationForm.tsx`)
   - Kullanıcı formu doldurur (isim, email, telefon, ülke, tedavi, bütçe, mesaj)
   - Form submit edildiğinde `apiClient.createLead()` çağrılır
   - API'ye POST isteği gönderilir: `/api/v1/leads/`

#### Backend (API Tarafı)
2. **Lead Endpoint** (`backend/app/api/v1/endpoints/leads.py`)
   - `POST /api/v1/leads/` endpoint'i lead'i alır
   - Lead veritabanına kaydedilir (`leads` tablosu)
   - Lead durumu: `NEW` olarak işaretlenir
   - **Otomatik email gönderimi başlatılır**

### 2. Email Gönderme Sistemi

#### Email Service (`backend/app/services/email_service.py`)

**İki tip email gönderilir:**

##### A. Admin/Clinic Bildirim Email'i
- **Alıcı:** `info@ynadijital.com` (SMTP_FROM_EMAIL veya varsayılan)
- **İçerik:** 
  - Yeni lead bilgileri (isim, email, telefon, ülke, tedavi, bütçe, mesaj)
  - Admin panel linki
  - HTML formatında tablo
- **Fonksiyon:** `EmailService.send_consultation_notification()`

##### B. Hasta Onay Email'i
- **Alıcı:** Formu dolduran kullanıcının email'i
- **İçerik:**
  - Teşekkür mesajı
  - 24 saat içinde dönüş yapılacağı bilgisi
  - İletişim bilgileri
- **Fonksiyon:** `EmailService.send_consultation_confirmation()`

### 3. Veritabanı Yapısı

**Lead Model** (`backend/app/models/lead.py`):
```python
- id: Lead ID
- clinic_id: İlgili klinik (opsiyonel)
- user_id: Kullanıcı ID (opsiyonel)
- name: İsim
- email: Email
- phone: Telefon
- country: Ülke
- treatment: Tedavi türü
- message: Mesaj
- budget: Bütçe
- preferred_date: Tercih edilen tarih
- status: Durum (NEW, CONTACTED, QUALIFIED, CONVERTED, LOST)
- source: Kaynak (website_consultation_form)
- created_at: Oluşturulma tarihi
```

## 📊 Lead'leri Nasıl Görüntülersiniz?

### Yöntem 1: Admin Panel (Önerilen)

**Endpoint:** `GET /api/v1/leads/`

**Erişim:**
- Admin veya clinic_owner rolü gerekli
- Admin panel: `/admin/leads` (henüz frontend sayfası yok, API mevcut)

**Filtreleme:**
- Status: `new`, `contacted`, `qualified`, `converted`, `lost`
- Clinic ID: Belirli bir klinik için
- Sayfalama: `page` ve `page_size` parametreleri

### Yöntem 2: Veritabanından Direkt

**PostgreSQL Query:**
```sql
SELECT * FROM leads ORDER BY created_at DESC;
```

**Belirli durumdaki lead'ler:**
```sql
SELECT * FROM leads WHERE status = 'new';
```

### Yöntem 3: Email Bildirimleri

Her yeni lead geldiğinde `info@ynadijital.com` adresine email gönderilir.

## ⚙️ Email Kurulumu

### SMTP Ayarları (Backend `.env` dosyası)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@ynadijital.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=info@ynadijital.com
```

### Gmail için App Password Oluşturma

1. Google Account > Security
2. 2-Step Verification'ı açın
3. App Passwords oluşturun
4. Oluşturulan şifreyi `SMTP_PASSWORD` olarak kullanın

### Alternatif SMTP Servisleri

- **SendGrid:** Ücretsiz 100 email/gün
- **Mailgun:** Ücretsiz 5,000 email/ay
- **AWS SES:** Çok uygun fiyatlı
- **Gmail:** Ücretsiz (günlük limit var)

## 📈 Lead Toplama İstatistikleri

### API ile İstatistikler

**Endpoint:** `GET /api/v1/admin/stats` (admin gerekli)

**Dönen veriler:**
- Toplam lead sayısı
- Yeni lead sayısı
- Dönüşüm oranı
- vb.

### Manuel Hesaplama

```sql
-- Toplam lead sayısı
SELECT COUNT(*) FROM leads;

-- Durum bazında
SELECT status, COUNT(*) FROM leads GROUP BY status;

-- Günlük lead sayısı
SELECT DATE(created_at), COUNT(*) 
FROM leads 
GROUP BY DATE(created_at) 
ORDER BY DATE(created_at) DESC;
```

## 🔔 Email Bildirim Örnekleri

### Admin Bildirim Email'i

**Konu:** `New Consultation Request: [İsim]`

**İçerik:**
- HTML tablo formatında tüm lead bilgileri
- Admin panel linki
- Lead ID

### Hasta Onay Email'i

**Konu:** `Thank You for Your Consultation Request - Turkey Clinic Finder`

**İçerik:**
- Teşekkür mesajı
- 24 saat içinde dönüş yapılacağı
- İletişim bilgileri
- Tedavi detayları

## 🎯 Lead Yönetimi

### Lead Durumları

1. **NEW:** Yeni gelen lead (varsayılan)
2. **CONTACTED:** İletişime geçildi
3. **QUALIFIED:** Nitelikli lead
4. **CONVERTED:** Müşteriye dönüştü
5. **LOST:** Kayıp lead

### Lead Durumunu Güncelleme

**API Endpoint:** `PUT /api/v1/leads/{lead_id}` (henüz yok, eklenebilir)

**Manuel SQL:**
```sql
UPDATE leads SET status = 'contacted' WHERE id = 1;
```

## 📋 Lead Toplama Formları

### Mevcut Formlar

1. **Ana Sayfa:** `/` - ConsultationForm component
2. **İletişim Sayfası:** `/contact` - ConsultationForm component
3. **Klinik Detay Sayfası:** `/clinic/[id]` - ConsultationForm component (klinik ID ile)

### Form Alanları

- ✅ İsim (zorunlu)
- ✅ Email (zorunlu)
- ✅ Telefon (zorunlu)
- ✅ Ülke (zorunlu)
- ✅ Tedavi (zorunlu)
- ✅ Bütçe (opsiyonel)
- ✅ Tercih edilen tarih (opsiyonel)
- ✅ Mesaj (opsiyonel)
- ✅ Klinik ID (opsiyonel - clinic sayfasından geliyorsa)

## ✅ Sonuç

**Evet, lead toplayabilirsiniz!**

1. ✅ Formlar çalışıyor
2. ✅ Backend lead'leri kaydediyor
3. ✅ Email bildirimleri gönderiliyor
4. ✅ Veritabanında saklanıyor
5. ✅ Admin panelden görüntülenebilir (API mevcut)

**Yapmanız gerekenler:**
1. Backend'i deploy edin
2. SMTP ayarlarını `.env` dosyasına ekleyin
3. Email bildirimleri otomatik gelecek
4. Lead'leri veritabanından veya admin panelden görüntüleyin

---

**Email Adresi:** info@ynadijital.com  
**Lead Toplama:** ✅ Aktif  
**Email Bildirimleri:** ✅ Aktif (SMTP kurulumu sonrası)

