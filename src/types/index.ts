export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  status: 'pending' | 'processing' | 'valid' | 'error';
  errors: string[];
  url?: string;
  uploadedAt: Date;
}

export interface FormTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: DocumentRequirement[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  fees?: number;
}

export interface DocumentRequirement {
  type: string;
  format: string[];
  maxSize: number;
  dimensions?: {
    width: number;
    height: number;
  };
  mandatory: boolean;
  description: string;
}

export interface Application {
  id: string;
  formId: string;
  title: string;
  status: 'draft' | 'submitted' | 'processing' | 'approved' | 'rejected';
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
  progress: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
  maxApplications: number;
  priority: 'standard' | 'high' | 'premium';
}