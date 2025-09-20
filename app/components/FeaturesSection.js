import React from "react";
import { Zap, Shield, Smartphone, Cloud, RefreshCw, HeadphonesIcon } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time data processing and instant report generation for immediate insights.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and security protocols to protect your business data.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access your dashboards anywhere, anytime with our responsive mobile design.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamlessly connect with your existing tools and automatically sync your data.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: RefreshCw,
      title: "Auto Updates",
      description: "Always stay current with automatic updates and new feature releases.",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock expert support to help you maximize your dashboard potential.",
      gradient: "from-red-400 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="clay-card inline-block px-6 py-3 mb-6">
            <span className="text-gradient font-semibold">Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Everything You Need to
            <span className="text-gradient block">Succeed</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive feature set is designed to give you complete control 
            and insight into your business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="clay-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 clay-card flex items-center justify-center bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Hover Effect Line */}
              <div className={`h-1 w-0 bg-gradient-to-r ${feature.gradient} mt-6 group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="clay-card inline-block p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Join hundreds of successful businesses already using DashPro to make smarter decisions.
            </p>
            <button className="clay-button px-8 py-4 text-white font-semibold text-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}