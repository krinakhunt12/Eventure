import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For students & casual users",
    features: [
      "Browse & register for events",
      "Bookmark events",
      "Basic dashboard",
      "Email notifications",
    ],
    button: "Get Started",
    buttonClass: "bg-primary-button text-white hover:bg-[#23424A]",
    borderClass: "border border-white/40",
    icon: (
      <svg className="w-8 h-8 text-primary-button mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    name: "Pro",
    price: "$9/mo",
    description: "For organizers & power users",
    features: [
      "All Free features",
      "Host & manage events",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
    ],
    button: "Start Pro",
    buttonClass: "bg-primary-button text-white hover:bg-[#23424A]",
    borderClass: "border-2 border-primary-button scale-105 shadow-lg",
    icon: (
      <svg className="w-8 h-8 text-secondary mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutions & large teams",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated support",
      "SLA & compliance",
      "Onboarding & training",
    ],
    button: "Contact Us",
    buttonClass: "bg-primary text-white hover:bg-[#23424A]",
    borderClass: "border border-white/40",
    icon: (
      <svg className="w-8 h-8 text-primary mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
  },
];

const faqs = [
  {
    q: "Can I upgrade or downgrade my plan anytime?",
    a: "Yes, you can change your plan at any time from your dashboard settings.",
  },
  {
    q: "Is there a free trial for Pro or Enterprise?",
    a: "We offer a 14-day free trial for the Pro plan. Contact us for Enterprise trials.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit cards, UPI, and bank transfers for Enterprise.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use industry-standard security and encryption for all plans.",
  },
];

const Pricing = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-primary text-primary font-['Satoshi'] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 py-16 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-['ClashDisplay'] tracking-tight">
          PRICING <span className="text-secondary">PLANS</span>
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-primary-button mx-auto mb-4 sm:mb-6"></div>
        <p className="text-lg md:text-xl text-secondary mb-10 text-center max-w-2xl">
          Choose the plan that fits your needs. Simple, transparent pricing for students, organizers, and institutions.
        </p>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-16">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`bg-white/30 backdrop-blur-md rounded-2xl flex flex-col items-center p-8 ${plan.borderClass} transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="p-3 rounded-xl bg-white/50 mb-4">
                {plan.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-primary font-['ClashDisplay']">{plan.name}</h2>
              <p className="mb-4 text-secondary/80 text-center">{plan.description}</p>
              <span className="text-3xl font-bold mb-4 font-['ClashDisplay']">{plan.price}</span>
              <ul className="mb-4 text-left space-y-2 text-secondary/80 w-full">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`px-6 py-3 rounded-xl font-semibold mt-auto ${plan.buttonClass} shadow-sm hover:shadow-md transition-all font-['Satoshi']`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="w-full max-w-4xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center font-['ClashDisplay']">
            COMPARE <span className="text-secondary">PLANS</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/30 backdrop-blur-md rounded-xl border border-white/40">
              <thead>
                <tr className="bg-white/50">
                  <th className="py-4 px-6 text-left font-semibold text-primary font-['Satoshi']">Feature</th>
                  <th className="py-4 px-6 font-semibold text-primary font-['Satoshi']">Free</th>
                  <th className="py-4 px-6 font-semibold text-primary font-['Satoshi']">Pro</th>
                  <th className="py-4 px-6 font-semibold text-primary font-['Satoshi']">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/40">
                <tr>
                  <td className="py-3 px-6 text-secondary/80">Browse & register for events</td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white/20">
                  <td className="py-3 px-6 text-secondary/80">Host & manage events</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-secondary/80">Advanced analytics</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white/20">
                  <td className="py-3 px-6 text-secondary/80">Custom branding</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-secondary/80">Custom integrations</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white/20">
                  <td className="py-3 px-6 text-secondary/80">Dedicated support</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center text-secondary/60">—</td>
                  <td className="text-center">
                    <svg className="w-5 h-5 text-primary-button mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="w-full max-w-3xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center font-['ClashDisplay']">
            FREQUENTLY <span className="text-secondary">ASKED QUESTIONS</span>
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-md rounded-xl border border-white/40 p-6 hover:shadow-lg transition-all">
                <h4 className="font-semibold text-lg mb-2 text-primary font-['ClashDisplay']">{faq.q}</h4>
                <p className="text-secondary/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center text-secondary/80 mt-8 font-['Satoshi']">
          Need a custom solution or have more questions?{' '}
          <span className="text-secondary font-semibold hover:underline cursor-pointer">Contact our team!</span>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Pricing;