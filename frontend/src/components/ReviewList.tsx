'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '../lib/api';

interface ReviewListProps {
  clinicId: number;
}

export default function ReviewList({ clinicId }: ReviewListProps) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.getClinicReviews(clinicId);
        if (response.success) {
          setReviews(response.data || []);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [clinicId]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-gray-500">No reviews yet.</div>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-medium">{review.rating}</span>
            {review.author_name && (
              <span className="ml-4 text-sm text-gray-600">
                {review.author_name}
              </span>
            )}
          </div>
          {review.content_en && (
            <p className="text-gray-700">{review.content_en}</p>
          )}
        </div>
      ))}
    </div>
  );
}

