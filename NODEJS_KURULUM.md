# 📦 Node.js Kurulum Rehberi

## 🚀 Hızlı Kurulum

1. **Node.js İndir:**
   - https://nodejs.org/
   - **LTS (Long Term Support)** sürümünü indir (önerilen)
   - Örnek: v20.x.x veya v18.x.x

2. **Kurulum:**
   - İndirilen `.msi` dosyasını çalıştır
   - "Next" butonlarına tıkla (varsayılan ayarlar yeterli)
   - ✅ **"Add to PATH" seçeneği işaretli olmalı** (otomatik işaretli)

3. **Kurulumu Doğrulama:**
   - PowerShell'i **yeniden başlat** (önemli!)
   - Şu komutları çalıştır:
   ```powershell
   node --version
   npm --version
   ```
   - Her ikisi de versiyon numarası göstermeli

4. **Kurulum Tamamlandı!** ✅

## ⚠️ Önemli Notlar

- **PowerShell'i yeniden başlat** - Node.js PATH'e eklenir
- **LTS sürümünü seç** - Daha stabil
- **"Add to PATH" işaretli olsun** - Otomatik işaretli

## ✅ Kurulum Sonrası

Node.js kurulduktan sonra:

```powershell
# Proje klasörüne git
cd C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder

# Kurulum scriptini tekrar çalıştır
.\scripts\basit_kurulum.ps1
```

## 🆘 Sorun mu Var?

### "node is not recognized"
- PowerShell'i yeniden başlat
- Bilgisayarı yeniden başlat (gerekirse)
- Node.js'i yeniden kur

### Kurulum çalışmıyor
- Yönetici olarak çalıştır
- Antivirus'ü geçici kapat
- Windows Defender'ı kontrol et

## 📊 Node.js Versiyonları

- **LTS (v20.x.x)** - Önerilen, stabil
- **Current (v22.x.x)** - En yeni, deneysel özellikler

**LTS kullan, daha güvenli!**

