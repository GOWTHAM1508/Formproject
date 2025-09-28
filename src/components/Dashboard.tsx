import React from 'react';
import { BarChart3, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { applications } from '../data/mockData';

export function Dashboard() {
  const stats = [
    {
      name: 'Total Applications',
      value: '12',
      change: '+2 from last month',
      changeType: 'positive',
      icon: FileText,
    },
    {
      name: 'In Progress',
      value: '3',
      change: '5 completed this week',
      changeType: 'positive',
      icon: Clock,
    },
    {
      name: 'Approved',
      value: '8',
      change: '+3 from last month',
      changeType: 'positive',
      icon: CheckCircle,
    },
    {
      name: 'Pending Review',
      value: '1',
      change: 'Needs attention',
      changeType: 'warning',
      icon: AlertCircle,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's an overview of your applications.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.name} padding="sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {item.name}
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {item.value}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <span
                  className={`${
                    item.changeType === 'positive' ? 'text-green-600' : 'text-yellow-600'
                  }`}
                >
                  {item.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Applications */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Applications</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {application.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={
                        application.status === 'approved' ? 'success' :
                        application.status === 'processing' ? 'info' :
                        application.status === 'draft' ? 'warning' : 'default'
                      }
                    >
                      {application.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${application.progress}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {application.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.updatedAt.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card hover>
          <div className="text-center">
            <FileText className="mx-auto h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Start New Application</h3>
            <p className="mt-2 text-sm text-gray-500">
              Browse our form library and begin a new application
            </p>
            <Button className="mt-4" size="sm">
              Get Started
            </Button>
          </div>
        </Card>

        <Card hover>
          <div className="text-center">
            <BarChart3 className="mx-auto h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">View Analytics</h3>
            <p className="mt-2 text-sm text-gray-500">
              Track your application success rates and timing
            </p>
            <Button variant="outline" className="mt-4" size="sm">
              View Reports
            </Button>
          </div>
        </Card>

        <Card hover>
          <div className="text-center">
            <Clock className="mx-auto h-12 w-12 text-orange-500" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Schedule Support</h3>
            <p className="mt-2 text-sm text-gray-500">
              Book a session with our document experts
            </p>
            <Button variant="outline" className="mt-4" size="sm">
              Schedule Call
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}