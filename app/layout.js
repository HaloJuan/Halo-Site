import React from "react";
// import { useLocation } from "react-router-dom";
import './globals.css'


export default function Layout({ children, currentPageName }) {
  // const location = useLocation();

  return (
    <html><body>
    <header></header>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <style>
        {`
          :root {
            --clay-shadow: 20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff;
            --clay-shadow-small: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;
            --clay-inset: inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff;
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --gradient-tertiary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          }
          
          .clay-card {
            background: linear-gradient(145deg, #f0f4f8, #d6e7f0);
            box-shadow: var(--clay-shadow);
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .clay-button {
            background: var(--gradient-primary);
            box-shadow: var(--clay-shadow-small);
            border-radius: 25px;
            transition: all 0.3s ease;
          }
          
          .clay-button:hover {
            transform: translateY(-2px);
            box-shadow: 25px 25px 75px #d1d9e6, -25px -25px 75px #ffffff;
          }
          
          .clay-input {
            background: #f0f4f8;
            box-shadow: var(--clay-inset);
            border-radius: 20px;
            border: none;
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          
          .text-gradient {
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 clay-card flex items-center justify-center">
                <span className="text-gradient font-bold text-xl">D</span>
              </div> */}
              <span className="text-2xl font-bold text-gradient">halo</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Features</a>
              {/*<a href="#testimonials" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Reviews</a>*/}
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</a>
            </div>

            {/*<button className="clay-button px-6 py-3 text-white font-semibold">
              Get Started
            </button>*/}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/*<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>*/}
                <span className="text-2xl font-bold">halo</span>
              </div>
              <p className="text-gray-300">Empowering small businesses with intelligent dashboard reporting solutions.</p>
            </div>
            
            {/*<div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Gym Analytics</li>
                <li>Cafe Insights</li>
                <li>Dental Practice Reports</li>
                <li>Custom Dashboards</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>*/}
            
            <div>
              <h4 className="font-semibold mb-4">Get in touch</h4>
              <ul className="space-y-2 text-gray-300">
                <li>paolo@halometrics.co</li>
                <li>+61 481 388 141</li>
                <li>@_halometrics</li>
                <li>Melbourne, AU</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 halometrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div></body></html>
  );
}