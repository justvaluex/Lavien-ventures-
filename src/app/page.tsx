"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    { title: "Ideas to Reality", desc: "Turn concepts into functioning businesses" },
    { title: "Web Development", desc: "Modern, responsive websites that convert" },
    { title: "E-Commerce", desc: "Shopify stores that drive sales" },
    { title: "Branding", desc: "Memorable identities that stand out" },
    { title: "AI Automation", desc: "Eliminate repetitive work with AI" },
    { title: "Digital Marketing", desc: "Turn attention into customers" },
    { title: "Mobile Apps", desc: "Native experiences for iOS & Android" },
    { title: "Consulting", desc: "Strategic guidance for growth" },
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
      desc: "We build our own ventures, so we understand the real challenges of building a business from the ground up."
    },
    { 
      title: "End-to-End Expertise", 
      desc: "From ideation to launch to scaling, we have experience at every stage of the business lifecycle."
    },
    { 
      title: "Strategic Partnerships", 
      desc: "We develop joint ventures and partnerships that create mutual value for all parties involved."
    },
  ];

  const processSteps = [
    { step: "1", title: "Discover", desc: "Understand your goals" },
    { step: "2", title: "Design", desc: "Create the vision" },
    { step: "3", title: "Build", desc: "Execute flawlessly" },
    { step: "4", title: "Scale", desc: "Grow sustainably" },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0B10', 
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        width: '100%', 
        zIndex: 50, 
        backgroundColor: scrolled ? 'rgba(10,11,16,0.9)' : 'transparent',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none'
            }}>
              LAVIEN VENTURES
            </Link>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link href="/about" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}>About</Link>
              <Link href="/services" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}>Services</Link>
              <Link href="/ventures" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}>Ventures</Link>
              <Link href="/start-project" style={{ 
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 10px 25px rgba(99,102,241,0.3)'
              }}>
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: '8rem', 
        paddingBottom: '5rem', 
        paddingLeft: '1.5rem', 
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '5rem', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '20rem', 
          height: '20rem',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          filter: 'blur(5rem)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '1.5rem'
          }}>
            Ideas are easy.
            <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Building them is where we come in.
            </span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
            color: '#9ca3af',
            marginBottom: '3rem',
            maxWidth: '600px',
            marginInline: 'auto',
            lineHeight: '1.6'
          }}>
            We turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/start-project" style={{ 
              padding: '1rem 2rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 10px 25px rgba(99,102,241,0.3)',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              Start Your Project
            </Link>
            <Link href="/ventures" style={{ 
              padding: '1rem 2rem',
              borderRadius: '9999px',
              border: '2px solid #6366f1',
              color: '#6366f1',
              background: 'transparent',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'all 0.3s',
              display: 'inline-block'
            }}>
              See What We Build
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section style={{ 
        padding: '5rem 1.5rem',
        background: 'linear-gradient(to right, #0A0B10, #0F111A, #0A0B10)'
      }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{ 
            fontSize: 'clamp(1.875rem, 5vw, 3rem)', 
            fontWeight: 'bold',
            lineHeight: '1.3',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            "Your idea doesn't need another advisor. It needs a path to execution."
          </blockquote>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              What We <span style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Do</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#9ca3af',
              maxWidth: '40rem',
              margin: '0 auto'
            }}>
              From concept to launch, we handle everything you need to build and scale your business.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {capabilities.map((cap, index) => (
              <Link 
                key={index} 
                href={`/services#${cap.title.toLowerCase().replace(/ /g, "-")}`}
                style={{ 
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(99,102,241,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: 'white'
                }}>
                  {cap.title}
                </h3>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#9ca3af',
                  lineHeight: '1.5'
                }}>
                  {cap.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section style={{ 
        padding: '5rem 1.5rem',
        background: '#0F111A'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Who We <span style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Help</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#9ca3af',
              maxWidth: '40rem',
              margin: '0 auto'
            }}>
              Whether you're just starting or scaling an established business, we've got you covered.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            {audiences.map((audience, index) => (
              <div 
                key={index}
                style={{ 
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: 'white'
                }}>
                  {audience.title}
                </h3>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#9ca3af',
                  lineHeight: '1.5'
                }}>
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Studio Advantage */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              The Venture Studio <span style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Advantage</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#9ca3af',
              maxWidth: '40rem',
              margin: '0 auto'
            }}>
              We don't just advise—we build alongside you with skin in the game.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {advantages.map((adv, index) => (
              <div 
                key={index}
                style={{ 
                  padding: '2rem',
                  borderRadius: '1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  {adv.title}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#9ca3af',
                  lineHeight: '1.6'
                }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Graphic */}
          <div style={{ 
            marginTop: '4rem',
            textAlign: 'center'
          }}>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)'
            }}>
              <span style={{ color: '#9ca3af' }}>Idea</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6366f1" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
              <span style={{ color: '#9ca3af' }}>Launch</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6366f1" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
              <span style={{ color: '#9ca3af' }}>Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ 
        padding: '5rem 1.5rem',
        background: '#0F111A'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Our <span style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Process</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#9ca3af',
              maxWidth: '40rem',
              margin: '0 auto'
            }}>
              A proven path from concept to execution.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1rem',
                  opacity: 0.2
                }}>
                  {step.step}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: 'white'
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#9ca3af',
                  lineHeight: '1.5'
                }}>
                  {step.desc}
                </p>
                
                {index < processSteps.length - 1 && (
                  <div style={{ 
                    position: 'absolute',
                    top: '50%',
                    right: '-1rem',
                    transform: 'translateY(-50%)',
                    display: { sm: 'block', lg: 'block' }
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgba(99,102,241,0.5)" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Ready to <span style={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Build?</span>
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#9ca3af',
            marginBottom: '3rem',
            maxWidth: '40rem',
            margin: '0 auto'
          }}>
            Let's discuss how we can help you achieve your goals and bring your vision to life.
          </p>
          <Link 
            href="/start-project"
            style={{ 
              padding: '1rem 3rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 10px 25px rgba(99,102,241,0.3)'
            }}
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '3rem 1.5rem',
        background: '#0A0B10',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ gridColumn: '1 / -1', md: 'span 2' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                LAVIEN VENTURES
              </h3>
              <p style={{ 
                color: '#9ca3af',
                maxWidth: '24rem'
              }}>
                We build what moves business forward. From idea to execution, we help entrepreneurs and businesses build, automate, launch, and grow.
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Website Development</Link></li>
                <li><Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>AI Automation</Link></li>
                <li><Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Digital Marketing</Link></li>
                <li><Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</Link></li>
                <li><Link href="/ventures" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Ventures</Link></li>
                <li><Link href="/cases-studies" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Case Studies</Link></li>
                <li><Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#6b7280'
          }}>
            <p>&copy; {new Date().getFullYear()} LAVIEN VENTURES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
