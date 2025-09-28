import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './components/Dashboard';
import { FormsLibrary } from './components/FormsLibrary';
import { DocumentUpload } from './components/DocumentUpload';
import { Pricing } from './components/Pricing';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'forms':
        return <FormsLibrary />;
      case 'upload':
        return <DocumentUpload />;
      case 'pricing':
        return <Pricing />;
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <p className="mt-2 text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      case 'help':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Help & Support</h2>
            <p className="mt-2 text-gray-600">24/7 support system coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          setSidebarOpen(false);
        }}
      />

      <main className="lg:pl-64 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;