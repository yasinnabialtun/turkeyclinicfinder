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

// Get all leads (admin için)
export const getLeads = async (filters?: {
  status?: string;
  limit?: number;
  offset?: number;
}) => {
  let query = supabase.from('leads').select('*', { count: 'exact' });

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  if (filters?.offset) {
    query = query.range(filters.offset, filters.offset + (filters.limit || 20) - 1);
  }

  query = query.order('created_at', { ascending: false });

  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching leads:', error);
    return { success: false, data: { items: [], total: 0 }, error };
  }

  return {
    success: true,
    data: {
      items: data || [],
      total: count || 0,
    },
  };
};

// Update lead status
export const updateLeadStatus = async (leadId: number, status: string) => {
  const { data, error } = await supabase
    .from('leads')
    .update({ status })
    .eq('id', leadId)
    .select()
    .single();

  if (error) {
    console.error('Error updating lead status:', error);
    return { success: false, error };
  }

  return { success: true, data };
};

