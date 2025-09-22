import React from "react";
import { Dumbbell, Coffee, Stethoscope, BarChart, Users, Calendar } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Dumbbell,
      title: "Gym Performance Analytics",
      description: "Understand your members and operations like never before. From class attendance to revenue streams, our dashboards give you the insights to make smarter, data-driven decisions.",
      features: ["Member retention tracking", "Class trends", "Revenue optimisation", "Track marketing campaigns & leads"],
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Coffee,
      title: "Cafe Insights",
      description: "See your cafe from every angle. Monitor sales, inventory levels and customer preferences all in one place. ",
      features: ["Sales trend analysis", "Inventory management", "Customer behaviour insights", "Peak time optimisation"],
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Stethoscope,
      title: "Dental Practice Reports",
      description: "Comprehensive dashboards that give you full visibility of your practice. Track patient analytics, optimise appointment scheduling, treatment success tracking for better patient care and Financial forecasting.",
      features: ["Patient analytics", "Appointment scheduling insights", "Treatment success tracking", "Revenue forecasting"],
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="clay-card inline-block px-6 py-3 mb-6">
            <span className="text-gradient font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Tailored Solutions for
            <span className="text-gradient block">Your Business </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Think of us as personal trainers for your business data. We understand that every business is unique which is why our specialised dashboard solutions are tailored to your specific
            challenges. And like a personal trainer - we're your partners in growth. Together, we'll equip you with the right tools helping you build the confidence and skill to navigate your data,
            and uncover insights empowering you to take full control of your data and make data-driven decisions with ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 clay-card flex items-center justify-center bg-gradient-to-r ${service.gradient}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/*<button className="clay-button px-8 py-4 text-white font-semibold">
                  Learn More
                </button>*/}
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="clay-card p-8">
                  <div className="space-y-6">
                    {/* Mock Dashboard */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{service.title.split(' ')[0]} Dashboard</h4>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="clay-card p-4">
                        <BarChart className="w-6 h-6 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Analytics</p>
                      </div>
                      <div className="clay-card p-4">
                        <Users className="w-6 h-6 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Customers</p>
                      </div>
                    </div>
                    
                    <div className="clay-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">This Month</span>
                      </div>
                      <div className={`h-20 bg-gradient-to-r ${service.gradient} rounded-xl opacity-20`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 clay-card floating-element"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 clay-card floating-element" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}