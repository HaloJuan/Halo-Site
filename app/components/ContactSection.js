"use client"

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="clay-card inline-block px-6 py-3 mb-6">
            <span className="text-gradient font-semibold">Get Started</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Transform
            <span className="text-gradient block">Your Business?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our dashboard solutions can help your business grow. 
            Get a personalized demo and see the difference data-driven insights can make.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16 items-start">
          {/* Contact Form */}
          {/*<div className="clay-card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full clay-input px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full clay-input px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full clay-input px-6 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select your business type</option>
                    <option value="gym">Boutique Gym</option>
                    <option value="cafe">Cafe/Restaurant</option>
                    <option value="dental">Dental Practice</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full clay-input px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tell us about your business and how we can help..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full clay-button py-4 text-white font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>*/}

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed">
                We're here to help you make the most of your business data. 
                Reach out to us and let's start building your custom dashboard solution today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="clay-card p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">paolo@halometrics.co</p>
                </div>
              </div>

              <div className="clay-card p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+61 481 388 141</p>
                </div>
              </div>

              <div className="clay-card p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Melbourne, AU</p>
                </div>
              </div>
            </div>

            {/* Business Hours 
            <div className="clay-card p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}