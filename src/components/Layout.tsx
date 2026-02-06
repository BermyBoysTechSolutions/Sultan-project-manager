'use client';

import { ReactNode, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/tasks', label: 'Tasks' },
    { href: '/clients', label: 'Clients' },
    { href: '/agents', label: 'AI Agents' },
    { href: '/keys', label: 'API Keys' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <header className="bg-white shadow-lg border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <a href="/dashboard" className="flex items-center">
              <div className="bg-yellow-500 rounded-lg p-2 sm:p-3 mr-3 sm:mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Sultan PM</h1>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile nav dropdown */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-100 pt-3 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {children}
      </main>
    </div>
  );
}
