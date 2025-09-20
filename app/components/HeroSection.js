import React from "react";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 clay-card opacity-30"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-24 h-24 clay-card opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-20 h-20 clay-card opacity-25" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="clay-card px-4 py-2">
                  <span className="text-gradient font-semibold">Dashboard Reporting</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="text-gradient block">Business Data</span>
                Into Insights
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Powerful dashboard solutions designed specifically for boutique gyms, 
                cafes, and dental practices. Make data-driven decisions with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="clay-button px-8 py-4 text-white font-semibold text-lg flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="clay-card px-8 py-4 text-gray-700 font-semibold text-lg hover:text-purple-600 transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="clay-card p-8">
              <div className="space-y-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">Business Overview</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="clay-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Revenue</p>
                        <p className="text-2xl font-bold text-gradient">$12.4K</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="clay-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Customers</p>
                        <p className="text-2xl font-bold text-gradient">847</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="clay-card p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold">Monthly Growth</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-end justify-center">
                    <div className="flex items-end space-x-2 pb-4">
                      <div className="w-4 h-12 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"></div>
                      <div className="w-4 h-16 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"></div>
                      <div className="w-4 h-20 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t"></div>
                      <div className="w-4 h-24 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t"></div>
                      <div className="w-4 h-18 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 clay-card floating-element"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 clay-card floating-element" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}