# 📥 Git Kurulum Talimatları (5 Dakika)

## 🎯 Adım Adım Git Kurulumu

### 1️⃣ Git'i İndirin
1. **Tarayıcıda açın:** https://git-scm.com/download/win
2. **"Download for Windows"** butonuna tıklayın
3. **İndirme başlar** (yaklaşık 50MB)

### 2️⃣ Git'i Kurun
1. **İndirilen dosyayı çalıştırın:** `Git-2.xx.x-64-bit.exe`
2. **Kurulum sihirbazı açılır**
3. **"Next" butonlarına tıklayın** (varsayılan ayarlar yeterli)
4. **Önemli ayarlar:**
   - ✅ "Git from the command line and also from 3rd-party software" seçin
   - ✅ "Use bundled OpenSSH" seçin
   - ✅ "Checkout Windows-style, commit Unix-style line endings" seçin
5. **"Install"** butonuna tıklayın
6. **Kurulum tamamlanana kadar bekleyin** (2-3 dakika)

### 3️⃣ PowerShell'i Yeniden Başlatın
1. **Mevcut PowerShell penceresini kapatın**
2. **Yeni PowerShell penceresi açın**
3. **Git kurulumunu kontrol edin:**
   ```powershell
   git --version
   ```
4. **Çıktı:** `git version 2.xx.x` şeklinde olmalı

### 4️⃣ Git Yapılandırması (İlk Kullanım)
```powershell
git config --global user.name "Yasin Nabialtun"
git config --global user.email "yasinnabialtun@gmail.com"
```

### 5️⃣ GitHub'a Push Yapın
```powershell
cd C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder
git add .
git commit -m "Add 5 new SEO articles, email integration, consultation forms, and improvements"
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
- **Çözüm:** Git kurulumu sırasında "Add to PATH" seçeneğini işaretleyin
- **Veya:** Git'i yeniden kurun

### Push hatası alıyorum
- **Çözüm:** GitHub credentials gerekebilir
- **Veya:** Personal Access Token kullanın

---

**Süre:** 5 dakika  
**Zorluk:** Kolay  
**Sonuç:** ✅ Git kurulu, push yapabilirsiniz!

