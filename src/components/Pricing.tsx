import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { pricingPlans } from '../data/mockData';

export function Pricing() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Choose Your Plan</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Select the perfect plan for your document processing needs. 
          All plans include intelligent validation, secure storage, and priority support.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md">
            Monthly
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Annual
            <Badge variant="success" size="sm" className="ml-2">Save 20%</Badge>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${
              plan.popular 
                ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' 
                : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="info" className="px-3 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{plan.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500">/{plan.interval}</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {plan.maxApplications === -1 
                  ? 'Unlimited applications' 
                  : `${plan.maxApplications} applications per ${plan.interval}`}
              </p>
            </div>

            <div className="mt-8">
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : ''
                }`}
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
              >
                {plan.popular && <Zap className="h-4 w-4 mr-2" />}
                Get Started
              </Button>
            </div>

            {plan.name === 'Enterprise' && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Need a custom solution? 
                  <a href="#contact" className="text-blue-600 hover:text-blue-500 ml-1">
                    Contact sales
                  </a>
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Can I change my plan later?
            </h3>
            <p className="text-sm text-gray-600">
              Yes, you can upgrade or downgrade your plan at any time. 
              Changes take effect immediately and billing is prorated.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-sm text-gray-600">
              We accept all major credit cards, UPI, net banking, and digital wallets. 
              Enterprise customers can also pay via bank transfer.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Is my data secure?
            </h3>
            <p className="text-sm text-gray-600">
              Absolutely. We use enterprise-grade encryption, secure cloud storage, 
              and comply with data protection regulations.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Do you offer refunds?
            </h3>
            <p className="text-sm text-gray-600">
              Yes, we offer a 30-day money-back guarantee for all plans. 
              Cancel within 30 days for a full refund, no questions asked.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}