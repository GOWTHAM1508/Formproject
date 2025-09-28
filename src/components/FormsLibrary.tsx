import React, { useState } from 'react';
import { Search, Filter, Clock, Star, Download, FileText } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { formTemplates } from '../data/mockData';

export function FormsLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 
    'Tamil Nadu Universities', 
    'TN e-Sevai', 
    'IITs', 
    'NITs', 
    'IIMs', 
    'Medical Colleges', 
    'Competitive Exams', 
    'Central Universities', 
    'State Universities'
  ];

  const filteredForms = formTemplates.filter(form => {
    const matchesSearch = form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Forms Library</h1>
        <p className="mt-1 text-sm text-gray-500">
          Comprehensive collection of Indian educational institutions, competitive exams, and Tamil Nadu e-Sevai applications.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search forms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">
            {formTemplates.filter(f => f.category === 'Tamil Nadu Universities').length}
          </div>
          <div className="text-sm text-blue-700">TN Universities</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">
            {formTemplates.filter(f => f.category === 'TN e-Sevai').length}
          </div>
          <div className="text-sm text-green-700">e-Sevai Forms</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">
            {formTemplates.filter(f => f.category === 'Competitive Exams').length}
          </div>
          <div className="text-sm text-purple-700">Competitive Exams</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-600">
            {formTemplates.filter(f => ['IITs', 'NITs', 'IIMs'].includes(f.category)).length}
          </div>
          <div className="text-sm text-orange-700">Premier Institutes</div>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredForms.map((form) => (
          <Card key={form.id} hover className="flex flex-col h-full">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="info">{form.category}</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  4.8
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {form.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">
                {form.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {form.estimatedTime}
                </div>
                <Badge 
                  variant={
                    form.difficulty === 'Easy' ? 'success' :
                    form.difficulty === 'Medium' ? 'warning' : 'error'
                  }
                >
                  {form.difficulty}
                </Badge>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Required Documents ({form.requirements.length})
                </h4>
                <div className="space-y-1">
                  {form.requirements.slice(0, 3).map((req, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <FileText className="h-3 w-3 mr-2 text-gray-400" />
                      {req.type}
                      {req.mandatory && <span className="text-red-500 ml-1">*</span>}
                    </div>
                  ))}
                  {form.requirements.length > 3 && (
                    <p className="text-xs text-gray-500">
                      +{form.requirements.length - 3} more documents
                    </p>
                  )}
                </div>
              </div>

              {form.fees && (
                <div className="mb-4">
                  <span className={`text-lg font-bold ${
                    form.fees <= 100 ? 'text-green-600' : 
                    form.fees <= 1000 ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    ₹{form.fees.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">processing fee</span>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Requirements
              </Button>
              <Button size="sm" className="flex-1">
                Start Application
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredForms.length === 0 && (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No forms found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try searching for specific colleges, exams, or e-Sevai services.
          </p>
        </div>
      )}
    </div>
  );
}