# GitHub'a Proje Yükleme Talimatları

Bu dosya, mevcut projeyi GitHub repository'sine yüklemek için adımları içerir.

## Önemli Uyarı

⚠️ **Bu işlem GitHub repository'sindeki TÜM içeriği silip yerine mevcut projeyi koyacaktır!**

## Adım 1: Git Kurulumu

Git yüklü değilse, önce Git'i kurmanız gerekiyor:

### Seçenek A: Git'i doğrudan kurun
1. https://git-scm.com/download/win adresinden Git for Windows'u indirin
2. Kurulumu tamamlayın
3. PowerShell'i yeniden başlatın

### Seçenek B: GitHub Desktop kullanın
1. https://desktop.github.com/ adresinden GitHub Desktop'u indirin
2. Kurulumu tamamlayın

## Adım 2: Otomatik Script ile Yükleme (Önerilen)

PowerShell'de şu komutu çalıştırın:

```powershell
.\scripts\push_to_github.ps1
```

Script şunları yapacak:
- Git repository'sini başlatacak (eğer yoksa)
- Tüm dosyaları ekleyecek
- Commit yapacak
- GitHub repository'sine force push yapacak (tüm eski içeriği silecek)

## Adım 3: Manuel Yükleme

Eğer script çalışmazsa, şu komutları sırayla çalıştırın:

```powershell
# Git repository'sini başlat
git init

# Remote repository'yi ekle
git remote add origin https://github.com/yasinnabialtun/turkeyclinicfinder.git

# Tüm dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit: Replace repository with current project"

# Branch'i main olarak ayarla
git branch -M main

# GitHub'a force push yap (ESKİ İÇERİĞİ SİLECEK!)
git push -f origin main
```

## Kimlik Doğrulama

İlk kez push yaparken GitHub kimlik doğrulaması isteyebilir:

1. **Personal Access Token kullanın** (önerilen):
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Yeni token oluşturun (repo yetkisi verin)
   - Push sırasında şifre yerine token'ı kullanın

2. **GitHub Desktop kullanın**:
   - GitHub Desktop ile otomatik kimlik doğrulama yapılır

## Sorun Giderme

### "git is not recognized" hatası
- Git'in kurulu olduğundan emin olun
- PowerShell'i yeniden başlatın
- Git'in PATH'te olduğunu kontrol edin

### "Permission denied" hatası
- GitHub kimlik doğrulamasını kontrol edin
- Personal Access Token kullanın
- Repository'nin size ait olduğundan emin olun

### "Repository not found" hatası
- Repository URL'sinin doğru olduğundan emin olun
- Repository'nin var olduğundan emin olun
- Erişim izinlerinizi kontrol edin

## İşlem Tamamlandıktan Sonra

Push işlemi başarılı olduktan sonra:
- Repository'nizi kontrol edin: https://github.com/yasinnabialtun/turkeyclinicfinder
- Tüm dosyaların yüklendiğini doğrulayın
- README.md'nin doğru göründüğünü kontrol edin

