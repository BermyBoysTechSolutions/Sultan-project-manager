import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, CheckCircle, Clock, Code, Key, Users, TrendingUp, DollarSign, Activity, Zap, Bot, Target } from 'lucide-react';
import RealTimeStatus from './RealTimeStatus';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Revenue Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card title="Monthly Revenue" className="!p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">$3,247</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% from last month
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-500" />
            </div>
          </Card>
          
          <Card title="Active Clients" className="!p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-sm text-gray-600 mt-1">2 onboarding</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </Card>
          
          <Card title="AI Agents" className="!p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600 mt-1">3 deploying</p>
              </div>
              <Bot className="w-8 h-8 text-purple-500" />
            </div>
          </Card>
          
          <Card title="Tasks Completed" className="!p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-gray-600 mt-1">This month</p>
              </div>
              <Target className="w-8 h-8 text-green-500" />
            </div>
          </Card>
        </div>

        <Card title="System Status">
          <RealTimeStatus />
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card title="Quick Actions">
            <div className="space-y-3">
              <a href="/tasks" className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <Calendar className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="font-medium">View All Tasks</span>
              </a>
              <a href="/agents" className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <Bot className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                <span className="font-medium">Manage AI Agents</span>
              </a>
              <a href="/clients" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Users className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-medium">Client Management</span>
              </a>
              <a href="/keys" className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Key className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="font-medium">API Keys</span>
              </a>
            </div>
          </Card>

          <Card title="Recent Activity">
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Deployed new Telegram VA for client</span>
              </div>
              <div className="flex items-start">
                <Activity className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>API optimization completed - 23% faster</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3 new client onboardings initiated</span>
              </div>
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Automated reporting system deployed</span>
              </div>
            </div>
          </Card>

          <Card title="Performance Metrics">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Response Time</span>
                <span className="font-medium text-green-600">Fast</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Token Usage</span>
                <span className="font-medium text-green-600">Optimized</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Model</span>
                <span className="font-medium">Kimi K2.5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Uptime</span>
                <span className="font-medium text-green-600">99.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cost Efficiency</span>
                <span className="font-medium text-green-600">Excellent</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Client Onboarding Workflow */}
        <Card title="Client Onboarding Pipeline">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Initial Contact</h3>
              <p className="text-sm text-gray-600 mb-3">3 prospects</p>
              <div className="space-y-2">
                <div className="text-xs text-gray-500">• Discovery call scheduled</div>
                <div className="text-xs text-gray-500">• Needs assessment</div>
                <div className="text-xs text-gray-500">• Proposal preparation</div>
              </div>
            </div>
            <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">In Negotiation</h3>
              <p className="text-sm text-gray-600 mb-3">2 clients</p>
              <div className="space-y-2">
                <div className="text-xs text-gray-500">• Contract review</div>
                <div className="text-xs text-gray-500">• Pricing discussion</div>
                <div className="text-xs text-gray-500">• Scope finalization</div>
              </div>
            </div>
            <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Ready to Launch</h3>
              <p className="text-sm text-gray-600 mb-3">1 client</p>
              <div className="space-y-2">
                <div className="text-xs text-gray-500">• VA configuration</div>
                <div className="text-xs text-gray-500">• Access provisioning</div>
                <div className="text-xs text-gray-500">• Training scheduled</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
