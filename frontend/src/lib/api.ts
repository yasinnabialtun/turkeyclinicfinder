/**
 * API client for backend communication
 */
import axios, { AxiosInstance, AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${API_URL}/api`,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor - no authentication required
    this.client.interceptors.request.use((config) => {
      // Optional: Add token if available, but don't require it
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        // Simple error handling without authentication redirects
        return Promise.reject(error);
      }
    );
  }

  // Authentication methods removed - no login required

  async getClinics(params?: {
    query?: string;
    city?: string;
    treatment?: string;
    minPrice?: number;
    maxPrice?: number;
    lang?: string;
    page?: number;
    page_size?: number;
  }) {
    const response = await this.client.get('/clinics', { params });
    return response.data;
  }

  async getClinic(id: number) {
    const response = await this.client.get(`/clinics/${id}`);
    return response.data;
  }

  async matchClinics(data: {
    treatment: string;
    budget_usd?: number;
    city_preference?: string;
    dates?: string;
    accommodation_needed?: boolean;
    priority?: string;
  }) {
    const response = await this.client.post('/search/match', data);
    return response.data;
  }

  async searchSuggest(q: string, lang: string = 'en') {
    const response = await this.client.get('/search/suggest', {
      params: { q, lang },
    });
    return response.data;
  }

  async getClinicReviews(clinicId: number, page: number = 1, pageSize: number = 20) {
    const response = await this.client.get(`/reviews/clinics/${clinicId}/reviews`, {
      params: { page, page_size: pageSize },
    });
    return response.data;
  }

  async createReview(clinicId: number, data: any) {
    const response = await this.client.post(`/reviews/clinics/${clinicId}/reviews`, data);
    return response.data;
  }

  async getReviewSummary(clinicId: number) {
    const response = await this.client.get(`/reviews/summary/${clinicId}`);
    return response.data;
  }

  async createLead(data: {
    clinic_id?: number | null;
    name: string;
    email: string;
    phone?: string;
    country: string;
    treatment?: string;
    message?: string;
    preferred_date?: string;
    budget?: string;
    source?: string;
    accommodation_needed?: boolean;
    travel_assistance_needed?: boolean;
    urgency?: string;
    medical_history?: string;
    number_of_people?: string;
    preferred_language?: string;
  }): Promise<{ success: boolean; data?: any; message?: string }> {
    try {
      const response = await this.client.post('/v1/leads/', data);
      return { success: true, data: response.data.data || response.data };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.detail || 'Failed to submit consultation request',
      };
    }
  }

  async generateArticle(data: {
    topic: string;
    language?: string;
    keywords?: string[];
    target_length?: number;
  }) {
    const response = await this.client.post('/ai/generate-article', data);
    return response.data;
  }

  async analyzeSentiment(data: { text: string; language?: string }) {
    const response = await this.client.post('/ai/sentiment', data);
    return response.data;
  }
}

export const apiClient = new APIClient();
