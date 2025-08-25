import React from 'react';
import { Heart, Users, Leaf, Award } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-deep-eggplant mb-4">About Kafui's Collections</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Where Style Meets Affordability – Ghana's premier destination for quality thrift fashion 
          that celebrates culture, sustainability, and individual expression.
        </p>
      </div>

      {/* Story Section */}
      <OutlineCard className="mb-12 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in the heart of Accra, Kafui's Collections was born from a simple belief: 
              everyone deserves to look and feel amazing, regardless of their budget. What started 
              as a small collection of carefully curated pre-loved items has grown into Ghana's 
              most trusted destination for thrift fashion.
            </p>
            <p className="text-gray-700 mb-4">
              Named after our founder's grandmother, who taught us that true style comes from 
              within and that every piece of clothing has a story to tell, we continue her legacy 
              by giving fashion a second life and making it accessible to all.
            </p>
            <p className="text-gray-700">
              Today, we serve families across Ghana, from babies taking their first steps to 
              adults making bold fashion statements. Each item in our collection is chosen with 
              love, inspected for quality, and priced to ensure everyone can afford to express 
              their unique style.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-royal-plum to-gold rounded-xl flex items-center justify-center">
              <div className="text-white text-center">
                <Heart className="mx-auto mb-4" size={64} />
                <h3 className="text-xl font-bold mb-2">Made with Love</h3>
                <p className="text-sm opacity-90">In the heart of Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </OutlineCard>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OutlineCard className="text-center p-6">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">Quality First</h3>
            <p className="text-sm text-gray-600">
              Every item is carefully inspected and selected for quality, ensuring you get the best value.
            </p>
          </OutlineCard>

          <OutlineCard className="text-center p-6">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">Sustainability</h3>
            <p className="text-sm text-gray-600">
              We believe in giving fashion a second life, reducing waste and promoting circular fashion.
            </p>
          </OutlineCard>

          <OutlineCard className="text-center p-6">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">Community</h3>
            <p className="text-sm text-gray-600">
              We're more than a store – we're a community that celebrates diversity and individual style.
            </p>
          </OutlineCard>

          <OutlineCard className="text-center p-6">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">Affordability</h3>
            <p className="text-sm text-gray-600">
              Style shouldn't break the bank. We make quality fashion accessible to everyone.
            </p>
          </OutlineCard>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To make quality fashion accessible to every Ghanaian family while promoting sustainable 
            practices and celebrating the unique style of our diverse community. We believe that 
            looking good shouldn't cost the earth – literally and figuratively.
          </p>
        </OutlineCard>

        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become Africa's leading platform for sustainable fashion, where every person can 
            express their unique style affordably while contributing to a more sustainable future 
            for our continent and our children.
          </p>
        </OutlineCard>
      </div>

      {/* Why Choose Us */}
      <OutlineCard className="p-8 mb-12">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">Why Choose Kafui's Collections?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Quality Guarantee</h3>
            <p className="text-gray-700 mb-4">
              Every item goes through our strict quality control process. We only sell pieces 
              we'd be proud to wear ourselves.
            </p>

            <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Local Understanding</h3>
            <p className="text-gray-700 mb-4">
              We understand the Ghanaian market, climate, and style preferences. Our selection 
              is curated specifically for our local community.
            </p>

            <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Fast & Reliable</h3>
            <p className="text-gray-700">
              Quick delivery across Ghana with reliable partners. We know every region and 
              ensure your items reach you safely.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Fair Pricing</h3>
            <p className="text-gray-700 mb-4">
              Our prices are transparent and fair. No hidden costs, no unreasonable markups – 
              just honest pricing for honest fashion.
            </p>

            <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Loyalty Rewards</h3>
            <p className="text-gray-700 mb-4">
              The more you shop, the more you save. Our loyalty program rewards our community 
              with points that turn into real discounts.
            </p>

            <h3 className="text-lg font-semibold text-deep-eggplant mb-3">Easy Returns</h3>
            <p className="text-gray-700">
              Not satisfied? We offer a hassle-free 7-day return policy because your satisfaction 
              is our priority.
            </p>
          </div>
        </div>
      </OutlineCard>

      {/* Contact CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Have questions about our story, our process, or want to collaborate? 
          We'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Us
          </button>
          <button
            onClick={() => window.location.href = '/catalog'}
            className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
          >
            Shop Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};