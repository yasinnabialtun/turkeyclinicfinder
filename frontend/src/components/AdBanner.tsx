'use client';

import { useState, useEffect } from 'react';

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar' | 'in-content';
  size?: 'large' | 'medium' | 'small';
  className?: string;
  adSlot?: string;
}

export default function AdBanner({ position, size = 'medium', className = '', adSlot }: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(false);
  const adSenseId = 'pub-3511256754647083';

  useEffect(() => {
    if (adSlot) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        setAdLoaded(true);
      } catch (e) {
        console.error('AdSense error:', e);
      }
    } else {
      // Placeholder mode
      const timer = setTimeout(() => setAdLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [adSlot]);

  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return position === 'sidebar' 
          ? 'w-full h-[600px]' 
          : 'w-full h-[250px] md:h-[300px]';
      case 'medium':
        return position === 'sidebar'
          ? 'w-full h-[300px]'
          : 'w-full h-[200px] md:h-[250px]';
      case 'small':
        return 'w-full h-[100px] md:h-[120px]';
      default:
        return 'w-full h-[200px]';
    }
  };

  const getAdFormat = () => {
    if (position === 'sidebar') {
      return size === 'large' ? 'vertical' : 'rectangle';
    }
    if (position === 'top' || position === 'bottom') {
      return 'horizontal';
    }
    return 'rectangle';
  };

  const adId = `ad-${position}-${size}`;

  // If adSlot is provided, render actual AdSense ad
  if (adSlot) {
    return (
      <div 
        id={adId}
        className={`ad-container ${getSizeClasses()} ${className}`}
        data-ad-position={position}
        data-ad-size={size}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adSenseId}
          data-ad-slot={adSlot}
          data-ad-format={getAdFormat()}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder mode
  return (
    <div 
      id={adId}
      className={`ad-container ${getSizeClasses()} ${className} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden`}
      data-ad-position={position}
      data-ad-size={size}
    >
      {adLoaded ? (
        <div className="text-center p-4">
          <p className="text-xs text-gray-500 mb-2">Advertisement</p>
          <div className="bg-white rounded p-4 shadow-sm">
            <p className="text-sm text-gray-600">
              {size === 'large' ? '728x90 / 970x250' : size === 'medium' ? '300x250 / 336x280' : '320x50'}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {position} - {size}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              AdSense Ready
            </p>
          </div>
        </div>
      ) : (
        <div className="text-gray-400 text-sm">Loading ad...</div>
      )}
    </div>
  );
}

