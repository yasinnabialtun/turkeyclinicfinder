'use client';

import { useState } from 'react';
import { apiClient } from '../lib/api';
import { createLead } from '../lib/supabase';

interface ConsultationFormProps {
  clinicId?: number;
  treatment?: string;
  className?: string;
}

export default function ConsultationForm({ clinicId, treatment, className = '' }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    treatment: treatment || '',
    clinicId: clinicId || null,
    message: '',
    preferredDate: '',
    budget: '',
    accommodationNeeded: false,
    travelAssistanceNeeded: false,
    urgency: 'normal',
    medicalHistory: '',
    numberOfPeople: '1',
    preferredLanguage: 'en',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Supabase'e direkt kaydet
      const response = await createLead({
        clinic_id: formData.clinicId || undefined,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        country: formData.country,
        treatment: formData.treatment || undefined,
        message: formData.message || undefined,
      });

      if (response.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          treatment: treatment || '',
          clinicId: clinicId || null,
          message: '',
          preferredDate: '',
          budget: '',
          accommodationNeeded: false,
          travelAssistanceNeeded: false,
          urgency: 'normal',
          medicalHistory: '',
          numberOfPeople: '1',
          preferredLanguage: 'en',
        });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(response.message || 'Failed to submit. Please try again.');
      }
    } catch (err: any) {
      setError(err.response?.data?.detail || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-green-50 border-l-4 border-green-500 rounded-lg p-6 ${className}`}>
        <div className="flex items-center">
          <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-1">Thank You!</h3>
            <p className="text-green-700 text-sm">
              Your consultation request has been submitted successfully. We'll contact you within 24 hours with a free quote and consultation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 ${className}`}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Free Consultation & Quote</h2>
        <p className="text-gray-600">
          Fill out the form below and receive a free consultation and personalized quote within 24 hours.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="+1 234 567 8900"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="United States"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
              Treatment <span className="text-red-500">*</span>
            </label>
            <select
              id="treatment"
              required
              value={formData.treatment}
              onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="">Select Treatment</option>
              <option value="Hair Transplant">Hair Transplant</option>
              <option value="Dental Care">Dental Care</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Plastic Surgery">Plastic Surgery</option>
              <option value="Rhinoplasty">Rhinoplasty</option>
              <option value="IVF Treatment">IVF Treatment</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Bariatric Surgery">Bariatric Surgery</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="">Select Budget</option>
              <option value="Under $2,000">Under $2,000</option>
              <option value="$2,000 - $5,000">$2,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $20,000">$10,000 - $20,000</option>
              <option value="Over $20,000">Over $20,000</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Treatment Date
          </label>
          <input
            type="date"
            id="preferredDate"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
              Urgency Level
            </label>
            <select
              id="urgency"
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="normal">Normal (1-3 months)</option>
              <option value="urgent">Urgent (Within 1 month)</option>
              <option value="very-urgent">Very Urgent (Within 2 weeks)</option>
            </select>
          </div>
          <div>
            <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
              Number of People Traveling
            </label>
            <select
              id="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="1">Just Me</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4+">4+ People</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Language
            </label>
            <select
              id="preferredLanguage"
              value={formData.preferredLanguage}
              onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="en">English</option>
              <option value="tr">Turkish</option>
              <option value="ar">Arabic</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div>
            <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
              Medical History / Previous Treatments
            </label>
            <textarea
              id="medicalHistory"
              rows={3}
              value={formData.medicalHistory}
              onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Any previous treatments, medical conditions, or allergies..."
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="accommodationNeeded"
              checked={formData.accommodationNeeded}
              onChange={(e) => setFormData({ ...formData, accommodationNeeded: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="accommodationNeeded" className="ml-2 block text-sm text-gray-700">
              I need accommodation assistance (hotel booking, airport transfer)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="travelAssistanceNeeded"
              checked={formData.travelAssistanceNeeded}
              onChange={(e) => setFormData({ ...formData, travelAssistanceNeeded: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="travelAssistanceNeeded" className="ml-2 block text-sm text-gray-700">
              I need travel assistance (visa support, flight booking)
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information / Questions
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Tell us about your treatment needs, questions, or any specific requirements..."
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">📧 What Happens Next?</h3>
          <p className="text-sm text-gray-700 mb-3">
            Our medical tourism experts will review your request and contact you <strong>within 24 hours</strong> via email with:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Free Consultation:</strong> Personalized treatment recommendations from verified clinics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Detailed Quote:</strong> Transparent pricing with no hidden fees</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Treatment Plan:</strong> Step-by-step timeline and procedure details</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Travel Support:</strong> Assistance with visa, flights, and accommodation if needed</span>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4 italic">
            All quotes are free and without obligation. We respect your privacy and will never share your information.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Get Free Consultation & Quote'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our Privacy Policy and Terms of Service. 
          We respect your privacy and will never share your information with third parties.
        </p>
      </form>
    </div>
  );
}

