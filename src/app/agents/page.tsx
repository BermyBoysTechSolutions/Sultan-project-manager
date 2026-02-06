'use client';

import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Play, Pause, Settings, Plus, Activity, CheckCircle, AlertCircle, Clock, Zap, Bot, User, Server } from 'lucide-react';
import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  type: 'telegram' | 'discord' | 'slack' | 'api';
  status: 'running' | 'paused' | 'error' | 'deploying';
  client?: string;
  lastActive: string;
  tasksCompleted: number;
  template?: string;
  description: string;
}

const agentTemplates = [
  {
    id: 'va-basic',
    name: 'Basic VA',
    description: 'General purpose virtual assistant',
    icon: Bot,
    features: ['Task management', 'Email handling', 'Calendar scheduling']
  },
  {
    id: 'social-media',
    name: 'Social Media Manager',
    description: 'Manages social media accounts and engagement',
    icon: Activity,
    features: ['Content scheduling', 'Engagement tracking', 'Analytics']
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    description: 'Handles customer inquiries and support tickets',
    icon: User,
    features: ['Ticket management', 'FAQ responses', 'Escalation handling']
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    description: 'Manages API connections and data sync',
    icon: Server,
    features: ['Webhook handling', 'Data synchronization', 'Error monitoring']
  }
];

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Telegram VA - Bermy Banana',
      type: 'telegram',
      status: 'running',
      client: 'Bermy Banana',
      lastActive: '2 minutes ago',
      tasksCompleted: 142,
      template: 'va-basic',
      description: 'Manages Telegram communications and task coordination'
    },
    {
      id: '2',
      name: 'Discord Bot - Community Manager',
      type: 'discord',
      status: 'running',
      client: 'Bermy Boys LLC',
      lastActive: '5 minutes ago',
      tasksCompleted: 89,
      template: 'social-media',
      description: 'Community engagement and social media management'
    },
    {
      id: '3',
      name: 'Slack Assistant - Project Coord',
      type: 'slack',
      status: 'paused',
      client: 'Internal',
      lastActive: '1 hour ago',
      tasksCompleted: 234,
      template: 'va-basic',
      description: 'Project coordination and team communication'
    },
    {
      id: '4',
      name: 'WhatsApp Business Bot',
      type: 'api',
      status: 'running',
      client: 'TechFlow Solutions',
      lastActive: '10 minutes ago',
      tasksCompleted: 67,
      template: 'customer-support',
      description: 'Customer support and order processing'
    }
  ]);

  const [showNewAgentForm, setShowNewAgentForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'running':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'paused':
        return <Pause className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'deploying':
        return <Clock className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'running':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'deploying':
        return 'bg-blue-100 text-blue-800';
    }
  };

  const toggleAgentStatus = (id: string) => {
    setAgents(agents.map(agent => {
      if (agent.id === id) {
        const newStatus = agent.status === 'running' ? 'paused' : 'running';
        return { ...agent, status: newStatus };
      }
      return agent;
    }));
  };

  const deployNewAgent = () => {
    if (!selectedTemplate) return;
    
    const template = agentTemplates.find(t => t.id === selectedTemplate);
    if (!template) return;

    const newAgent: Agent = {
      id: Date.now().toString(),
      name: `${template.name} - New Agent`,
      type: 'api',
      status: 'deploying',
      lastActive: 'Just now',
      tasksCompleted: 0,
      template: selectedTemplate,
      description: template.description
    };

    setAgents([...agents, newAgent]);
    setShowNewAgentForm(false);
    setSelectedTemplate('');

    // Simulate deployment
    setTimeout(() => {
      setAgents(prev => prev.map(agent => 
        agent.id === newAgent.id ? { ...agent, status: 'running' } : agent
      ));
    }, 3000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Agents</h1>
            <p className="text-gray-600 mt-1">Manage your AI virtual assistants and their deployments</p>
          </div>
          <Button onClick={() => setShowNewAgentForm(true)} className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Deploy New Agent
          </Button>
        </div>

        {/* Agent Templates */}
        <Card title="Agent Templates">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {agentTemplates.map(template => {
              const Icon = template.icon;
              return (
                <div key={template.id} className="p-4 border border-gray-200 rounded-lg hover:border-yellow-500 transition-colors cursor-pointer"
                     onClick={() => setSelectedTemplate(template.id)}>
                  <Icon className="w-8 h-8 text-yellow-500 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {template.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Active Agents */}
        <Card title="Active Agents">
          <div className="space-y-4">
            {agents.map(agent => (
              <div key={agent.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                        {agent.status}
                      </span>
                      {getStatusIcon(agent.status)}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{agent.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      {agent.client && (
                        <span>Client: <span className="font-medium">{agent.client}</span></span>
                      )}
                      <span>Last active: {agent.lastActive}</span>
                      <span>Tasks: {agent.tasksCompleted}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={agent.status === 'running' ? 'secondary' : 'primary'}
                      size="sm"
                      onClick={() => toggleAgentStatus(agent.id)}
                      className="flex items-center gap-2"
                    >
                      {agent.status === 'running' ? (
                        <><Pause className="w-4 h-4" /> Pause</>
                      ) : (
                        <><Play className="w-4 h-4" /> Start</>
                      )}
                    </Button>
                    <Button variant="secondary" size="sm" className="p-2">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Deployment Modal */}
        {showNewAgentForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Deploy New Agent</h2>
              <p className="text-gray-600 mb-4">Select a template to create your new AI agent</p>
              
              <div className="space-y-2 mb-6">
                {agentTemplates.map(template => {
                  const Icon = template.icon;
                  return (
                    <label key={template.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="template"
                        value={template.id}
                        checked={selectedTemplate === template.id}
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="mr-3"
                      />
                      <Icon className="w-5 h-5 text-yellow-500 mr-3" />
                      <div>
                        <div className="font-medium">{template.name}</div>
                        <div className="text-sm text-gray-500">{template.description}</div>
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={deployNewAgent}
                  disabled={!selectedTemplate}
                  className="flex-1"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Deploy Agent
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowNewAgentForm(false);
                    setSelectedTemplate('');
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}