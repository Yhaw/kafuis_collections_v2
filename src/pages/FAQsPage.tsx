import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const FAQsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqs: FAQ[] = [
    // General
    {
      id: 1,
      category: 'general',
      question: 'What is Kafui\'s Collections?',
      answer: 'Kafui\'s Collections is Ghana\'s premier destination for quality thrift fashion. We offer carefully curated pre-loved clothing, shoes, bags, and accessories for babies, toddlers, teens, and adults at affordable prices. Every item is inspected for quality and condition before being listed.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Are your items authentic and genuine?',
      answer: 'Yes, all our items are authentic. We have a strict authentication process and only source from trusted suppliers. Each item undergoes quality inspection before being added to our collection.'
    },
    {
      id: 3,
      category: 'general',
      question: 'What condition are the items in?',
      answer: 'All our items are in good to excellent condition. We categorize items by condition and provide detailed descriptions and photos. We only sell items that we would be happy to wear ourselves or give to our own families.'
    },

    // Orders & Payment
    {
      id: 4,
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'Simply browse our catalog, add items to your cart, and proceed to checkout. You can shop as a guest or create an account. Fill in your shipping details and complete payment via Paystack using card, bank transfer, or mobile money (MoMo).'
    },
    {
      id: 5,
      category: 'orders',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods through Paystack including credit/debit cards, bank transfers, and mobile money (MoMo). All transactions are secure and encrypted.'
    },
    {
      id: 6,
      category: 'orders',
      question: 'Can I cancel or modify my order?',
      answer: 'You can cancel or modify your order within 1 hour of placing it. After this time, your order may already be processed and shipped. Contact us immediately if you need to make changes.'
    },

    // Shipping
    {
      id: 7,
      category: 'shipping',
      question: 'Do you deliver across Ghana?',
      answer: 'Yes, we deliver to all regions in Ghana. Delivery within Accra is free for orders over ₵100. For other regions, delivery fees range from ₵15-25 depending on location.'
    },
    {
      id: 8,
      category: 'shipping',
      question: 'How long does delivery take?',
      answer: 'Delivery within Accra takes 1-2 business days. For other regions, delivery takes 2-5 business days depending on location. We\'ll provide tracking information once your order ships.'
    },
    {
      id: 9,
      category: 'shipping',
      question: 'Can I track my order?',
      answer: 'Yes, once your order ships, you\'ll receive tracking information via SMS and email. You can also check your order status in your account or by contacting our customer service.'
    },

    // Returns
    {
      id: 10,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy from the date of delivery. Items must be in original condition with tags attached. Due to hygiene reasons, underwear and swimwear cannot be returned unless defective.'
    },
    {
      id: 11,
      category: 'returns',
      question: 'How do I return an item?',
      answer: 'Contact our customer service within 7 days of delivery. We\'ll provide a return authorization and instructions. You can send items back via our delivery partners or drop them off at our Accra location.'
    },
    {
      id: 12,
      category: 'returns',
      question: 'When will I receive my refund?',
      answer: 'Refunds are processed within 3-5 business days after we receive and inspect the returned items. The money will be refunded to your original payment method.'
    },

    // Sizing & Fit
    {
      id: 13,
      category: 'sizing',
      question: 'How do I know what size to order?',
      answer: 'We provide detailed size charts for all categories. Measurements are provided for each item where applicable. Since these are pre-loved items, sizing may vary between brands, so please check measurements carefully.'
    },
    {
      id: 14,
      category: 'sizing',
      question: 'What if an item doesn\'t fit?',
      answer: 'If an item doesn\'t fit, you can return it within 7 days following our return policy. We recommend checking our size guide and item measurements before ordering to ensure the best fit.'
    },

    // Loyalty Program
    {
      id: 15,
      category: 'loyalty',
      question: 'How does the loyalty program work?',
      answer: 'Earn 1 point for every ₵1 spent (rounded down to the nearest hundred). Redeem 100 points for ₵1 discount on future purchases. Points never expire and you can advance through Bronze, Silver, Gold, and Platinum tiers for additional benefits.'
    },
    {
      id: 16,
      category: 'loyalty',
      question: 'When do I receive my loyalty points?',
      answer: 'Points are automatically added to your account immediately after successful payment. You can view your points balance and transaction history in your loyalty wallet.'
    },

    // Account
    {
      id: 17,
      category: 'account',
      question: 'Do I need an account to shop?',
      answer: 'No, you can shop as a guest. However, creating an account allows you to track orders, earn loyalty points, save addresses, and enjoy a faster checkout experience.'
    },
    {
      id: 18,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the sign-in page and enter your email address. We\'ll send you instructions to reset your password. If you don\'t receive the email, check your spam folder.'
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'general', label: 'General' },
    { value: 'orders', label: 'Orders & Payment' },
    { value: 'shipping', label: 'Shipping & Delivery' },
    { value: 'returns', label: 'Returns & Exchanges' },
    { value: 'sizing', label: 'Sizing & Fit' },
    { value: 'loyalty', label: 'Loyalty Program' },
    { value: 'account', label: 'Account' },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">
          Find answers to common questions about shopping with Kafui's Collections
        </p>
      </div>

      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-plum"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-plum"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => (
            <OutlineCard key={faq.id}>
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-eggplant mb-1">{faq.question}</h3>
                  <span className="text-xs text-gray-500 capitalize">{faq.category}</span>
                </div>
                {expandedItems.includes(faq.id) ? (
                  <ChevronUp className="text-royal-plum flex-shrink-0 ml-4" size={20} />
                ) : (
                  <ChevronDown className="text-royal-plum flex-shrink-0 ml-4" size={20} />
                )}
              </button>
              
              {expandedItems.includes(faq.id) && (
                <div className="px-4 pb-4 border-t border-gray-100 mt-4 pt-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </OutlineCard>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-deep-eggplant mb-2">No FAQs found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Still have questions */}
      <OutlineCard className="mt-12 p-8 text-center">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Our customer service team is here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Support
          </button>
          <button
            onClick={() => window.location.href = 'tel:+233241234567'}
            className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
          >
            Call Us
          </button>
        </div>
      </OutlineCard>
    </div>
  );
};