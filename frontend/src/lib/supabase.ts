/**
 * Supabase client configuration
 * Ücretsiz PostgreSQL database
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL veya Anon Key bulunamadı. .env.local dosyasını kontrol edin.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Helper functions
export const getClinics = async (filters?: {
  city?: string;
  treatment?: string;
  limit?: number;
}) => {
  let query = supabase.from('clinics').select('*');

  if (filters?.city) {
    query = query.eq('city', filters.city);
  }

  if (filters?.treatment) {
    query = query.contains('treatments', [filters.treatment]);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching clinics:', error);
    return { success: false, data: [], error };
  }

  return {
    success: true,
    data: {
      items: data || [],
      total: data?.length || 0,
    },
  };
};

export const getClinic = async (id: number) => {
  const { data, error } = await supabase
    .from('clinics')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching clinic:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data };
};

export const createLead = async (leadData: {
  clinic_id?: number;
  name: string;
  email: string;
  phone?: string;
  country: string;
  treatment?: string;
  message?: string;
}) => {
  const { data, error } = await supabase
    .from('leads')
    .insert(leadData)
    .select()
    .single();

  if (error) {
    console.error('Error creating lead:', error);
    return { success: false, error };
  }

  return { success: true, data };
};

export const getReviews = async (clinicId: number) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('clinic_id', clinicId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reviews:', error);
    return { success: false, data: [], error };
  }

  return { success: true, data: data || [] };
};

export const createReview = async (reviewData: {
  clinic_id: number;
  rating: number;
  content: string;
}) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert(reviewData)
    .select()
    .single();

  if (error) {
    console.error('Error creating review:', error);
    return { success: false, error };
  }

  return { success: true, data };
};

