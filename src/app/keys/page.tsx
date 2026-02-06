'use client';

import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Copy, Eye, EyeOff, Key, Plus, Save, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function KeysPage() {
  const [keys, setKeys] = useState([
    { id: 1, name: 'Telegram Bot', key: '[TELEGRAM_BOT_TOKEN]', visible: false },
    { id: 2, name: 'Notion API', key: '[NOTION_API_KEY]', visible: false },
    { id: 3, name: 'Tailscale', key: '[TAILSCALE_TOKEN]', visible: false },
  ]);

  const [newKey, setNewKey] = useState({ name: '', key: '' });

  const toggleVisibility = (id: number) => {
    setKeys(keys.map(k => k.id === id ? { ...k, visible: !k.visible } : k));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const addKey = () => {
    if (newKey.name && newKey.key) {
      setKeys([...keys, { ...newKey, id: Date.now(), visible: false }]);
      setNewKey({ name: '', key: '' });
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <Card title="API Keys Management">
          <div className="space-y-4">
            {keys.map((apiKey) => (
              <div key={apiKey.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Key className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="font-medium">{apiKey.name}</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type={apiKey.visible ? 'text' : 'password'}
                      value={apiKey.key}
                      readOnly
                      className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-mono"
                    />
                    <button
                      onClick={() => toggleVisibility(apiKey.id)}
                      className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                    >
                      {apiKey.visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => copyToClipboard(apiKey.key)}
                      className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button className="p-2 text-red-500 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Add New API Key">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Name</label>
              <input
                type="text"
                value={newKey.name}
                onChange={(e) => setNewKey({ ...newKey, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="e.g., OpenAI API"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
              <input
                type="password"
                value={newKey.key}
                onChange={(e) => setNewKey({ ...newKey, key: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your API key"
              />
            </div>
            <Button onClick={addKey} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add API Key
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
