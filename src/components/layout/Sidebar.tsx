import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Upload, 
  CreditCard, 
  Settings, 
  HelpCircle,
  X 
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'forms', name: 'Forms Library', icon: FileText },
  { id: 'upload', name: 'Upload Documents', icon: Upload },
  { id: 'pricing', name: 'Pricing', icon: CreditCard },
  { id: 'settings', name: 'Settings', icon: Settings },
  { id: 'help', name: 'Help & Support', icon: HelpCircle },
];

export function Sidebar({ isOpen, onClose, activeSection, onSectionChange }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
          
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={onClose}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <SidebarContent activeSection={activeSection} onSectionChange={onSectionChange} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16">
        <div className="flex-1 flex flex-col min-h-0 bg-gray-50 border-r border-gray-200">
          <SidebarContent activeSection={activeSection} onSectionChange={onSectionChange} />
        </div>
      </div>
    </>
  );
}

function SidebarContent({ activeSection, onSectionChange }: { 
  activeSection: string; 
  onSectionChange: (section: string) => void; 
}) {
  return (
    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <nav className="mt-5 flex-1 px-2 space-y-1">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={clsx(
              'w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-left',
              activeSection === item.id
                ? 'bg-blue-100 text-blue-900'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            )}
          >
            <item.icon
              className={clsx(
                'mr-3 h-5 w-5 flex-shrink-0',
                activeSection === item.id
                  ? 'text-blue-500'
                  : 'text-gray-400 group-hover:text-gray-500'
              )}
            />
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}