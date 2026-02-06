'use client';

import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Building2, DollarSign, Mail, Phone, Plus, Star, UserPlus } from 'lucide-react';
import { useState } from 'react';

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  plan: 'starter' | 'growth' | 'enterprise';
  monthlyRevenue: number;
  activeAgents: number;
  status: 'active' | 'onboarding' | 'paused';
  joinDate: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Sarah Mitchell',
      company: 'TechFlow Solutions',
      email: 'sarah@techflow.io',
      phone: '(555) 123-4567',
      plan: 'enterprise',
      monthlyRevenue: 2500,
      activeAgents: 4,
      status: 'active',
      joinDate: '2026-01-15',
    },
    {
      id: '2',
      name: 'Marcus Chen',
      company: 'GreenLeaf Marketing',
      email: 'marcus@greenleaf.co',
      phone: '(555) 987-6543',
      plan: 'growth',
      monthlyRevenue: 1200,
      activeAgents: 2,
      status: 'active',
      joinDate: '2026-01-22',
    },
    {
      id: '3',
      name: 'Priya Patel',
      company: 'Patel & Associates',
      email: 'priya@patellaw.com',
      phone: '(555) 456-7890',
      plan: 'starter',
      monthlyRevenue: 500,
      activeAgents: 1,
      status: 'onboarding',
      joinDate: '2026-02-03',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', company: '', email: '', phone: '', plan: 'starter' as Client['plan'] });

  const planColors: Record<string, string> = {
    starter: 'bg-gray-100 text-gray-700',
    growth: 'bg-blue-100 text-blue-700',
    enterprise: 'bg-yellow-100 text-yellow-700',
  };

  const statusColors: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    onboarding: 'bg-purple-100 text-purple-700',
    paused: 'bg-red-100 text-red-700',
  };

  const totalRevenue = clients.reduce((sum, c) => sum + c.monthlyRevenue, 0);
  const totalAgents = clients.reduce((sum, c) => sum + c.activeAgents, 0);

  const addClient = () => {
    if (newClient.name && newClient.company && newClient.email) {
      setClients([...clients, {
        id: Date.now().toString(),
        ...newClient,
        monthlyRevenue: newClient.plan === 'enterprise' ? 2500 : newClient.plan === 'growth' ? 1200 : 500,
        activeAgents: 0,
        status: 'onboarding',
        joinDate: new Date().toISOString().split('T')[0],
      }]);
      setNewClient({ name: '', company: '', email: '', phone: '', plan: 'starter' });
      setShowForm(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Revenue Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Revenue</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-200" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Clients</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">{clients.length}</p>
              </div>
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Deployed Agents</p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600">{totalAgents}</p>
              </div>
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-200" />
            </div>
          </div>
        </div>

        {/* Client List */}
        <Card title="Client Roster">
          <div className="flex justify-end mb-4">
            <Button onClick={() => setShowForm(!showForm)} size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </div>

          <div className="space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{client.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Building2 className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{client.company}</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${planColors[client.plan]}`}>
                      {client.plan}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[client.status]}`}>
                      {client.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1 min-w-0">
                    <Mail className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{client.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3 flex-shrink-0" />
                    <span>{client.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-sm">
                  <span className="text-green-600 font-medium">${client.monthlyRevenue}/mo</span>
                  <span className="text-gray-500">{client.activeAgents} agent{client.activeAgents !== 1 ? 's' : ''} deployed</span>
                  <span className="text-gray-400">Since {client.joinDate}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Add Client Form */}
        {showForm && (
          <Card title="New Client">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                  <input
                    type="text"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={newClient.company}
                    onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="client@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan</label>
                <select
                  value={newClient.plan}
                  onChange={(e) => setNewClient({ ...newClient, plan: e.target.value as Client['plan'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="starter">Starter - $500/mo</option>
                  <option value="growth">Growth - $1,200/mo</option>
                  <option value="enterprise">Enterprise - $2,500/mo</option>
                </select>
              </div>
              <div className="flex gap-3">
                <Button onClick={addClient} className="flex-1">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Client
                </Button>
                <Button variant="secondary" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
}
