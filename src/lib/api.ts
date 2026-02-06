// API endpoints for the PM app
const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export interface Task {
  id: string;
  name: string;
  description: string;
  status: 'running' | 'completed' | 'pending' | 'failed';
  agent: string;
  startTime: string;
  duration?: string;
  progress?: number;
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
  visible: boolean;
}

// Mock data - replace with real API calls
export const getTasks = async (): Promise<Task[]> => {
  // In production, this would fetch from your OpenClaw instance
  return [
    {
      id: '1',
      name: 'API Optimization',
      description: 'Optimizing API costs and performance',
      status: 'running',
      agent: 'main',
      startTime: new Date().toLocaleString(),
      progress: 75
    },
    {
      id: '2',
      name: 'Migration Documentation',
      description: 'Documenting OpenClaw migration process',
      status: 'completed',
      agent: 'subagent',
      startTime: new Date(Date.now() - 30 * 60 * 1000).toLocaleString(),
      duration: '15 min',
      progress: 100
    }
  ];
};

export const getAPIKeys = async (): Promise<APIKey[]> => {
  // In production, fetch from secure storage
  return [
    {
      id: '1',
      name: 'Telegram Bot',
      key: '[TELEGRAM_BOT_TOKEN]',
      visible: false
    },
    {
      id: '2',
      name: 'Notion API',
      key: '[NOTION_API_KEY]',
      visible: false
    }
  ];
};

export const updateTaskStatus = async (taskId: string, status: Task['status']): Promise<void> => {
  // Implement API call to update task status
  console.log(`Updating task ${taskId} to ${status}`);
};

export const addAPIKey = async (key: Omit<APIKey, 'id'>): Promise<void> => {
  // Implement secure API key storage
  console.log('Adding new API key:', key.name);
};
