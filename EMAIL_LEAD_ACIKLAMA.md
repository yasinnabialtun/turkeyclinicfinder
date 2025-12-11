# 📧 Email ve Lead Toplama Sistemi - Türkçe Açıklama

## ✅ Yapılan Değişiklikler

1. ✅ **Tüm telefon numaraları kaldırıldı**
2. ✅ **Email adresi güncellendi:** `info@ynadijital.com`
3. ✅ **Admin panel'e Leads sekmesi eklendi**

## 🎯 Lead Toplama Sistemi Nasıl Çalışıyor?

### 1. Kullanıcı Formu Doldurur

**Formlar şu sayfalarda:**
- Ana sayfa (`/`)
- İletişim sayfası (`/contact`)
- Klinik detay sayfası (`/clinic/[id]`)

**Form alanları:**
- İsim (zorunlu)
- Email (zorunlu)
- Telefon (zorunlu)
- Ülke (zorunlu)
- Tedavi (zorunlu)
- Bütçe (opsiyonel)
- Tercih edilen tarih (opsiyonel)
- Mesaj (opsiyonel)

### 2. Backend Lead'i Kaydeder

**API Endpoint:** `POST /api/v1/leads/`

**Ne oluyor:**
1. Form verisi backend'e gönderilir
2. Lead veritabanına kaydedilir (`leads` tablosu)
3. Lead durumu: `NEW` olarak işaretlenir
4. **Otomatik email gönderimi başlatılır**

### 3. Email Gönderimi

**İki email gönderilir:**

#### A. Size Gelen Email (Bildirim)
- **Alıcı:** `info@ynadijital.com`
- **Konu:** `New Consultation Request: [İsim]`
- **İçerik:** 
  - Tüm lead bilgileri (HTML tablo formatında)
  - Admin panel linki
  - Lead ID

#### B. Hastaya Giden Email (Onay)
- **Alıcı:** Formu dolduran kişinin email'i
- **Konu:** `Thank You for Your Consultation Request`
- **İçerik:**
  - Teşekkür mesajı
  - 24 saat içinde dönüş yapılacağı
  - İletişim bilgileri

## 📊 Lead'leri Nasıl Görüntülersiniz?

### Yöntem 1: Admin Panel (Önerilen)

**URL:** `/admin/leads`

**Özellikler:**
- Tüm lead'leri görüntüleme
- Durum bazında filtreleme (NEW, CONTACTED, QUALIFIED, CONVERTED, LOST)
- Lead durumunu güncelleme
- Email gönderme (tek tıkla)
- Sayfalama

**Erişim:**
- Admin veya clinic_owner rolü gerekli
- Backend authentication gerekli

### Yöntem 2: Email Bildirimleri

Her yeni lead geldiğinde `info@ynadijital.com` adresine otomatik email gelir.

### Yöntem 3: Veritabanından

**PostgreSQL Query:**
```sql
-- Tüm lead'ler
SELECT * FROM leads ORDER BY created_at DESC;

-- Yeni lead'ler
SELECT * FROM leads WHERE status = 'new';

-- Günlük lead sayısı
SELECT DATE(created_at), COUNT(*) 
FROM leads 
GROUP BY DATE(created_at) 
ORDER BY DATE(created_at) DESC;
```

## ⚙️ Email Kurulumu (Backend)

### SMTP Ayarları

Backend `.env` dosyasına ekleyin:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@ynadijital.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=info@ynadijital.com
```

### Gmail için App Password

1. Google Account > Security
2. 2-Step Verification'ı açın
3. App Passwords oluşturun
4. Oluşturulan şifreyi `SMTP_PASSWORD` olarak kullanın

### Alternatif SMTP Servisleri

- **SendGrid:** Ücretsiz 100 email/gün
- **Mailgun:** Ücretsiz 5,000 email/ay
- **AWS SES:** Çok uygun fiyatlı

## 📈 Lead İstatistikleri

### Admin Panel'den

Admin panel dashboard'unda lead istatistikleri görüntülenebilir:
- Toplam lead sayısı
- Yeni lead sayısı
- Dönüşüm oranı

### Veritabanından

```sql
-- Toplam lead sayısı
SELECT COUNT(*) FROM leads;

-- Durum bazında
SELECT status, COUNT(*) FROM leads GROUP BY status;

-- Aylık lead sayısı
SELECT DATE_TRUNC('month', created_at), COUNT(*) 
FROM leads 
GROUP BY DATE_TRUNC('month', created_at) 
ORDER BY DATE_TRUNC('month', created_at) DESC;
```

## 🔔 Email Bildirim Örnekleri

### Size Gelen Email

**Konu:** `New Consultation Request: John Doe`

**İçerik:**
```
Name: John Doe
Email: john@example.com
Phone: +1 234 567 8900
Country: United States
Treatment: Hair Transplant
Budget: $2,000 - $5,000
Preferred Date: 2026-04-15
Message: I'm interested in FUE hair transplant...
```

### Hastaya Giden Email

**Konu:** `Thank You for Your Consultation Request`

**İçerik:**
- Teşekkür mesajı
- 24 saat içinde dönüş yapılacağı
- İletişim bilgileri (info@ynadijital.com)

## ✅ Sonuç

**Evet, lead toplayabilirsiniz!**

1. ✅ Formlar çalışıyor
2. ✅ Backend lead'leri kaydediyor
3. ✅ Email bildirimleri gönderiliyor (SMTP kurulumu sonrası)
4. ✅ Veritabanında saklanıyor
5. ✅ Admin panelden görüntülenebilir

**Yapmanız gerekenler:**
1. Backend'i deploy edin
2. SMTP ayarlarını `.env` dosyasına ekleyin
3. Email bildirimleri otomatik gelecek
4. Lead'leri admin panelden (`/admin/leads`) görüntüleyin

---

**Email Adresi:** info@ynadijital.com  
**Lead Toplama:** ✅ Aktif  
**Email Bildirimleri:** ✅ Aktif (SMTP kurulumu sonrası)  
**Admin Panel:** ✅ `/admin/leads`

