import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import { ArrowRight, BarChart3, Key, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  // Redirect to dashboard if user is authenticated
  if (session) {
    redirect('/dashboard');
  }
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sultan Project Manager
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your AI-powered command center for managing OpenClaw instances, 
              API keys, and automated workflows.
            </p>
            
            <div className="flex justify-center gap-4 mb-12">
              <Link href="/auth/signin">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  View Dashboard
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <BarChart3 className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">System Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time status of your OpenClaw instances and sub-agents
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <Key className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Secure storage and management of all your API keys
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <Zap className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automate tasks and monitor performance metrics
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                Built with Next.js • Deployed on Vercel • Powered by AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}