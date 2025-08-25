import React, { useState } from 'react';
import { Ruler, Baby, Users, User } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';

export const SizeGuidePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'baby' | 'toddler' | 'teen' | 'adult'>('adult');

  const sizeGuides = {
    baby: {
      clothing: [
        { size: '0-3M', chest: '41-43cm', waist: '41-43cm', length: '35cm', weight: '3-6kg' },
        { size: '3-6M', chest: '44-46cm', waist: '44-46cm', length: '38cm', weight: '6-8kg' },
        { size: '6-9M', chest: '47-49cm', waist: '47-49cm', length: '41cm', weight: '8-10kg' },
        { size: '9-12M', chest: '50-52cm', waist: '50-52cm', length: '44cm', weight: '10-12kg' },
        { size: '12-18M', chest: '53-55cm', waist: '53-55cm', length: '47cm', weight: '12-14kg' },
        { size: '18-24M', chest: '56-58cm', waist: '56-58cm', length: '50cm', weight: '14-16kg' },
      ],
      shoes: [
        { size: '1', length: '8.3cm', age: '0-3 months' },
        { size: '2', length: '8.9cm', age: '3-6 months' },
        { size: '3', length: '9.5cm', age: '6-9 months' },
        { size: '4', length: '10.2cm', age: '9-12 months' },
        { size: '5', length: '10.8cm', age: '12-18 months' },
        { size: '6', length: '11.4cm', age: '18-24 months' },
      ]
    },
    toddler: {
      clothing: [
        { size: '2T', chest: '51cm', waist: '48cm', height: '84-89cm' },
        { size: '3T', chest: '53cm', waist: '50cm', height: '89-94cm' },
        { size: '4T', chest: '55cm', waist: '52cm', height: '94-99cm' },
        { size: '5T', chest: '57cm', waist: '54cm', height: '99-104cm' },
      ],
      shoes: [
        { size: '7', length: '12.1cm', age: '2-2.5 years' },
        { size: '8', length: '12.7cm', age: '2.5-3 years' },
        { size: '9', length: '13.3cm', age: '3-3.5 years' },
        { size: '10', length: '14.0cm', age: '3.5-4 years' },
        { size: '11', length: '14.6cm', age: '4-4.5 years' },
        { size: '12', length: '15.2cm', age: '4.5-5 years' },
      ]
    },
    teen: {
      clothing: [
        { size: 'XS', chest: '81-84cm', waist: '64-67cm', hip: '89-92cm' },
        { size: 'S', chest: '84-89cm', waist: '67-72cm', hip: '92-97cm' },
        { size: 'M', chest: '89-94cm', waist: '72-77cm', hip: '97-102cm' },
        { size: 'L', chest: '94-99cm', waist: '77-82cm', hip: '102-107cm' },
        { size: 'XL', chest: '99-104cm', waist: '82-87cm', hip: '107-112cm' },
      ],
      shoes: [
        { size: '35', length: '22.0cm' },
        { size: '36', length: '22.7cm' },
        { size: '37', length: '23.3cm' },
        { size: '38', length: '24.0cm' },
        { size: '39', length: '24.7cm' },
        { size: '40', length: '25.3cm' },
        { size: '41', length: '26.0cm' },
      ]
    },
    adult: {
      clothing: [
        { size: 'XS', chest: '81-86cm', waist: '64-69cm', hip: '89-94cm' },
        { size: 'S', chest: '86-91cm', waist: '69-74cm', hip: '94-99cm' },
        { size: 'M', chest: '91-97cm', waist: '74-80cm', hip: '99-104cm' },
        { size: 'L', chest: '97-102cm', waist: '80-85cm', hip: '104-109cm' },
        { size: 'XL', chest: '102-107cm', waist: '85-91cm', hip: '109-114cm' },
        { size: 'XXL', chest: '107-112cm', waist: '91-97cm', hip: '114-119cm' },
      ],
      shoes: [
        { size: '36', length: '22.7cm' },
        { size: '37', length: '23.3cm' },
        { size: '38', length: '24.0cm' },
        { size: '39', length: '24.7cm' },
        { size: '40', length: '25.3cm' },
        { size: '41', length: '26.0cm' },
        { size: '42', length: '26.7cm' },
        { size: '43', length: '27.3cm' },
        { size: '44', length: '28.0cm' },
        { size: '45', length: '28.7cm' },
      ]
    }
  };

  const categories = [
    { id: 'baby' as const, name: 'Baby', icon: Baby },
    { id: 'toddler' as const, name: 'Toddler', icon: Baby },
    { id: 'teen' as const, name: 'Teen', icon: Users },
    { id: 'adult' as const, name: 'Adult', icon: User },
  ];

  const IconComponent = categories.find(cat => cat.id === selectedCategory)?.icon || User;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center">
            <Ruler className="text-gold" size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Size Guide</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find your perfect fit with our comprehensive size charts. All measurements are in centimeters unless otherwise noted.
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-royal-plum text-white'
                  : 'border border-gray-300 text-deep-eggplant hover:border-royal-plum hover:text-royal-plum'
              }`}
            >
              <Icon className="mr-2" size={20} />
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Clothing Sizes */}
        <OutlineCard>
          <div className="flex items-center mb-6">
            <IconComponent className="text-gold mr-3" size={24} />
            <h2 className="text-xl font-semibold text-deep-eggplant">
              {categories.find(cat => cat.id === selectedCategory)?.name} Clothing Sizes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-semibold text-deep-eggplant">Size</th>
                  <th className="text-center py-2 font-semibold text-deep-eggplant">Chest</th>
                  <th className="text-center py-2 font-semibold text-deep-eggplant">Waist</th>
                  {selectedCategory === 'baby' ? (
                    <>
                      <th className="text-center py-2 font-semibold text-deep-eggplant">Length</th>
                      <th className="text-center py-2 font-semibold text-deep-eggplant">Weight</th>
                    </>
                  ) : selectedCategory === 'toddler' ? (
                    <th className="text-center py-2 font-semibold text-deep-eggplant">Height</th>
                  ) : (
                    <th className="text-center py-2 font-semibold text-deep-eggplant">Hip</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {sizeGuides[selectedCategory].clothing.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 font-medium text-royal-plum">{item.size}</td>
                    <td className="py-2 text-center">{item.chest}</td>
                    <td className="py-2 text-center">{item.waist}</td>
                    <td className="py-2 text-center">
                      {selectedCategory === 'baby' 
                        ? (item as any).length 
                        : selectedCategory === 'toddler'
                        ? (item as any).height
                        : (item as any).hip
                      }
                    </td>
                    {selectedCategory === 'baby' && (
                      <td className="py-2 text-center">{(item as any).weight}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </OutlineCard>

        {/* Shoe Sizes */}
        <OutlineCard>
          <div className="flex items-center mb-6">
            <div className="bg-gold bg-opacity-10 rounded-full w-8 h-8 flex items-center justify-center mr-3">
              <span className="text-gold text-lg">👟</span>
            </div>
            <h2 className="text-xl font-semibold text-deep-eggplant">
              {categories.find(cat => cat.id === selectedCategory)?.name} Shoe Sizes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-semibold text-deep-eggplant">Size</th>
                  <th className="text-center py-2 font-semibold text-deep-eggplant">Length</th>
                  {(selectedCategory === 'baby' || selectedCategory === 'toddler') && (
                    <th className="text-center py-2 font-semibold text-deep-eggplant">Age</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {sizeGuides[selectedCategory].shoes.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 font-medium text-royal-plum">{item.size}</td>
                    <td className="py-2 text-center">{item.length}</td>
                    {(selectedCategory === 'baby' || selectedCategory === 'toddler') && (
                      <td className="py-2 text-center">{(item as any).age}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </OutlineCard>
      </div>

      {/* How to Measure */}
      <section className="mt-12">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">How to Measure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-royal-plum bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-royal-plum font-bold text-lg">📏</span>
              </div>
              <h3 className="font-semibold text-deep-eggplant mb-2">Chest/Bust</h3>
              <p className="text-sm text-gray-600">
                Measure around the fullest part of the chest/bust, keeping the tape horizontal.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-plum bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-royal-plum font-bold text-lg">📐</span>
              </div>
              <h3 className="font-semibold text-deep-eggplant mb-2">Waist</h3>
              <p className="text-sm text-gray-600">
                Measure around the narrowest part of the waist, usually just above the hip bone.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-plum bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-royal-plum font-bold text-lg">📏</span>
              </div>
              <h3 className="font-semibold text-deep-eggplant mb-2">Hip</h3>
              <p className="text-sm text-gray-600">
                Measure around the fullest part of the hips, keeping the tape horizontal.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gold bg-opacity-10 rounded-lg">
            <h4 className="font-semibold text-deep-eggplant mb-2">💡 Pro Tips:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Use a flexible measuring tape for accurate measurements</li>
              <li>• Measure over undergarments but not over bulky clothing</li>
              <li>• For the best fit, have someone else take your measurements</li>
              <li>• When in doubt, size up rather than down for comfort</li>
              <li>• Check individual item descriptions for specific measurements</li>
            </ul>
          </div>
        </OutlineCard>
      </section>

      {/* Size Conversion */}
      <section className="mt-12">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">International Size Conversion</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-semibold text-deep-eggplant">Ghana/UK</th>
                  <th className="text-center py-2 font-semibold text-deep-eggplant">US</th>
                  <th className="text-center py-2 font-semibold text-deep-eggplant">EU</th>
                  <th className="text-center py-2 font-semibold text-deep-eggplant">Chest (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-royal-plum">XS</td>
                  <td className="py-2 text-center">XS</td>
                  <td className="py-2 text-center">32-34</td>
                  <td className="py-2 text-center">81-86</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-royal-plum">S</td>
                  <td className="py-2 text-center">S</td>
                  <td className="py-2 text-center">36-38</td>
                  <td className="py-2 text-center">86-91</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-royal-plum">M</td>
                  <td className="py-2 text-center">M</td>
                  <td className="py-2 text-center">40-42</td>
                  <td className="py-2 text-center">91-97</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-royal-plum">L</td>
                  <td className="py-2 text-center">L</td>
                  <td className="py-2 text-center">44-46</td>
                  <td className="py-2 text-center">97-102</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-royal-plum">XL</td>
                  <td className="py-2 text-center">XL</td>
                  <td className="py-2 text-center">48-50</td>
                  <td className="py-2 text-center">102-107</td>
                </tr>
              </tbody>
            </table>
          </div>
        </OutlineCard>
      </section>

      {/* Need Help */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Still unsure about sizing?</h2>
        <p className="text-gray-600 mb-6">
          Our customer service team is here to help you find the perfect fit!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Support
          </button>
          <button
            onClick={() => window.location.href = '/catalog'}
            className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};