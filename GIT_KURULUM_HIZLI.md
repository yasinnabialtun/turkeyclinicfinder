# ⚡ Git Kurulum - Hızlı Rehber

## 🎯 3 ADIMDA GİT KURULUMU

### 1️⃣ Git'i İndirin ve Kurun
1. **Tarayıcıda açılan sayfa:** https://git-scm.com/download/win
2. **"Download for Windows"** butonuna tıklayın
3. **İndirilen .exe dosyasını çalıştırın**
4. **Kurulum sırasında:**
   - Tüm "Next" butonlarına tıklayın
   - **ÖNEMLİ:** "Adjusting your PATH environment" ekranında **"Git from the command line and also from 3rd-party software"** seçeneğini işaretleyin
5. **"Install"** → **"Finish"**

### 2️⃣ PowerShell'i Yeniden Başlatın
1. **Mevcut PowerShell penceresini kapatın**
2. **Yeni PowerShell penceresi açın**

### 3️⃣ Otomatik Push Script'ini Çalıştırın
PowerShell'de şu komutu çalıştırın:

```powershell
cd C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder
powershell -ExecutionPolicy Bypass -File .\GIT_KUR_ve_PUSH.ps1
```

**VEYA manuel olarak:**

```powershell
cd C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder
git add .
git commit -m "Update email to info@ynadijital.com, remove phone numbers, add leads management"
git push origin main
```

## ✅ Tamamlandı!

Git kurulduktan sonra:
- ✅ Vercel otomatik deploy başlatacak
- ✅ 2-5 dakika içinde site canlı olacak
- ✅ Site URL: https://turkeyclinicfinder.vercel.app

---

**Git İndirme:** https://git-scm.com/download/win (sayfa açıldı)

