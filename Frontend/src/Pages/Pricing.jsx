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
    buttonClass: "bg-primary-button text-[var(--primary-button-text-color)] hover:bg-primary-button-hover",
    borderClass: "border border-primary",
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
    buttonClass: "bg-primary-button text-[var(--primary-button-text-color)] hover:bg-primary-button-hover",
    borderClass: "border-2 border-primary scale-105 shadow-lg",
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
    buttonClass: "bg-primary text-primary hover:bg-primary-button-hover",
    borderClass: "border border-primary",
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
    <div className="min-h-screen bg-primary text-primary font-poppins flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
        Pricing Plans
      </h1>
      <p className="text-lg md:text-xl text-secondary mb-10 text-center max-w-2xl">
        Choose the plan that fits your needs. Simple, transparent pricing for students, organizers, and institutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-16">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 ${plan.borderClass} transition-transform duration-300`}
          >
            {plan.icon}
            <h2 className="text-2xl font-semibold mb-2 text-primary">{plan.name}</h2>
            <p className="mb-4 text-secondary">{plan.description}</p>
            <span className="text-3xl font-bold mb-4">{plan.price}</span>
            <ul className="mb-4 text-left list-disc list-inside text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className={`px-6 py-2 rounded-lg font-semibold mt-auto ${plan.buttonClass}`}>{plan.button}</button>
          </div>
        ))}
      </div>
      <div className="w-full max-w-4xl mb-16">
        <h3 className="text-2xl font-bold mb-4 text-secondary text-center">Compare Plans</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow border border-primary">
            <thead>
              <tr className="bg-primary text-primary">
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4">Free</th>
                <th className="py-3 px-4">Pro</th>
                <th className="py-3 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="py-2 px-4">Browse & register for events</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
              </tr>
              <tr className="bg-primary">
                <td className="py-2 px-4">Host & manage events</td>
                <td className="text-center">—</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Advanced analytics</td>
                <td className="text-center">—</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
              </tr>
              <tr className="bg-primary">
                <td className="py-2 px-4">Custom branding</td>
                <td className="text-center">—</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Custom integrations</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-center">✔️</td>
              </tr>
              <tr className="bg-primary">
                <td className="py-2 px-4">Dedicated support</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-center">✔️</td>
              </tr>
              <tr>
                <td className="py-2 px-4">SLA & compliance</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-center">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full max-w-3xl mb-16">
        <h3 className="text-2xl font-bold mb-4 text-secondary text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 border border-[#E0E7EA]">
              <h4 className="font-semibold text-lg mb-2 text-primary">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        Need a custom solution or have more questions? <span className="text-secondary font-semibold">Contact our team!</span>
      </div>
    </div>
    <Footer />
  </>
);

export default Pricing; 