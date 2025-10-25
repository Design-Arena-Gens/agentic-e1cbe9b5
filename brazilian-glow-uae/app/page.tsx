'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">BG</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                Brazilian Glow
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setView('desktop')}
                className={`px-4 py-2 rounded-lg transition ${
                  view === 'desktop'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-amber-900 hover:bg-amber-100'
                }`}
              >
                Desktop View
              </button>
              <button
                onClick={() => setView('mobile')}
                className={`px-4 py-2 rounded-lg transition ${
                  view === 'mobile'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-amber-900 hover:bg-amber-100'
                }`}
              >
                Mobile View
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pitch Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-rose-500 to-amber-600 bg-clip-text text-transparent">
              Brazilian Glow UAE Launch
            </h1>
            <p className="text-xl text-amber-900/80 mb-2">Beauté & Éclat Au Naturel</p>
            <p className="text-lg text-amber-800/60">
              Premium Tropical Beauty for Dubai&apos;s Luxury Market
            </p>
          </div>

          {/* Design Preview */}
          <div className="flex justify-center mb-12">
            <div
              className={`transition-all duration-500 ${
                view === 'mobile' ? 'w-full max-w-md' : 'w-full'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-300">
                {/* Homepage Design */}
                <div className={view === 'mobile' ? 'max-w-md mx-auto' : ''}>
                  {/* Hero Section */}
                  <div className="relative h-[600px] bg-gradient-to-br from-amber-400 via-rose-400 to-amber-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
                    </div>

                    {/* Hero Navigation */}
                    <div className="relative z-10 flex justify-between items-center p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold bg-gradient-to-br from-amber-500 to-rose-500 bg-clip-text text-transparent">
                            BG
                          </span>
                        </div>
                        <span className="text-white font-bold text-2xl drop-shadow-lg">
                          Brazilian Glow
                        </span>
                      </div>
                      <div className="flex space-x-6 text-white font-medium">
                        <a href="#" className="hover:text-amber-200 transition">Shop</a>
                        <a href="#" className="hover:text-amber-200 transition">About</a>
                        <a href="#" className="hover:text-amber-200 transition">Contact</a>
                      </div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-80px)] text-center px-6">
                      <div className="mb-8">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                          ✨ Now in UAE ✨
                        </span>
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                          Tropical Luxury
                          <br />
                          <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                            Brazilian Beauty
                          </span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                          Experience the golden glow of Brazilian nature, crafted for Dubai&apos;s elegance
                        </p>
                        <button className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transition shadow-2xl transform hover:scale-105">
                          Discover Collection
                        </button>
                      </div>

                      {/* Tropical Elements */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent flex items-end justify-center space-x-8 pb-4">
                        <span className="text-6xl">🌴</span>
                        <span className="text-6xl">🥥</span>
                        <span className="text-6xl">🌺</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Products Section */}
                  <div className="bg-gradient-to-br from-white via-amber-50 to-rose-50 py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                          Signature Collection
                        </h2>
                        <p className="text-amber-900/70">
                          Premium formulas inspired by Brazilian tropical treasures
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Product Card 1 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition group">
                          <div className="bg-gradient-to-br from-amber-200 to-rose-200 rounded-xl h-64 mb-4 flex items-center justify-center relative overflow-hidden">
                            <span className="text-7xl group-hover:scale-110 transition">🥥</span>
                            <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              NEW
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-amber-900 mb-2">
                            Golden Coconut Elixir
                          </h3>
                          <p className="text-amber-800/70 mb-4">
                            Hydrating facial serum with Brazilian coconut oil
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">AED 299</span>
                            <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition">
                              Add to Cart
                            </button>
                          </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition group">
                          <div className="bg-gradient-to-br from-rose-200 to-amber-200 rounded-xl h-64 mb-4 flex items-center justify-center relative overflow-hidden">
                            <span className="text-7xl group-hover:scale-110 transition">🌺</span>
                            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              BEST SELLER
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-amber-900 mb-2">
                            Tropical Glow Cream
                          </h3>
                          <p className="text-amber-800/70 mb-4">
                            Luminous moisturizer with açaí & cupuaçu butter
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">AED 349</span>
                            <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition">
                              Add to Cart
                            </button>
                          </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition group">
                          <div className="bg-gradient-to-br from-amber-200 to-yellow-200 rounded-xl h-64 mb-4 flex items-center justify-center relative overflow-hidden">
                            <span className="text-7xl group-hover:scale-110 transition">☀️</span>
                          </div>
                          <h3 className="text-xl font-bold text-amber-900 mb-2">
                            Sun-Kissed Body Oil
                          </h3>
                          <p className="text-amber-800/70 mb-4">
                            Radiant shimmer oil with Brazilian nut extracts
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">AED 279</span>
                            <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="bg-gradient-to-br from-amber-600 via-rose-500 to-amber-600 py-16 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-10 left-10 text-9xl">🌴</div>
                        <div className="absolute bottom-10 right-10 text-9xl">🌺</div>
                      </div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                      <h2 className="text-4xl font-bold text-white mb-6">
                        From Rio to Dubai
                      </h2>
                      <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Brazilian Glow brings the essence of Brazil&apos;s tropical paradise to the UAE.
                        Our premium beauty formulas harness the power of Amazonian botanicals,
                        Brazilian superfruits, and golden coconut oils to deliver radiant,
                        luminous skin that embodies luxury and natural beauty.
                      </p>
                      <div className="grid grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                          <div className="text-5xl mb-3">🌿</div>
                          <div className="text-2xl font-bold text-white mb-2">100%</div>
                          <div className="text-white/80">Natural Ingredients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-5xl mb-3">✨</div>
                          <div className="text-2xl font-bold text-white mb-2">Premium</div>
                          <div className="text-white/80">Luxury Formulas</div>
                        </div>
                        <div className="text-center">
                          <div className="text-5xl mb-3">🇦🇪</div>
                          <div className="text-2xl font-bold text-white mb-2">Dubai</div>
                          <div className="text-white/80">Exclusive Launch</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Section */}
                  <div className="bg-white py-16 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                        Join the Glow Community
                      </h2>
                      <p className="text-amber-900/70 mb-8">
                        Subscribe for exclusive offers and beauty tips from Brazil
                      </p>
                      <div className="flex gap-4 max-w-md mx-auto">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="flex-1 px-6 py-3 rounded-full border-2 border-amber-300 focus:border-amber-500 focus:outline-none"
                        />
                        <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <footer className="bg-gradient-to-br from-amber-900 to-rose-900 text-white py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">BG</span>
                            </div>
                            <span className="font-bold text-xl">Brazilian Glow</span>
                          </div>
                          <p className="text-white/70 text-sm">
                            Tropical luxury beauty from Brazil to UAE
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4">Shop</h4>
                          <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="#" className="hover:text-white transition">Face Care</a></li>
                            <li><a href="#" className="hover:text-white transition">Body Care</a></li>
                            <li><a href="#" className="hover:text-white transition">Hair Care</a></li>
                            <li><a href="#" className="hover:text-white transition">Gift Sets</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4">About</h4>
                          <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition">Ingredients</a></li>
                            <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4">Connect</h4>
                          <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                              📷
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                              🌐
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                              💬
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
                        <p>© 2025 Brazilian Glow UAE. All rights reserved. | Beauté & Éclat Au Naturel</p>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>

          {/* Pitch Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Brand Identity */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200">
              <h2 className="text-2xl font-bold mb-6 text-amber-900">🎨 Brand Identity</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Color Palette</h3>
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-rose-400 to-rose-600 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg"></div>
                  </div>
                  <p className="text-sm text-amber-800/70 mt-2">
                    Golden amber, tropical rose, sun-kissed yellow
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Typography</h3>
                  <p className="text-amber-800/70">Bold, elegant, modern sans-serif with feminine curves</p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Visual Elements</h3>
                  <p className="text-4xl mb-2">🌴 🥥 🌺 ☀️ ✨</p>
                  <p className="text-amber-800/70">Tropical botanicals, golden accents, natural elegance</p>
                </div>
              </div>
            </div>

            {/* Market Positioning */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-rose-200">
              <h2 className="text-2xl font-bold mb-6 text-rose-900">🎯 Market Positioning</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-rose-800 mb-2">Target Audience</h3>
                  <p className="text-rose-800/70">
                    Luxury beauty consumers in Dubai, ages 25-45, seeking premium natural products
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-rose-800 mb-2">Price Range</h3>
                  <p className="text-rose-800/70">AED 279 - 399 (Premium segment)</p>
                </div>
                <div>
                  <h3 className="font-bold text-rose-800 mb-2">Key Differentiators</h3>
                  <ul className="list-disc list-inside text-rose-800/70 space-y-1">
                    <li>Authentic Brazilian tropical ingredients</li>
                    <li>Luxury meets natural beauty</li>
                    <li>Exclusive UAE launch</li>
                    <li>Golden glow aesthetic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-300">
            <h2 className="text-2xl font-bold mb-6 text-amber-900">📦 Complete Package Includes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🖥️</div>
                <h3 className="font-bold text-amber-800 mb-2">Desktop Design</h3>
                <p className="text-sm text-amber-800/70">
                  Full-width responsive layout optimized for luxury presentation
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-amber-800 mb-2">Mobile Design</h3>
                <p className="text-sm text-amber-800/70">
                  Touch-optimized mobile experience with elegant scaling
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-bold text-amber-800 mb-2">Brand Assets</h3>
                <p className="text-sm text-amber-800/70">
                  Logo, color palette, tropical aesthetic elements
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-amber-800 mb-2">Product Section</h3>
                <p className="text-sm text-amber-800/70">
                  Interactive product cards with hover effects
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="font-bold text-amber-800 mb-2">About Section</h3>
                <p className="text-sm text-amber-800/70">
                  Brand story connecting Brazil to Dubai luxury
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎬</div>
                <h3 className="font-bold text-amber-800 mb-2">Motion Ready</h3>
                <p className="text-sm text-amber-800/70">
                  Animations and transitions for premium feel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
