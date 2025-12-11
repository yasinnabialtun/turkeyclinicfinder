# 📥 Git Kurulum Adımları - Detaylı Rehber

## 🎯 Git İndirme ve Kurulum

### Adım 1: Git'i İndirin
1. **Tarayıcıda açılan sayfada** (veya manuel olarak: https://git-scm.com/download/win)
2. **"Download for Windows"** butonuna tıklayın
3. **İndirme başlar** (yaklaşık 50MB, 1-2 dakika)

### Adım 2: Git'i Kurun
1. **İndirilen dosyayı çalıştırın:** `Git-2.xx.x-64-bit.exe`
2. **Kurulum sihirbazı açılır**
3. **"Next" butonlarına tıklayın** (varsayılan ayarlar genellikle yeterli)

### Adım 3: ÖNEMLİ AYARLAR
Kurulum sırasında şu ayarları kontrol edin:

#### "Select Components" ekranında:
- ✅ **Git Bash Here** (varsayılan)
- ✅ **Git GUI Here** (varsayılan)
- ✅ **Associate .git* configuration files with the default text editor** (varsayılan)
- ✅ **Associate .sh files to be run with Bash** (varsayılan)

#### "Choosing the default editor" ekranında:
- **Vim** veya **Nano** seçin (Vim varsayılan, iyi)

#### "Adjusting your PATH environment" ekranında:
- ✅ **"Git from the command line and also from 3rd-party software"** SEÇİN (ÖNEMLİ!)
- Bu seçenek Git'i PATH'e ekler, böylece PowerShell'den kullanabilirsiniz

#### "Choosing HTTPS transport backend" ekranında:
- ✅ **"Use the OpenSSL library"** (varsayılan, iyi)

#### "Configuring the line ending conversions" ekranında:
- ✅ **"Checkout Windows-style, commit Unix-style line endings"** (varsayılan, iyi)

#### "Configuring the terminal emulator" ekranında:
- ✅ **"Use Windows' default console window"** (varsayılan, iyi)

#### "Configuring extra options" ekranında:
- ✅ **"Enable file system caching"** (varsayılan)
- ✅ **"Enable Git Credential Manager"** (varsayılan)

#### "Configuring experimental options" ekranında:
- İsterseniz boş bırakabilirsiniz

### Adım 4: Kurulumu Tamamlayın
1. **"Install"** butonuna tıklayın
2. **Kurulum tamamlanana kadar bekleyin** (2-3 dakika)
3. **"Finish"** butonuna tıklayın

### Adım 5: PowerShell'i Yeniden Başlatın
1. **Mevcut PowerShell penceresini kapatın**
2. **Yeni PowerShell penceresi açın** (Yönetici olarak açmanıza gerek yok)
3. **Git kurulumunu kontrol edin:**

```powershell
git --version
```

**Çıktı:** `git version 2.xx.x` şeklinde olmalı

### Adım 6: Git Yapılandırması (İlk Kullanım)
PowerShell'de şu komutları çalıştırın:

```powershell
git config --global user.name "Yasin Nabialtun"
git config --global user.email "yasinnabialtun@gmail.com"
```

### Adım 7: GitHub'a Push Yapın
Git kurulduktan sonra:

```powershell
cd C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder
git add .
git commit -m "Update email to info@ynadijital.com, remove phone numbers, add leads management"
git push origin main
```

## ✅ Kurulum Tamamlandı!

Git kurulduktan sonra:
- ✅ Komut satırından push yapabilirsiniz
- ✅ GitHub Desktop kullanabilirsiniz (isteğe bağlı)
- ✅ Tüm Git komutlarını kullanabilirsiniz

## 🆘 Sorun Giderme

### Git komutu çalışmıyor
- **Çözüm:** PowerShell'i yeniden başlatın
- **Veya:** Bilgisayarı yeniden başlatın

### "git: command not found" hatası
- **Çözüm:** Git kurulumu sırasında "Add Git to PATH" seçeneğini işaretleyin
- **Veya:** Git'i yeniden kurun ve PATH seçeneğini işaretleyin

### Push hatası alıyorum
- **Çözüm:** GitHub credentials gerekebilir
- **Veya:** Personal Access Token kullanın

---

**Süre:** 5-10 dakika  
**Zorluk:** Kolay  
**Sonuç:** ✅ Git kurulu, push yapabilirsiniz!

