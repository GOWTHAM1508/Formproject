import React, { useState, useCallback } from 'react';
import { Upload, X, AlertCircle, CheckCircle, FileText, Image } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Document } from '../types';

export function DocumentUpload() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const newDocuments: Document[] = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: file.size,
      status: 'processing',
      errors: [],
      uploadedAt: new Date()
    }));

    setDocuments(prev => [...prev, ...newDocuments]);

    // Simulate processing
    newDocuments.forEach(doc => {
      setTimeout(() => {
        const isValid = Math.random() > 0.3; // 70% success rate
        setDocuments(prev => prev.map(d => 
          d.id === doc.id 
            ? { 
                ...d, 
                status: isValid ? 'valid' : 'error',
                errors: isValid ? [] : ['File size exceeds limit', 'Invalid format detected']
              }
            : d
        ));
      }, 2000);
    });
  };

  const removeDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Upload Documents</h1>
        <p className="mt-1 text-sm text-gray-500">
          Upload your documents for intelligent processing and validation.
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            dragActive 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Drop files here or click to browse
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Support for PDF, JPG, PNG files up to 10MB each
          </p>
          <div className="mt-6">
            <label htmlFor="file-upload" className="cursor-pointer">
              <Button>
                Choose Files
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </Card>

      {/* Document Requirements */}
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Document Requirements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900">Supported Formats</h3>
            <p className="text-sm text-blue-700 mt-1">PDF, JPG, PNG</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-900">Maximum Size</h3>
            <p className="text-sm text-green-700 mt-1">10MB per file</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-medium text-orange-900">Image Quality</h3>
            <p className="text-sm text-orange-700 mt-1">Min 300 DPI recommended</p>
          </div>
        </div>
      </Card>

      {/* Uploaded Documents */}
      {documents.length > 0 && (
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Uploaded Documents ({documents.length})
            </h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setDocuments([])}
            >
              Clear All
            </Button>
          </div>

          <div className="space-y-3">
            {documents.map((doc) => (
              <div 
                key={doc.id} 
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-shrink-0 mr-3">
                    {doc.type.startsWith('image/') ? (
                      <Image className="h-8 w-8 text-gray-400" />
                    ) : (
                      <FileText className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {doc.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(doc.size)} • Uploaded {doc.uploadedAt.toLocaleTimeString()}
                    </p>
                    {doc.errors.length > 0 && (
                      <div className="mt-1">
                        {doc.errors.map((error, index) => (
                          <p key={index} className="text-xs text-red-600">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3 ml-4">
                  <Badge 
                    variant={
                      doc.status === 'valid' ? 'success' :
                      doc.status === 'error' ? 'error' :
                      doc.status === 'processing' ? 'info' : 'default'
                    }
                  >
                    {doc.status === 'processing' && (
                      <div className="animate-spin rounded-full h-3 w-3 border border-current mr-1" />
                    )}
                    {doc.status === 'valid' && <CheckCircle className="h-3 w-3 mr-1" />}
                    {doc.status === 'error' && <AlertCircle className="h-3 w-3 mr-1" />}
                    {doc.status}
                  </Badge>
                  
                  <button
                    onClick={() => removeDocument(doc.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {documents.some(doc => doc.status === 'valid') && (
            <div className="mt-6 flex justify-end">
              <Button>
                Process Documents
              </Button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}