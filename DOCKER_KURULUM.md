# 🐳 Docker Desktop Kurulum Rehberi (Windows)

## Adım 1: Docker Desktop İndirme

1. **Docker Desktop'ı indirin:**
   - Resmi site: https://www.docker.com/products/docker-desktop
   - Direkt indirme linki: https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe

2. **İndirme tamamlandıktan sonra:**
   - İndirilen `Docker Desktop Installer.exe` dosyasını çalıştırın

## Adım 2: Kurulum

1. **Kurulum sihirbazını başlatın**
   - "Use WSL 2 instead of Hyper-V" seçeneğini işaretleyin (önerilen)
   - "Add shortcut to desktop" seçeneğini işaretleyin

2. **Kurulum tamamlanana kadar bekleyin**
   - Kurulum 5-10 dakika sürebilir
   - İnternet bağlantınızın olduğundan emin olun

3. **Kurulum sonrası:**
   - "Close and restart" butonuna tıklayın
   - Bilgisayarınızı yeniden başlatın (gerekli)

## Adım 3: İlk Başlatma

1. **Docker Desktop'ı başlatın**
   - Masaüstünden veya Başlat menüsünden açın
   - İlk açılışta birkaç dakika sürebilir

2. **Lisans sözleşmesini kabul edin**
   - "I accept the terms" seçeneğini işaretleyin
   - "Accept" butonuna tıklayın

3. **Hesap oluşturma (opsiyonel)**
   - "Skip" diyebilirsiniz (zorunlu değil)
   - Daha sonra da hesap oluşturabilirsiniz

## Adım 4: Kurulumu Doğrulama

Kurulumun başarılı olduğunu kontrol etmek için PowerShell'de şu komutu çalıştırın:

```powershell
docker --version
```

Eğer Docker versiyonu görünüyorsa, kurulum başarılı! ✅

## Adım 5: Projeyi Başlatma

Docker kurulduktan sonra projenizi başlatın:

```powershell
# Proje klasörüne gidin
cd C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder

# Hızlı başlatma scriptini çalıştırın
.\scripts\quick_start.ps1
```

## ⚠️ Yaygın Sorunlar

### Sorun 1: "WSL 2 installation is incomplete"
**Çözüm:**
1. Microsoft Store'dan "WSL 2" araması yapın
2. "Windows Subsystem for Linux" kurun
3. Bilgisayarı yeniden başlatın
4. Docker Desktop'ı tekrar açın

### Sorun 2: "Docker daemon is not running"
**Çözüm:**
1. Docker Desktop'ın çalıştığından emin olun
2. Sistem tepsisinde Docker ikonunu kontrol edin
3. Docker Desktop'ı yeniden başlatın

### Sorun 3: "Virtualization is not enabled"
**Çözüm:**
1. Bilgisayarınızı yeniden başlatın
2. BIOS/UEFI ayarlarına girin (genellikle F2, F10, Del tuşu)
3. "Virtualization" veya "VT-x" seçeneğini etkinleştirin
4. Değişiklikleri kaydedin ve çıkın

### Sorun 4: Kurulum çok yavaş
**Çözüm:**
- İnternet bağlantınızı kontrol edin
- Antivirus yazılımınızı geçici olarak kapatın
- Windows Defender'ı kontrol edin

## 📊 Sistem Gereksinimleri

- **Windows 10 64-bit:** Pro, Enterprise veya Education (Build 19041 veya üzeri)
- **Windows 11 64-bit:** Home veya Pro
- **WSL 2:** Windows Subsystem for Linux 2
- **RAM:** En az 4GB (8GB önerilir)
- **Disk:** En az 20GB boş alan

## ✅ Kurulum Kontrol Listesi

- [ ] Docker Desktop indirildi
- [ ] Kurulum tamamlandı
- [ ] Bilgisayar yeniden başlatıldı
- [ ] Docker Desktop açıldı ve çalışıyor
- [ ] `docker --version` komutu çalışıyor
- [ ] Proje başlatıldı (`.\scripts\quick_start.ps1`)

## 🚀 Sonraki Adımlar

Docker kurulduktan sonra:

1. **Projeyi başlatın:**
   ```powershell
   .\scripts\quick_start.ps1
   ```

2. **Servisleri kontrol edin:**
   ```powershell
   docker-compose ps
   ```

3. **Uygulamaya erişin:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8000
   - API Docs: http://localhost:8000/api/docs

## 💡 İpuçları

- Docker Desktop'ı her zaman çalışır durumda bırakın
- Sistem başlangıcında otomatik başlatmak için: Settings > General > "Start Docker Desktop when you log in"
- Kaynak kullanımını azaltmak için: Settings > Resources > CPU ve Memory ayarlarını düzenleyin

## 🆘 Yardım

Sorun yaşıyorsanız:
1. Docker Desktop loglarını kontrol edin: Help > Troubleshoot
2. Docker Desktop'ı yeniden başlatın
3. Bilgisayarı yeniden başlatın
4. Docker Desktop'ı kaldırıp yeniden kurun

