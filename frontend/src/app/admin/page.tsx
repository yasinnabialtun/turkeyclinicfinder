'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => {
    if (pathname?.includes('/adsense')) return 'adsense';
    if (pathname?.includes('/ads')) return 'ads';
    return 'dashboard';
  });

  const stats = {
    totalClinics: 0,
    totalUsers: 0,
    totalBookings: 0,
    totalRevenue: 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <nav className="flex space-x-8 px-6" aria-label="Sekmeler">
              {[
                { id: 'dashboard', name: 'Dashboard', icon: '📊' },
                { id: 'leads', name: 'Müşteri Talepleri', icon: '📧' },
                { id: 'clinics', name: 'Klinikler', icon: '🏥' },
                { id: 'ads', name: 'Reklam Yönetimi', icon: '📢' },
                { id: 'adsense', name: 'AdSense', icon: '💰' },
                { id: 'content', name: 'İçerik', icon: '📝' },
                { id: 'users', name: 'Kullanıcılar', icon: '👥' },
                { id: 'settings', name: 'Ayarlar', icon: '⚙️' },
              ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  router.push(`/admin/${tab.id === 'dashboard' ? '' : tab.id}`);
                }}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Toplam Klinik</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalClinics}</p>
                  </div>
                  <div className="text-4xl">🏥</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Toplam Kullanıcı</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
                  </div>
                  <div className="text-4xl">👥</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Toplam Başvuru</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalBookings}</p>
                  </div>
                  <div className="text-4xl">📅</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Toplam Gelir</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">${stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Hızlı İşlemler</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/admin/clinics/new"
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition text-center"
                >
                  <div className="text-3xl mb-2">➕</div>
                  <p className="font-semibold text-gray-900">Yeni Klinik Ekle</p>
                </Link>
                <Link
                  href="/admin/ads"
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition text-center"
                >
                  <div className="text-3xl mb-2">📢</div>
                  <p className="font-semibold text-gray-900">Reklamları Yönet</p>
                </Link>
                <Link
                  href="/admin/content/blog/new"
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition text-center"
                >
                  <div className="text-3xl mb-2">📝</div>
                  <p className="font-semibold text-gray-900">Yeni Blog Yazısı</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Müşteri Talepleri Yönetimi</h2>
            <p className="text-gray-600 mb-4">
              Hastalardan gelen danışmanlık taleplerini görüntüleyin ve yönetin. Talepler otomatik olarak danışmanlık formlarından toplanır.
            </p>
            <Link href="/admin/leads" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 inline-block">
              Tüm Talepleri Görüntüle
            </Link>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Nasıl Çalışır:</strong> Hastalar web sitenizdeki danışmanlık formlarını doldurduğunda, 
                talepler otomatik olarak veritabanına kaydedilir ve <strong>info@ynadijital.com</strong> adresine e-posta bildirimleri gönderilir.
              </p>
            </div>
          </div>
        )}

        {/* Clinics Tab */}
        {activeTab === 'clinics' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Klinik Yönetimi</h2>
            <p className="text-gray-600 mb-4">
              Klinikleri ekleyin, düzenleyin veya kaldırın. Klinik bilgilerini güncelleyin.
            </p>
            <Link href="/admin/clinics" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 inline-block">
              Klinikleri Yönet
            </Link>
          </div>
        )}

        {/* Ad Management Tab */}
        {activeTab === 'ads' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Reklam Yönetimi</h2>
              <Link
                href="/admin/ads/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                + Yeni Reklam Ekle
              </Link>
            </div>
            <AdManagementContent />
          </div>
        )}

        {/* AdSense Tab */}
        {activeTab === 'adsense' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Google AdSense</h2>
              <Link
                href="/admin/adsense"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                AdSense Yönet
              </Link>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AdSense Durumu</h3>
              <p className="text-gray-700 mb-4">
                <strong>Yayıncı ID:</strong> pub-3511256754647083
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Durum:</strong> <span className="text-green-600 font-semibold">Aktif</span>
              </p>
              <p className="text-gray-700 text-sm">
                AdSense reklam birimlerinizi yapılandırın ve reklam yerleşimlerini AdSense yönetim sayfasından yönetin.
              </p>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">İçerik Yönetimi</h2>
            <p className="text-gray-600 mb-4">
              Blog yazılarını, makaleleri ve statik sayfaları yönetin.
            </p>
            <Link href="/admin/content" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 inline-block">
              İçerikleri Yönet
            </Link>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Ayarlar</h2>
            <p className="text-gray-600 mb-4">
              Genel uygulama ayarlarını yapılandırın.
            </p>
            <Link href="/admin/settings" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 inline-block">
              Ayarları Yapılandır
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function AdManagementContent() {
  const [ads, setAds] = useState([
    { id: '1', position: 'top', size: 'large', enabled: true, type: 'banner' },
    { id: '2', position: 'sidebar', size: 'medium', enabled: true, type: 'google-adsense' },
    { id: '3', position: 'bottom', size: 'large', enabled: false, type: 'custom' },
  ]);

  return (
    <div className="space-y-4">
      {ads.map((ad) => (
        <div key={ad.id} className="border rounded-lg p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">
              {ad.position === 'top' ? 'Üst' : ad.position === 'sidebar' ? 'Kenar Çubuğu' : 'Alt'} - {ad.size === 'large' ? 'Büyük' : 'Orta'}
            </h3>
            <p className="text-sm text-gray-600">Tür: {ad.type === 'banner' ? 'Banner' : ad.type === 'google-adsense' ? 'Google AdSense' : 'Özel'}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm ${ad.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {ad.enabled ? 'Aktif' : 'Pasif'}
            </span>
            <button className="text-blue-600 hover:text-blue-700">Düzenle</button>
            <button className="text-red-600 hover:text-red-700">Sil</button>
          </div>
        </div>
      ))}
    </div>
  );
}
