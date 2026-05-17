import React from "react";
import { ArrowRight, BarChart3, TrendingUp, Users, Play, Coffee, Dumbbell, Smile } from "lucide-react";
// import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="absolute inset-0">
//         <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 clay-card opacity-30"></div>
//         <div className="floating-element absolute top-1/3 right-1/4 w-24 h-24 clay-card opacity-20" style={{animationDelay: '2s'}}></div>
//         <div className="floating-element absolute bottom-1/4 left-1/3 w-20 h-20 clay-card opacity-25" style={{animationDelay: '4s'}}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-6">
//               {/*<div className="flex items-center space-x-2 mb-4">
//               <div className="clay-card px-4 py-2">
//                   <span className="text-gradient font-semibold">Dashboard Reporting</span>
//                 </div>
//               </div>*/}
              
//               <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                 Transform Your
//                 <span className="text-gradient block">Business Data</span>
//                 Into Insights
//               </h1>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
//                 Powerful dashboard solutions designed specifically to help small businesses 
//                 make data-driven decisions with confidence.
//               </p>
//             </div>

//            {/*} <div className="flex flex-col sm:flex-row gap-4">
//               <button className="clay-button px-8 py-4 text-white font-semibold text-lg flex items-center justify-center space-x-2">
//                 <span>Start Free Trial</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
              
//               <button className="clay-card px-8 py-4 text-gray-700 font-semibold text-lg hover:text-purple-600 transition-colors">
//                 Watch Demo
//               </button>
//             </div>*/}

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-8">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gradient"> 3:1 </div>
//                 <div className="text-sm text-gray-600"> Average ROI </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gradient">64%</div>
//                 <div className="text-sm text-gray-600">Productivity Boost</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gradient">24/7</div>
//                 <div className="text-sm text-gray-600">Support Available</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Dashboard Preview */}
//           <div className="relative">
//             <div className="clay-card p-8">
//               <div className="space-y-6">
//                 {/* Dashboard Header */}
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-semibold text-gray-800">Business Overview</h3>
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                     <span className="text-sm text-gray-600">Live</span>
//                   </div>
//                 </div>

//                 {/* Metrics Cards */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="clay-card p-4">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm text-gray-600">Revenue</p>
//                         <p className="text-2xl font-bold text-gradient">$12.4K</p>
//                       </div>
//                       <TrendingUp className="w-8 h-8 text-green-500" />
//                     </div>
//                   </div>
                  
//                   <div className="clay-card p-4">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm text-gray-600">Customers</p>
//                         <p className="text-2xl font-bold text-gradient">847</p>
//                       </div>
//                       <Users className="w-8 h-8 text-blue-500" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Chart Area */}
//                 <div className="clay-card p-6">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <BarChart3 className="w-5 h-5 text-purple-600" />
//                     <span className="font-semibold">Monthly Growth</span>
//                   </div>
//                   <div className="h-32 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-end justify-center">
//                     <div className="flex items-end space-x-2 pb-4">
//                       <div className="w-4 h-12 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"></div>
//                       <div className="w-4 h-16 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"></div>
//                       <div className="w-4 h-20 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t"></div>
//                       <div className="w-4 h-24 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t"></div>
//                       <div className="w-4 h-18 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute -top-4 -right-4 w-16 h-16 clay-card floating-element"></div>
//             <div className="absolute -bottom-4 -left-4 w-12 h-12 clay-card floating-element" style={{animationDelay: '3s'}}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function HeroSection() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Background Elements — kept from original */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 clay-card opacity-30"></div>
          <div className="floating-element absolute top-1/3 right-1/4 w-24 h-24 clay-card opacity-20" style={{ animationDelay: "2s" }}></div>
          <div className="floating-element absolute bottom-1/4 left-1/3 w-20 h-20 clay-card opacity-25" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Copy ── */}
            <div className="space-y-8">
              <div className="space-y-6">

                {/* Industry tag pill */}
                <div className="inline-flex items-center space-x-2 clay-card px-4 py-2 w-fit">
                  <span className="text-gradient font-semibold text-sm">Dashboards for small business owners</span>
                </div>

                {/* NEW headline — simple, outcome-first */}
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Know your numbers.
                  <span className="text-gradient block">Grow your business.</span>
                </h1>

                {/* NEW subheading — proactively defuses "do I need to be technical?" */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  We connect to your existing systems — your POS, bookings, sales data — and turn
                  them into a clear weekly dashboard. No spreadsheets. No tech headaches. Just the
                  numbers that matter.
                </p>
              </div>

              {/* NEW CTAs — restored and reframed as low-commitment */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="clay-button px-8 py-4 text-white font-semibold text-lg flex items-center justify-center space-x-2">
                  <span>Book a free 30-min call</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="clay-card px-8 py-4 text-gray-700 font-semibold text-lg hover:text-purple-600 transition-colors flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>See a dashboard demo</span>
                </button>
              </div>

              {/* NEW social proof trust row — replaces fabricated stats */}
              <div className="flex items-center space-x-4 pt-2">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {["SC", "MR", "JT", "AL"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white"
                      style={{ background: ["#B5D4F4", "#9FE1CB", "#F4C0D1", "#FAC775"][i], color: ["#0C447C", "#085041", "#72243E", "#633806"][i] }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 text-sm tracking-wider">★★★★★</span>
                  <span className="text-sm text-gray-600">Trusted by Melbourne small businesses</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Dashboard preview — kept from original ── */}
            <div className="relative">
              <div className="clay-card p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">Business Overview</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>

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

              <div className="absolute -top-4 -right-4 w-16 h-16 clay-card floating-element"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 clay-card floating-element" style={{ animationDelay: "3s" }}></div>
            </div>

          </div>
        </div>
      </section>

      {/* ── NEW: TESTIMONIAL STRIP ── */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="clay-card p-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
            "Before Halo, I had no idea which days were worth staffing up for. Now I open my
            dashboard Monday morning and know exactly what last week looked like — and what to
            expect this week."
          </p>
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm border-2 border-white"
              style={{ background: "#B5D4F4", color: "#0C447C" }}
            >
              SC
            </div>
            <div>
              <p className="font-semibold text-gray-800">Sarah C.</p>
              {/* REPLACE with real client name & business when you have one */}
              <p className="text-sm text-gray-500">Café owner, Brunswick</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: HOW IT WORKS ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">How it works</p>
          <h2 className="text-4xl font-bold">
            Up and running in
            <span className="text-gradient"> days, not months</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Free discovery call",
              desc: "We learn your business, your goals, and what systems you already use. No obligation.",
            },
            {
              step: "02",
              title: "We build the connections",
              desc: "We handle all the technical setup — connecting your data sources. You don't touch a thing.",
            },
            {
              step: "03",
              title: "Your dashboard goes live",
              desc: "A custom Power BI dashboard built for your business. Updated automatically every week.",
            },
            {
              step: "04",
              title: "Insights every week",
              desc: "Open your dashboard and know exactly where your business stands. No tech knowledge needed.",
            },
          ].map(({ step, title, desc }, i) => (
            <div key={i} className="clay-card p-6 space-y-4 relative">
              <div className="text-4xl font-bold text-gradient opacity-40">{step}</div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-purple-300 text-2xl z-10">
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── NEW: BUILT FOR YOUR INDUSTRY ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">Built for your industry</p>
          <h2 className="text-4xl font-bold">
            We speak your
            <span className="text-gradient"> language</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
              name: "Gyms & Studios",
              result: "Track member retention, class fill rates and revenue per session — all in one view.",
              highlight: "Know which classes to cut and which to scale.",
            },
            {
              icon: <Coffee className="w-8 h-8 text-amber-500" />,
              name: "Cafés",
              result: "See your busiest hours, top-selling items and weekly revenue at a glance.",
              highlight: "Staff smarter. Order better. Waste less.",
            },
            {
              icon: <Smile className="w-8 h-8 text-green-500" />,
              name: "Dental Practices",
              result: "Monitor appointment trends, patient retention and monthly revenue in one place.",
              highlight: "Spend less time in spreadsheets. More time with patients.",
            },
          ].map(({ icon, name, result, highlight }, i) => (
            <div key={i} className="clay-card p-8 space-y-4">
              <div>{icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{name}</h3>
              <p className="text-gray-600 leading-relaxed">{result}</p>
              <p className="text-sm font-semibold text-purple-600">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

       {/* ── DASHBOARD EMBED — sits between industry cards and pricing ── */}
  <div className="mt-16">
    <div className="text-center mb-8">
      <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">See it live</p>
      <h2 className="text-3xl font-bold">
        This is what your
        <span className="text-gradient"> dashboard looks like</span>
      </h2>
      <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
        A real Power BI dashboard built by Halo. Click around — this is exactly what you'd receive.
      </p>
    </div>

    <div className="clay-card p-4 overflow-hidden">
      <iframe
        title="Halo Dashboard Demo"
        src="YOUR_POWER_BI_PUBLISH_TO_WEB_URL"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        className="rounded-xl w-full"
      />
    </div>

    <p className="text-center text-xs text-gray-400 mt-3">
      Sample data only — your dashboard will reflect your real business numbers.
    </p>
  </div>

      {/* ── NEW: PRICING ANCHOR STRIP ── */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <div className="clay-card p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            {/* REPLACE $299 with your actual starting price */}
            <p className="text-lg font-semibold text-gray-800">
              Setup + monthly dashboard from <span className="text-gradient">$299/month</span>
            </p>
            <p className="text-sm text-gray-500">No lock-in contracts · Cancel anytime · Melbourne-based support</p>
          </div>
          <button className="clay-button px-8 py-4 text-white font-semibold flex items-center space-x-2 whitespace-nowrap">
            <span>Book a free call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}