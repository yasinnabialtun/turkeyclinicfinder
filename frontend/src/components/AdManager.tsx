'use client';

import { useState, useEffect } from 'react';

interface AdConfig {
  id: string;
  position: string;
  size: string;
  enabled: boolean;
  adCode?: string;
  adType: 'banner' | 'google-adsense' | 'custom';
  clickUrl?: string;
  imageUrl?: string;
}

export default function AdManager() {
  const [ads, setAds] = useState<AdConfig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load ad configurations from API
    loadAds();
  }, []);

  const loadAds = async () => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/admin/ads');
      if (response.ok) {
        const data = await response.json();
        setAds(data);
      }
    } catch (error) {
      console.error('Error loading ads:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading ads...</div>;

  return (
    <div className="ad-manager">
      {ads.map((ad) => (
        <div key={ad.id} data-ad-config={JSON.stringify(ad)} />
      ))}
    </div>
  );
}

