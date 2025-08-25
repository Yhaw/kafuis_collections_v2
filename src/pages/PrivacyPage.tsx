import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center">
            <Shield className="text-gold" size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Privacy Policy</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
        <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
      </div>

      {/* Quick Overview */}
      <OutlineCard className="p-8 mb-8">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">Privacy at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Lock className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-semibold text-deep-eggplant mb-2">Secure Data</h3>
            <p className="text-sm text-gray-600">Your information is encrypted and stored securely</p>
          </div>
          
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Eye className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-semibold text-deep-eggplant mb-2">Transparent Use</h3>
            <p className="text-sm text-gray-600">We clearly explain how we use your data</p>
          </div>
          
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Users className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-semibold text-deep-eggplant mb-2">Your Control</h3>
            <p className="text-sm text-gray-600">You control your data and can request changes</p>
          </div>
        </div>
      </OutlineCard>

      {/* Information We Collect */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Information We Collect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-3">
                When you create an account or make a purchase, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely by Paystack)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on site)</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Information from Third Parties</h3>
              <p className="text-gray-700 mb-3">
                We may receive information from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Payment processors (Paystack) for transaction processing</li>
                <li>Delivery partners for shipping updates</li>
                <li>Social media platforms if you interact with our content</li>
              </ul>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* How We Use Information */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">How We Use Your Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Essential Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Manage your account and loyalty points</li>
                <li>Provide customer support</li>
                <li>Send order confirmations and updates</li>
                <li>Process payments and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Improvements & Marketing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Improve our website and services</li>
                <li>Personalize your shopping experience</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Analyze usage patterns and trends</li>
                <li>Develop new features and products</li>
              </ul>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Information Sharing */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Information Sharing</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">✅ We DO share information with:</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li><strong>Payment processors</strong> - Paystack for secure payment processing</li>
                <li><strong>Delivery partners</strong> - Courier services to fulfill your orders</li>
                <li><strong>Service providers</strong> - Trusted partners who help operate our business</li>
                <li><strong>Legal authorities</strong> - When required by law or to protect our rights</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">❌ We DO NOT:</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                <li>Sell your personal information to third parties</li>
                <li>Share your data for others' marketing purposes</li>
                <li>Provide your information to data brokers</li>
                <li>Use your data for purposes you haven't consented to</li>
              </ul>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Data Security */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Data Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Technical Safeguards</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>SSL encryption for all data transmission</li>
                <li>Secure servers with regular security updates</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Organizational Measures</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Staff training on data protection</li>
                <li>Limited access to personal information</li>
                <li>Regular privacy policy reviews</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> While we implement strong security measures, no system is 100% secure. 
              We continuously work to improve our security practices and will notify you of any significant data breaches.
            </p>
          </div>
        </OutlineCard>
      </section>

      {/* Your Rights */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Your Rights and Choices</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Access and Control</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>View and update your account information</li>
                  <li>Download your personal data</li>
                  <li>Delete your account and data</li>
                  <li>Correct inaccurate information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Communication Preferences</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Unsubscribe from marketing emails</li>
                  <li>Opt out of promotional communications</li>
                  <li>Manage cookie preferences</li>
                  <li>Control data sharing settings</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-gold bg-opacity-10 rounded-lg">
              <h4 className="font-semibold text-deep-eggplant mb-2">How to Exercise Your Rights</h4>
              <p className="text-sm text-gray-700">
                To exercise any of these rights, contact us at <strong>privacy@kafuiscollections.com</strong> or 
                use the contact form on our website. We'll respond within 30 days of receiving your request.
              </p>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Cookies and Tracking</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              We use cookies and similar technologies to improve your experience on our website. 
              Here's what we use and why:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Essential Cookies</h3>
                <p className="text-sm text-gray-700 mb-2">Required for basic website functionality:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Shopping cart contents</li>
                  <li>Login status</li>
                  <li>Security features</li>
                  <li>Site preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Optional Cookies</h3>
                <p className="text-sm text-gray-700 mb-2">Help us improve our service:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Analytics and usage statistics</li>
                  <li>Personalized recommendations</li>
                  <li>Marketing effectiveness</li>
                  <li>Social media integration</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-royal-plum bg-opacity-10 rounded-lg">
              <p className="text-sm text-gray-700">
                You can control cookies through your browser settings. Note that disabling certain cookies 
                may affect website functionality.
              </p>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Children's Privacy */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our website is not intended for children under 13 years of age. We do not knowingly collect 
            personal information from children under 13. If you are a parent or guardian and believe your 
            child has provided us with personal information, please contact us immediately.
          </p>
          <p className="text-gray-700">
            If we discover that we have collected personal information from a child under 13, we will 
            delete that information as quickly as possible.
          </p>
        </OutlineCard>
      </section>

      {/* Changes to Policy */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this privacy policy from time to time to reflect changes in our practices or 
            for legal, operational, or regulatory reasons. When we make changes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>We'll update the "Last updated" date at the top of this policy</li>
            <li>We'll notify you via email if changes are significant</li>
            <li>We'll post a notice on our website</li>
            <li>We'll give you time to review changes before they take effect</li>
          </ul>
          <p className="text-gray-700">
            Your continued use of our services after changes take effect means you accept the updated policy.
          </p>
        </OutlineCard>
      </section>

      {/* Contact Information */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Questions About Privacy?</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about this privacy policy or how we handle your data, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = 'mailto:privacy@kafuiscollections.com'}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Email Privacy Team
          </button>
          <button
            onClick={() => window.location.href = '/contact'}
            className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};