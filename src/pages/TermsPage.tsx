import React from 'react';
import { FileText, Scale, ShieldCheck, AlertTriangle } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center">
            <FileText className="text-gold" size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Terms of Service</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These terms govern your use of Kafui's Collections website and services. Please read them carefully.
        </p>
        <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
      </div>

      {/* Agreement Overview */}
      <OutlineCard className="p-8 mb-8">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">Agreement Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Scale className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-semibold text-deep-eggplant mb-2">Fair Terms</h3>
            <p className="text-sm text-gray-600">Clear, reasonable terms that protect both parties</p>
          </div>
          
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-semibold text-deep-eggplant mb-2">Your Rights</h3>
            <p className="text-sm text-gray-600">We respect your rights as a customer</p>
          </div>
          
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-semibold text-deep-eggplant mb-2">Responsibilities</h3>
            <p className="text-sm text-gray-600">Clear expectations for all users</p>
          </div>
        </div>
      </OutlineCard>

      {/* Acceptance of Terms */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using the Kafui's Collections website and services, you accept and agree to be bound by 
            these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <p className="text-gray-700 mb-4">
            These terms apply to all visitors, users, and customers of our website and services, including but not 
            limited to browsers, vendors, customers, merchants, and contributors of content.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> By placing an order or creating an account, you confirm that you are at least 
              18 years old or have parental consent to use our services.
            </p>
          </div>
        </OutlineCard>
      </section>

      {/* Use of Services */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">2. Use of Our Services</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Permitted Uses</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Browse and purchase items for personal use</li>
                <li>Create an account to track orders and earn loyalty points</li>
                <li>Contact customer service for support</li>
                <li>Share our content on social media (with proper attribution)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Prohibited Uses</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Use our services for any unlawful purpose or activity</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reproduce, duplicate, or copy any part of our service without permission</li>
                <li>Use automated systems (bots) to access our website</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Account Terms */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">3. Account Terms</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Account Creation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>One person may not maintain multiple accounts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Account Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Keep your login credentials secure and confidential</li>
                <li>Update your information when it changes</li>
                <li>Use your account only for legitimate purposes</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Account Termination:</strong> We reserve the right to suspend or terminate accounts that 
                violate these terms or engage in fraudulent activity.
              </p>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Orders and Payments */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">4. Orders and Payments</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Order Process</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Prices are subject to change without notice</li>
                <li>We may limit quantities available for purchase</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Payment Terms</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Payment is required at the time of order</li>
                <li>We accept payments through Paystack (cards, bank transfer, mobile money)</li>
                <li>All prices are in Ghana Cedis (GHS) unless otherwise stated</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Order Modifications</h3>
              <p className="text-gray-700 mb-2">
                You may cancel or modify your order within 1 hour of placement. After this time:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Orders may already be processed and cannot be changed</li>
                <li>Cancellations may be subject to processing fees</li>
                <li>Contact customer service immediately for urgent changes</li>
              </ul>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Product Information */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">5. Product Information and Availability</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Product Descriptions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>We strive to provide accurate product descriptions and images</li>
                <li>Colors may vary due to monitor settings and lighting</li>
                <li>Measurements are approximate and may vary slightly</li>
                <li>All items are pre-owned unless otherwise specified</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Availability</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All items are subject to availability</li>
                <li>We update inventory regularly but cannot guarantee availability</li>
                <li>If an item becomes unavailable after ordering, we'll notify you immediately</li>
                <li>We may substitute similar items with your consent</li>
              </ul>
            </div>

            <div className="p-4 bg-gold bg-opacity-10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Quality Assurance:</strong> All items undergo quality inspection before listing. 
                However, as pre-owned items, some wear is normal and expected.
              </p>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Shipping and Returns */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">6. Shipping and Returns</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Shipping</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>We ship to all regions in Ghana</li>
                <li>Delivery times are estimates, not guarantees</li>
                <li>Risk of loss passes to you upon delivery</li>
                <li>Additional charges may apply for remote areas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Returns</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>7-day return policy from delivery date</li>
                <li>Items must be in original condition</li>
                <li>Customer pays return shipping costs</li>
                <li>Some items cannot be returned for hygiene reasons</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              For detailed shipping and return information, please see our 
              <a href="/shipping" className="font-medium hover:underline"> Shipping & Returns page</a>.
            </p>
          </div>
        </OutlineCard>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">7. Intellectual Property</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              The content on this website, including but not limited to text, graphics, logos, images, and software, 
              is the property of Kafui's Collections and is protected by copyright and other intellectual property laws.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Your Rights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You may view and use our website for personal, non-commercial purposes</li>
                <li>You may share our content on social media with proper attribution</li>
                <li>You may print pages for personal reference</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Restrictions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You may not reproduce, distribute, or create derivative works</li>
                <li>You may not use our content for commercial purposes without permission</li>
                <li>You may not remove copyright or other proprietary notices</li>
              </ul>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">8. Limitation of Liability</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              To the maximum extent permitted by law, Kafui's Collections shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">What We're Not Responsible For</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Delays or failures due to circumstances beyond our control</li>
                <li>Loss of data or interruption of service</li>
                <li>Actions of third-party service providers</li>
                <li>Damages resulting from misuse of our services</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Important:</strong> Our total liability to you for any claim shall not exceed the amount 
                you paid for the specific product or service that gave rise to the claim.
              </p>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Governing Law */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">9. Governing Law and Disputes</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              These terms are governed by the laws of Ghana. Any disputes arising from these terms or your use 
              of our services will be resolved in the courts of Ghana.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Dispute Resolution</h3>
              <p className="text-gray-700 mb-2">We encourage resolving disputes through:</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Direct communication with our customer service team</li>
                <li>Mediation through a mutually agreed mediator</li>
                <li>Legal proceedings in Ghana courts as a last resort</li>
              </ol>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Changes to Terms */}
      <section className="mb-8">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6">10. Changes to Terms</h2>
          
          <p className="text-gray-700 mb-4">
            We reserve the right to update these terms at any time. When we make changes:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>We'll update the "Last updated" date</li>
            <li>We'll notify users of significant changes via email or website notice</li>
            <li>Changes take effect immediately upon posting unless otherwise stated</li>
            <li>Your continued use constitutes acceptance of the updated terms</li>
          </ul>

          <div className="p-4 bg-gold bg-opacity-10 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Stay Informed:</strong> We recommend reviewing these terms periodically to stay informed 
              of any updates that may affect you.
            </p>
          </div>
        </OutlineCard>
      </section>

      {/* Contact Information */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Questions About These Terms?</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms of Service, please don't hesitate to contact us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = 'mailto:legal@kafuiscollections.com'}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Email Legal Team
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