'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '../../../lib/api';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  treatment?: string;
  message?: string;
  budget?: string;
  preferred_date?: string;
  status: string;
  created_at: string;
  clinic_id?: number;
}

export default function LeadsManagementPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 20;

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, page]);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      // Note: This endpoint may require authentication on backend
      // For now, making request without auth token
      const response = await fetch(`/api/v1/leads?status=${statusFilter !== 'all' ? statusFilter : ''}&page=${page}&page_size=${pageSize}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setLeads(data.data.items || []);
          setTotal(data.data.total || 0);
        }
      } else {
        setError('Failed to load leads. Please check authentication.');
      }
    } catch (err) {
      setError('Error loading leads');
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: number, newStatus: string) => {
    try {
      // TODO: Implement PUT endpoint for updating lead status
      // For now, you can update via database directly
      alert(`Lead status update functionality needs to be implemented in backend`);
    } catch (err) {
      console.error('Error updating lead status:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'qualified':
        return 'bg-purple-100 text-purple-800';
      case 'converted':
        return 'bg-green-100 text-green-800';
      case 'lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Lead Management</h1>
        <p className="text-gray-600">View and manage consultation requests from patients</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Leads</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
        <div className="text-sm text-gray-600">
          Total: <strong>{total}</strong> leads
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
          <p className="text-red-700 text-sm">{error}</p>
          <p className="text-red-600 text-xs mt-2">
            Note: This page requires backend authentication. Make sure you're logged in as admin or clinic owner.
          </p>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading leads...</p>
        </div>
      ) : leads.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No leads found.</p>
          <p className="text-sm mt-2">Leads will appear here when patients submit consultation forms.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{lead.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <a href={`mailto:${lead.email}`} className="text-blue-600 hover:text-blue-700">
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {lead.phone ? (
                        <a href={`tel:${lead.phone}`} className="text-blue-600 hover:text-blue-700">
                          {lead.phone}
                        </a>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{lead.treatment || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{lead.country || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(lead.created_at)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => {
                          const message = lead.message ? `\n\nMessage: ${lead.message}` : '';
                          const budget = lead.budget ? `\nBudget: ${lead.budget}` : '';
                          const date = lead.preferred_date ? `\nPreferred Date: ${lead.preferred_date}` : '';
                          window.location.href = `mailto:${lead.email}?subject=Re: Consultation Request&body=Dear ${lead.name},%0D%0A%0D%0AThank you for your interest...${message}${budget}${date}`;
                        }}
                        className="text-blue-600 hover:text-blue-700 mr-3"
                      >
                        Email
                      </button>
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {total > pageSize && (
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total} leads
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page * pageSize >= total}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

