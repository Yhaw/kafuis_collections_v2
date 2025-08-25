import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <OutlineCard className="p-12">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-royal-plum mb-4">404</div>
            <div className="text-6xl mb-4">👗</div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-deep-eggplant mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Looks like this page went on a shopping spree and got lost! 
            Don't worry, there are plenty of amazing fashion finds waiting for you.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-royal-plum text-white py-3 px-6 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              <Home className="mr-2" size={20} />
              Go Home
            </button>

            <button
              onClick={() => navigate('/catalog')}
              className="w-full border border-royal-plum text-royal-plum py-3 px-6 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors flex items-center justify-center"
            >
              <Search className="mr-2" size={20} />
              Browse Collection
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full text-gray-600 hover:text-royal-plum py-2 font-medium transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="mr-2" size={16} />
              Go Back
            </button>
          </div>
        </OutlineCard>

        {/* Helpful Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button
              onClick={() => navigate('/catalog?category=clothing')}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              Clothing
            </button>
            <button
              onClick={() => navigate('/catalog?category=shoes')}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              Shoes
            </button>
            <button
              onClick={() => navigate('/catalog?category=bags')}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              Bags
            </button>
            <button
              onClick={() => navigate('/catalog?category=accessories')}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              Accessories
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-royal-plum hover:text-opacity-80 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};