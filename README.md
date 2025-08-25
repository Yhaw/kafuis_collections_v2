# Kafui's Collections - E-commerce Platform

A modern, mobile-first React e-commerce platform for Ghana's premier thrift fashion destination. Built with React, TypeScript, Tailwind CSS, and Mantine UI.

## 🌟 Features

### Core Functionality
- **Product Catalog** - Browse 20+ curated thrift fashion items across categories
- **Shopping Cart** - Add, edit, and manage items with persistent storage
- **Checkout Process** - Guest and authenticated checkout with Ghana-specific address forms
- **User Authentication** - Sign up, sign in, and account management
- **Loyalty Program** - Earn and redeem points with every purchase
- **Order Management** - Track orders and view purchase history

### Ghana-Specific Features
- **Local Payment Integration** - Paystack integration for cards, bank transfer, and MoMo
- **Ghana Regions Support** - All 16 regions with appropriate delivery fees
- **Local Currency** - Prices in Ghana Cedis (₵) with optional USD toggle
- **Cultural Elements** - Kente prints, traditional wear, and local fashion preferences

### Technical Features
- **Mobile-First Design** - Responsive across all devices
- **Offline-First** - Works with localStorage for cart and user data
- **Performance Optimized** - Fast loading with skeleton states
- **Accessibility** - Keyboard navigation and screen reader support
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kafuis-collections
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here
   ```

4. **Add brand assets**
   Place your brand assets in `/src/assets/brand/`:
   - `HORIZONTAL-BANNER-1@3x-8.png` - Hero background image
   - `HORIZONTAL-BANNER-2@3x-8.png` - Alternative banner
   - `LOGO-3@3x-8.png` - Main logo for navbar
   - `LOGO-7@3x-8.png` - Footer logo (white version)
   - `LOGO-12@3x-8.png` - Alternative logo

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'royal-plum': '#3F1F4F',    // Primary brand color
  'gold': '#F4A11A',          // Accent color
  'off-white': '#F9F7F3',     // Background
  'deep-eggplant': '#2A0F3A', // Dark text
}
```

### Content & Copy
- **Product Data**: Edit `/src/data/mockProducts.ts`
- **Ghana Regions**: Modify `/src/data/ghanaRegions.ts`
- **Site Content**: Update individual page components in `/src/pages/`

### Styling
- **Global Styles**: `/src/index.css`
- **Component Styles**: Tailwind classes in component files
- **Mantine Theme**: `/src/App.tsx` - MantineProvider theme config

## 📱 Key Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Hero, categories, featured products |
| `/catalog` | CatalogPage | Product listing with filters |
| `/product/:id` | ProductDetailPage | Individual product details |
| `/cart` | CartPage | Shopping cart management |
| `/checkout` | CheckoutPage | Checkout process |
| `/auth` | AuthPage | Sign in/up/forgot password |
| `/account` | AccountPage | User profile management |
| `/orders` | OrdersPage | Order history |
| `/loyalty` | LoyaltyPage | Loyalty points wallet |
| `/about` | AboutPage | Company information |
| `/contact` | ContactPage | Contact form |
| `/faqs` | FAQsPage | Frequently asked questions |
| `/size-guide` | SizeGuidePage | Sizing charts |
| `/shipping` | ShippingPage | Shipping & returns info |
| `/privacy` | PrivacyPage | Privacy policy |
| `/terms` | TermsPage | Terms of service |

## 🛍️ E-commerce Features

### Shopping Cart
- Persistent storage with Zustand
- Add/remove/update quantities
- Size and color variants
- Promo code support
- Shipping calculation

### Checkout Process
- Guest checkout option
- Ghana-specific address forms
- Loyalty points redemption
- Paystack payment integration
- Order confirmation

### Loyalty Program
- Earn 1 point per ₵1 spent (rounded to nearest 100)
- Redeem 100 points = ₵1 discount
- Tier system (Bronze, Silver, Gold, Platinum)
- Transaction history
- Points never expire

## 🔧 State Management

### Zustand Stores
- **useCartStore** - Shopping cart state
- **useAuthStore** - User authentication
- **useLoyaltyStore** - Loyalty points and transactions

### Local Storage
All stores persist to localStorage:
- `kafuis-cart-storage` - Cart items
- `kafuis-auth-storage` - User data
- `kafuis-loyalty-storage` - Loyalty transactions

## 🎯 Payment Integration

### Paystack Setup
1. Get your Paystack public key from [Paystack Dashboard](https://dashboard.paystack.com)
2. Add to `.env` file as `VITE_PAYSTACK_PUBLIC_KEY`
3. The app includes a mock payment flow for testing

### Payment Features
- Card payments
- Bank transfers
- Mobile money (MoMo)
- Test mode by default
- Automatic loyalty points award
- Order confirmation

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in dashboard

### Environment Variables for Production
```env
VITE_PAYSTACK_PUBLIC_KEY=pk_live_your_live_key_here
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Browse products and categories
- [ ] Add items to cart with different sizes/colors
- [ ] Complete guest checkout
- [ ] Create account and sign in
- [ ] Test loyalty points earning/redemption
- [ ] Try different payment methods
- [ ] Test mobile responsiveness
- [ ] Verify all links and navigation

### Test Data
- **Promo Codes**: `WELCOME10` (10% off), `SAVE20` (₵20 off)
- **Test Cards**: Use Paystack test cards
- **Sample User**: Any email/password combination works

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support or questions:
- Email: hello@kafuiscollections.com
- Phone: +233 24 123 4567
- Create an issue in this repository

## 🙏 Acknowledgments

- Built with React, TypeScript, and Tailwind CSS
- UI components from Mantine
- Icons from Lucide React
- Images from Pexels
- Payment processing by Paystack
- Hosted on [your hosting platform]

---

**Made with ❤️ in Ghana for the global fashion community**