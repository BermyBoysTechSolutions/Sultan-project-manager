'use client';

import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CheckCircle, Clock, Play, Plus, Square, User } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: string;
  name: string;
  description: string;
  status: 'running' | 'completed' | 'pending' | 'failed';
  agent: string;
  startTime: string;
  duration?: string;
  progress?: number;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      name: 'API Optimization',
      description: 'Optimizing API costs and performance',
      status: 'running',
      agent: 'main',
      startTime: '2026-02-06 01:00',
      progress: 75
    },
    {
      id: '2',
      name: 'Migration Documentation',
      description: 'Documenting OpenClaw migration process',
      status: 'completed',
      agent: 'subagent',
      startTime: '2026-02-06 00:30',
      duration: '15 min',
      progress: 100
    },
    {
      id: '3',
      name: 'Project Management App',
      description: 'Building Next.js PM app for Sultan',
      status: 'running',
      agent: 'main',
      startTime: '2026-02-06 00:45',
      progress: 60
    }
  ]);

  const [newTask, setNewTask] = useState({ name: '', description: '', agent: 'main' });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-yellow-600 bg-yellow-50';
      case 'completed': return 'text-green-600 bg-green-50';
      case 'failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <Play className="w-4 h-4" />;
    }
  };

  const addTask = () => {
    if (newTask.name && newTask.description) {
      const task: Task = {
        id: Date.now().toString(),
        ...newTask,
        status: 'pending',
        startTime: new Date().toLocaleString(),
        progress: 0
      };
      setTasks([...tasks, task]);
      setNewTask({ name: '', description: '', agent: 'main' });
    }
  };

  const updateTaskStatus = (id: string, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status, progress: status === 'completed' ? 100 : task.progress } : task
    ));
  };

  return (
    <Layout>
      <div className="space-y-6">
        <Card title="Active Tasks">
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{task.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(task.status)}`}>
                    {getStatusIcon(task.status)}
                    {task.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {task.agent}
                    </span>
                    <span>Started: {task.startTime}</span>
                    {task.duration && <span>Duration: {task.duration}</span>}
                  </div>
                </div>

                {task.progress !== undefined && (
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  {task.status === 'pending' && (
                    <Button 
                      size="sm" 
                      onClick={() => updateTaskStatus(task.id, 'running')}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Start
                    </Button>
                  )}
                  {task.status === 'running' && (
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => updateTaskStatus(task.id, 'completed')}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Complete
                    </Button>
                  )}
                  <Button size="sm" variant="danger">
                    <Square className="w-4 h-4 mr-1" />
                    Stop
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Add New Task">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
              <input
                type="text"
                value={newTask.name}
                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter task name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows={3}
                placeholder="Enter task description"
              />
            </div>
            <Button onClick={addTask} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}