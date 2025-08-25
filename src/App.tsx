import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AuthPage } from './pages/AuthPage';
import { AccountPage } from './pages/AccountPage';
import { OrdersPage } from './pages/OrdersPage';
import { LoyaltyPage } from './pages/LoyaltyPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQsPage } from './pages/FAQsPage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { ShippingPage } from './pages/ShippingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const mantineTheme = {
  colors: {
    'royal-plum': ['#F5F1F7', '#E6D9ED', '#D4C1E3', '#C2A9D9', '#B091CF', '#9E79C5', '#8C61BB', '#7A49B1', '#6831A7', '#56199D'],
    'gold': ['#FEF7E6', '#FDEAB3', '#FCDD80', '#FBD04D', '#FAC31A', '#F4A11A', '#E08F17', '#CC7D14', '#B86B11', '#A4590E'],
  },
  primaryColor: 'royal-plum',
};

function App() {
  return (
    <MantineProvider theme={mantineTheme}>
    <Router basename="/kafuis_collections_v2/">
        <div className="min-h-screen bg-off-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/loyalty" element={<LoyaltyPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/size-guide" element={<SizeGuidePage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <Notifications />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;