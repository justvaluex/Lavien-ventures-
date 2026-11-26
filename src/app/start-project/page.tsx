"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";



const projectTypes = [
  "Website",
  "Shopify",
  "E-Commerce",
  "AI Automation",
  "Business Automation",
  "Mobile App",
  "Branding",
  "Digital Marketing",
  "Advertising",
  "Consulting",
  "Other",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Not sure",
];

const timelines = [
  "Immediate (within 2 weeks)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term (6+ months)",
  "Flexible",
];

export default function StartProject() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    problem: "",
    outcome: "",
    technology: "",
    additional: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/email service
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24-48 hours.");
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Start Your <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us about your vision. We&apos;ll help you bring it to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
              />
              <input
                type="url"
                placeholder="Website"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent-primary focus:outline-none transition-colors appearance-none"
                required
              >
                <option value="">Select Project Type *</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent-primary focus:outline-none transition-colors appearance-none"
                required
              >
                <option value="">Select Budget Range *</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent-primary focus:outline-none transition-colors appearance-none"
                required
              >
                <option value="">Select Timeline *</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            <textarea
              rows={4}
              placeholder="Business Description *"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors resize-none"
              required
            ></textarea>

            <textarea
              rows={3}
              placeholder="Current Challenge"
              value={formData.problem}
              onChange={(e) => setFormData({...formData, problem: e.target.value})}
              className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors resize-none"
            ></textarea>

            <textarea
              rows={3}
              placeholder="Desired Outcome"
              value={formData.outcome}
              onChange={(e) => setFormData({...formData, outcome: e.target.value})}
              className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors resize-none"
            ></textarea>

            <textarea
              rows={2}
              placeholder="Existing Technology"
              value={formData.technology}
              onChange={(e) => setFormData({...formData, technology: e.target.value})}
              className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors resize-none"
            ></textarea>

            <textarea
              rows={3}
              placeholder="Additional Information"
              value={formData.additional}
              onChange={(e) => setFormData({...formData, additional: e.target.value})}
              className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30"
          >
            Submit Project Inquiry
          </button>

          <p className="text-center text-sm text-gray-500">
            We typically respond within 24-48 hours
          </p>
        </form>
      </div>
    </main>
  );
}
