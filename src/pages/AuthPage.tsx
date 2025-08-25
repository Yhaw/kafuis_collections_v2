import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useAuthStore } from '../stores/useAuthStore';
import { notifications } from '@mantine/notifications';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, register } = useAuthStore();
  
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(
    searchParams.get('mode') === 'signup' ? 'signup' : 'signin'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'signin') {
        const success = await login(formData.email, formData.password);
        if (success) {
          notifications.show({
            title: 'Welcome back!',
            message: 'You have successfully signed in.',
            color: 'green',
          });
          navigate(searchParams.get('redirect') || '/');
        } else {
          notifications.show({
            title: 'Sign In Failed',
            message: 'Invalid email or password.',
            color: 'red',
          });
        }
      } else if (mode === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          notifications.show({
            title: 'Password Mismatch',
            message: 'Passwords do not match.',
            color: 'red',
          });
          return;
        }

        const success = await register({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
        });

        if (success) {
          notifications.show({
            title: 'Account Created!',
            message: 'Welcome to Kafui\'s Collections! You\'ve been signed in.',
            color: 'green',
          });
          navigate(searchParams.get('redirect') || '/');
        }
      } else if (mode === 'forgot') {
        // Mock forgot password
        notifications.show({
          title: 'Reset Link Sent',
          message: 'Check your email for password reset instructions.',
          color: 'blue',
        });
        setMode('signin');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-off-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <img
            src="/src/assets/brand/LOGO-3@3x-8.png"
            alt="Kafui's Collections"
            className="h-12 w-auto mx-auto mb-4"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTUwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI3NSIgeT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzNGMUY0RiI+S2FmdWkncyBDb2xsZWN0aW9uczwvdGV4dD4KPC9zdmc+';
            }}
          />
          <h2 className="text-3xl font-bold text-deep-eggplant">
            {mode === 'signin' && 'Welcome Back'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>
          <p className="mt-2 text-gray-600">
            {mode === 'signin' && 'Sign in to access your account and loyalty rewards'}
            {mode === 'signup' && 'Join us and start earning loyalty points on every purchase'}
            {mode === 'forgot' && 'Enter your email to receive reset instructions'}
          </p>
        </div>

        <OutlineCard>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-plum"
                        required
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-plum"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+233 24 123 4567"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-plum"
                      required
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-plum"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            )}

            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-plum"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-royal-plum text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors disabled:bg-opacity-50"
            >
              {isLoading ? 'Loading...' : (
                <>
                  {mode === 'signin' && 'Sign In'}
                  {mode === 'signup' && 'Create Account'}
                  {mode === 'forgot' && 'Send Reset Link'}
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            {mode === 'signin' && (
              <>
                <button
                  onClick={() => setMode('forgot')}
                  className="text-royal-plum hover:text-opacity-80 text-sm font-medium"
                >
                  Forgot your password?
                </button>
                <p className="mt-4 text-gray-600 text-sm">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-royal-plum hover:text-opacity-80 font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </>
            )}

            {mode === 'signup' && (
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-royal-plum hover:text-opacity-80 font-medium"
                >
                  Sign in
                </button>
              </p>
            )}

            {mode === 'forgot' && (
              <p className="text-gray-600 text-sm">
                Remember your password?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-royal-plum hover:text-opacity-80 font-medium"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-off-white text-gray-500">or</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 w-full border border-royal-plum text-royal-plum py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
            >
              Continue as Guest
            </button>
          </div>
        </OutlineCard>
      </div>
    </div>
  );
};