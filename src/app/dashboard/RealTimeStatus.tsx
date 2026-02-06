'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Clock, User } from 'lucide-react';

interface StatusData {
  gateway: string;
  activeAgents: number;
  totalTasks: number;
  currentModel: string;
  apiCost: string;
}

export default function RealTimeStatus() {
  const [status, setStatus] = useState<StatusData>({
    gateway: 'Online',
    activeAgents: 2,
    totalTasks: 3,
    currentModel: 'Kimi K2.5',
    apiCost: '$0.00'
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // In production, fetch from your OpenClaw API
      setStatus(prev => ({
        ...prev,
        apiCost: (parseFloat(prev.apiCost.replace('$', '')) + Math.random() * 0.01).toFixed(2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-center p-4 bg-white rounded-lg shadow">
        <div className="text-2xl font-bold text-green-600">{status.gateway}</div>
        <div className="text-sm text-gray-500">Gateway Status</div>
      </div>
      <div className="text-center p-4 bg-white rounded-lg shadow">
        <div className="text-2xl font-bold text-blue-600">{status.activeAgents}</div>
        <div className="text-sm text-gray-500">Active Agents</div>
      </div>
      <div className="text-center p-4 bg-white rounded-lg shadow">
        <div className="text-2xl font-bold text-purple-600">{status.totalTasks}</div>
        <div className="text-sm text-gray-500">Total Tasks</div>
      </div>
      <div className="text-center p-4 bg-white rounded-lg shadow">
        <div className="text-2xl font-bold text-yellow-600">{status.apiCost}</div>
        <div className="text-sm text-gray-500">API Cost Today</div>
      </div>
    </div>
  );
}
