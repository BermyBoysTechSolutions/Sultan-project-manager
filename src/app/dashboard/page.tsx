import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, CheckCircle, Clock, Code, Key, Users } from 'lucide-react';
import RealTimeStatus from './RealTimeStatus';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <Card title="System Status">
          <RealTimeStatus />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Quick Actions">
            <div className="space-y-3">
              <a href="/tasks" className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <Calendar className="w-5 h-5 text-yellow-600 mr-3" />
                <span className="font-medium">View All Tasks</span>
              </a>
              <a href="/keys" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Key className="w-5 h-5 text-blue-600 mr-3" />
                <span className="font-medium">API Keys</span>
              </a>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="font-medium">System Online</span>
              </div>
            </div>
          </Card>

          <Card title="Recent Activity">
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-500 mr-2" />
                <span>API optimization in progress</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-500 mr-2" />
                <span>2 sub-agents active</span>
              </div>
              <div className="flex items-center">
                <Code className="w-4 h-4 text-gray-500 mr-2" />
                <span>Project management app building</span>
              </div>
            </div>
          </Card>

          <Card title="Performance">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Response Time</span>
                <span className="font-medium">Fast</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Token Usage</span>
                <span className="font-medium text-green-600">Optimized</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Model</span>
                <span className="font-medium">Kimi K2.5</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
