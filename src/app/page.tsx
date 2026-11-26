"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SparklesIcon, RocketLaunchIcon, AcademicCapIcon as CodeIcon, ChartBarIcon, GlobeAltIcon as GlobeIcon, BuildingLibraryIcon, LightBulbIcon as BrainIcon, DevicePhoneMobileIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const capabilities = [
    { icon: <RocketLaunchIcon className="h-6 w-6" />, title: "Ideas to Reality", desc: "Turn concepts into functioning businesses" },
    { icon: <CodeIcon className="h-6 w-6" />, title: "Web Development", desc: "Modern, responsive websites that convert" },
    { icon: <GlobeIcon className="h-6 w-6" />, title: "E-Commerce", desc: "Shopify stores that drive sales" },
    { icon: <BuildingLibraryIcon className="h-6 w-6" />, title: "Branding", desc: "Memorable identities that stand out" },
    { icon: <BrainIcon className="h-6 w-6" />, title: "AI Automation", desc: "Eliminate repetitive work with AI" },
    { icon: <ChartBarIcon className="h-6 w-6" />, title: "Digital Marketing", desc: "Turn attention into customers" },
    { icon: <DevicePhoneMobileIcon className="h-6 w-6" />, title: "Mobile Apps", desc: "Native experiences for iOS & Android" },
    { icon: <SparklesIcon className="h-6 w-6" />, title: "Consulting", desc: "Strategic guidance for growth" },
  ];

  const audiences = [
    { title: "Entrepreneurs", desc: "Turning ideas into reality" },
    { title: "Startups/MVPs", desc: "From concept to market launch" },
    { title: "Small Businesses", desc: "Going digital and scaling" },
    { title: "Established Companies", desc: "Modernizing operations" },
    { title: "Organizations", desc: "Tech transformation" },
  ];

  const advantages = [
    { 
      title: "Skin in the Game", 
      desc: "We build our own ventures, so we understand the real challenges of building a business from the ground up.",
      icon: <RocketLaunchIcon className="h-8 w-8" />
    },
    { 
      title: "End-to-End Expertise", 
      desc: "From ideation to launch to scaling, we have experience at every stage of the business lifecycle.",
      icon: <ChartBarIcon className="h-8 w-8" />
    },
    { 
      title: "Strategic Partnerships", 
      desc: "We develop joint ventures and partnerships that create mutual value for all parties involved.",
      icon: <SparklesIcon className="h-8 w-8" />
    },
  ];

  const processSteps = [
    { step: "1", title: "Discover", desc: "Understand your goals" },
    { step: "2", title: "Design", desc: "Create the vision" },
    { step: "3", title: "Build", desc: "Execute flawlessly" },
    { step: "4", title: "Scale", desc: "Grow sustainably" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0B10] text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0B10]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981] tracking-tight">
              LAVIEN VENTURES
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors font-medium">Services</Link>
              <Link href="/ventures" className="text-gray-300 hover:text-white transition-colors font-medium">Ventures</Link>
              <Link href="/start-project" className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#6366f1]/30">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6366f1]/15 to-transparent blur-[200px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Ideas are easy.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]">
              Building them is where we come in.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-project"
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#6366f1]/30 inline-flex items-center group"
            >
              Start Your Project
              <ArrowRightIcon className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ventures"
              className="px-8 py-3 rounded-full font-semibold border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
            >
              See What We Build
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0A0B10] via-[#0F111A] to-[#0A0B10]">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981] leading-tight">
            "Your idea doesn't need another advisor. It needs a path to execution."
          </blockquote>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]">Do</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we handle everything you need to build and scale your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <Link
                key={index}
                href={`/services#${cap.title.toLowerCase().replace(/ /g, "-")}`}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 transition-all duration-300 hover:border-[#6366f1]/50 hover:bg-[rgba(255,255,255,0.06)] hover:shadow-lg hover:shadow-[#6366f1]/10 hover:-translate-y-1"
              >
                <div className="text-[#6366f1] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-6 bg-[#0F111A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]">Help</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you're just starting or scaling an established business, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
                <p className="text-gray-400 text-sm">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Studio Advantage */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Venture Studio <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]">Advantage</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don't just advise—we build alongside you with skin in the game.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                <div className="text-[#6366f1] mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-gray-400">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline Graphic */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full px-8 py-4 backdrop-blur-xl">
              <span className="text-gray-400">Idea</span>
              <ArrowRightIcon className="h-5 w-5 text-[#6366f1]" />
              <span className="text-gray-400">Launch</span>
              <ArrowRightIcon className="h-5 w-5 text-[#6366f1]" />
              <span className="text-gray-400">Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-[#0F111A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven path from concept to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981] mb-4 opacity-20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-[#6366f1]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981]">Build?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals and bring your vision to life.
          </p>
          <Link
            href="/start-project"
            className="px-12 py-4 rounded-full font-semibold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#6366f1]/30 inline-flex items-center"
          >
            Start Your Project
            <ArrowRightIcon className="inline-block ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0A0B10] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#10b981] mb-4">
                LAVIEN VENTURES
              </h3>
              <p className="text-gray-400 max-w-md">
                We build what moves business forward. From idea to execution, we help entrepreneurs and businesses build, automate, launch, and grow.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-[#6366f1] transition-colors">Website Development</Link></li>
                <li><Link href="/services" className="hover:text-[#6366f1] transition-colors">AI Automation</Link></li>
                <li><Link href="/services" className="hover:text-[#6366f1] transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services" className="hover:text-[#6366f1] transition-colors">Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-[#6366f1] transition-colors">About Us</Link></li>
                <li><Link href="/ventures" className="hover:text-[#6366f1] transition-colors">Ventures</Link></li>
                <li><Link href="/cases-studies" className="hover:text-[#6366f1] transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-[#6366f1] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} LAVIEN VENTURES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
