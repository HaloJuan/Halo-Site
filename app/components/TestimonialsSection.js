import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, FitCore Gym",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: "DashPro completely transformed how we understand our members. We increased retention by 40% in just 6 months using their insights.",
      rating: 5,
      business: "Boutique Gym"
    },
    {
      name: "Michael Chen",
      role: "Manager, The Daily Grind",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "The inventory tracking and sales analytics helped us reduce waste by 30% and optimize our menu offerings. Absolutely game-changing!",
      rating: 5,
      business: "Coffee Shop"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Practice Owner, Smile Dental",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "Patient scheduling insights and treatment analytics have improved our practice efficiency dramatically. Our patients are happier than ever.",
      rating: 5,
      business: "Dental Practice"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="clay-card inline-block px-6 py-3 mb-6">
            <span className="text-gradient font-semibold">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What Our Clients
            <span className="text-gradient block">Are Saying</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how businesses like yours are 
            thriving with DashPro's dashboard solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="clay-card p-8 relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-6">
                <Quote className="w-8 h-8 text-purple-200" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full shadow-inner"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="clay-card inline-block px-2 py-1 mt-1">
                    <span className="text-xs text-gradient font-medium">{testimonial.business}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="clay-card p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-gray-600">Happy Businesses</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">40%</div>
                <p className="text-gray-600">Average Revenue Increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <p className="text-gray-600">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}