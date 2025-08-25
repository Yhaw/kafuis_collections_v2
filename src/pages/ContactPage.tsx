import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { notifications } from '@mantine/notifications';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission
    notifications.show({
      title: 'Message Sent!',
      message: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      color: 'green',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
          our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <OutlineCard className="p-6">
            <div className="flex items-start">
              <div className="bg-gold bg-opacity-10 rounded-lg p-3 mr-4">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-deep-eggplant mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Send us an email anytime
                </p>
                <a 
                  href="mailto:hello@kafuiscollections.com"
                  className="text-royal-plum hover:text-opacity-80 font-medium"
                >
                  hello@kafuiscollections.com
                </a>
              </div>
            </div>
          </OutlineCard>

          <OutlineCard className="p-6">
            <div className="flex items-start">
              <div className="bg-gold bg-opacity-10 rounded-lg p-3 mr-4">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-deep-eggplant mb-1">Call Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Mon-Sat, 9am-6pm (GMT)
                </p>
                <a 
                  href="tel:+233241234567"
                  className="text-royal-plum hover:text-opacity-80 font-medium"
                >
                  +233 24 123 4567
                </a>
              </div>
            </div>
          </OutlineCard>

          <OutlineCard className="p-6">
            <div className="flex items-start">
              <div className="bg-gold bg-opacity-10 rounded-lg p-3 mr-4">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-deep-eggplant mb-1">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Come say hello at our office
                </p>
                <address className="text-royal-plum not-italic">
                  123 Liberation Road<br />
                  Accra, Greater Accra<br />
                  Ghana
                </address>
              </div>
            </div>
          </OutlineCard>

          <OutlineCard className="p-6">
            <div className="flex items-start">
              <div className="bg-gold bg-opacity-10 rounded-lg p-3 mr-4">
                <Clock className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-deep-eggplant mb-1">Business Hours</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </OutlineCard>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <OutlineCard className="p-6">
            <h2 className="text-2xl font-bold text-deep-eggplant mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => updateFormData('subject', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="quality">Product Quality</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-royal-plum text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </OutlineCard>
        </div>
      </div>

      {/* FAQ Quick Links */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">
          Need Quick Answers?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlineCard hoverable onClick={() => window.location.href = '/faqs'} className="text-center p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">Frequently Asked Questions</h3>
            <p className="text-sm text-gray-600">
              Find answers to common questions about our products and services.
            </p>
          </OutlineCard>

          <OutlineCard hoverable onClick={() => window.location.href = '/shipping'} className="text-center p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">Shipping & Returns</h3>
            <p className="text-sm text-gray-600">
              Learn about our delivery options and return policy.
            </p>
          </OutlineCard>

          <OutlineCard hoverable onClick={() => window.location.href = '/size-guide'} className="text-center p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">Size Guide</h3>
            <p className="text-sm text-gray-600">
              Find the perfect fit with our comprehensive sizing charts.
            </p>
          </OutlineCard>
        </div>
      </section>
    </div>
  );
};