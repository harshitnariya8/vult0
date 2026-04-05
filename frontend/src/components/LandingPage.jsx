import React, { useState } from 'react';
import { 
  Phone, PhoneOff, Clock, AlertCircle, TrendingDown, 
  MessageSquare, CheckCircle, Calendar, Send, Database,
  ChevronDown, Play, ArrowRight, Menu, X
} from 'lucide-react';
import { testimonials, features, painPoints, faqs, stats } from '../mockData';
import ROICalculator from './ROICalculator';
import DemoPlayer from './DemoPlayer';
import '../styles/landing.css';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firm: ''
  });

  const iconMap = {
    Phone, PhoneOff, Clock, AlertCircle, TrendingDown,
    MessageSquare, CheckCircle, Calendar, Send, Database
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open Calendly after form submission
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/harshit-vult0/30min',
        prefill: {
          name: formData.name,
          email: formData.email,
          customAnswers: {
            a1: formData.phone,
            a2: formData.firm
          }
        }
      });
    } else {
      window.open('https://calendly.com/harshit-vult0/30min', '_blank');
    }
    setFormData({ name: '', email: '', phone: '', firm: '' });
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/harshit-vult0/30min' });
    } else {
      // Fallback if Calendly script hasn't loaded yet
      window.open('https://calendly.com/harshit-vult0/30min', '_blank');
    }
    return false;
  };

  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header-nav">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <Phone size={28} strokeWidth={2.5} />
              <span className="logo-text">Vult0</span>
            </div>

            <nav className="desktop-nav">
              <a href="#features" className="nav-link">Features</a>
              <a href="#demo-section" className="nav-link">Demo</a>
              <a href="#roi" className="nav-link">ROI</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
            </nav>

            <div className="header-actions">
              <button className="btn-primary" onClick={openCalendly}>Book Demo</button>
              <button 
                className="mobile-menu-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" className="mobile-nav-link">Features</a>
            <a href="#demo-section" className="mobile-nav-link">Demo</a>
            <a href="#roi" className="mobile-nav-link">ROI</a>
            <a href="#testimonials" className="mobile-nav-link">Testimonials</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-announcement">
              <span className="announcement-dot" />
              <span>Trusted by 50+ law firms across India</span>
            </div>

            <h1 className="heading-hero">
              You're losing high-value cases<br />
              every time you miss a call.
            </h1>

            <p className="hero-subtitle body-large">
              34% of calls to law firms go unanswered.<br />
              62% of potential clients won't leave a voicemail.<br />
              <strong>The first firm to respond wins — almost every time.</strong>
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary btn-large" onClick={openCalendly}>
                Book Your Free Demo Now
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
              <button className="btn-secondary btn-large" onClick={scrollToDemo}>
                <Play size={20} style={{ marginRight: '0.5rem' }} />
                Watch Demo
              </button>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-stat">
                <strong>5,000+</strong> calls handled
              </div>
              <div className="trust-divider" />
              <div className="trust-stat">
                <strong>87%</strong> fewer missed calls
              </div>
              <div className="trust-divider" />
              <div className="trust-stat">
                <strong>2.3x</strong> more bookings
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1652803723541-ffc5a8783329?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjByZWNlcHRpb258ZW58MHx8fHwxNzc1Mzc5NTAwfDA&ixlib=rb-4.1.0&q=85"
              alt="Professional office reception"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="reality-section">
        <div className="container">
          <div className="reality-content">
            <h2 className="heading-1">Let's do the math.</h2>
            
            <div className="reality-grid">
              <div className="reality-card">
                <div className="reality-value">₹50,000 – ₹3,00,000</div>
                <div className="reality-label">Average case value</div>
              </div>
              <div className="reality-operator">×</div>
              <div className="reality-card">
                <div className="reality-value">5 calls/week</div>
                <div className="reality-label">Missed opportunities</div>
              </div>
              <div className="reality-operator">=</div>
              <div className="reality-card highlight">
                <div className="reality-value">₹10L+</div>
                <div className="reality-label">Lost revenue/month</div>
              </div>
            </div>

            <p className="reality-punchline heading-2">
              And that's just the calls you know about.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="problems-section">
        <div className="container">
          <h2 className="heading-1">What's actually happening</h2>
          <p className="body-large section-subtitle">
            You're not losing leads. You're handing them to competitors.
          </p>

          <div className="problems-grid">
            {painPoints.map((point) => {
              const Icon = iconMap[point.icon];
              return (
                <div key={point.id} className="problem-card">
                  <div className="problem-icon">
                    <Icon size={32} />
                  </div>
                  <div className="problem-content">
                    <h3 className="heading-3">{point.problem}</h3>
                    <p className="problem-result">→ {point.result}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="problems-image">
            <img 
              src="https://images.unsplash.com/photo-1737064294935-368a4ce4ef56"
              alt="Overwhelmed receptionist"
              className="problems-img"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" id="features">
        <div className="container">
          <div className="product-header">
            <h2 className="heading-1">Meet your 24/7 Client Intake System</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              It doesn't just answer calls. It converts them.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.id} className="feature-card voice-card">
                  <div className="feature-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="voice-card-title">{feature.title}</h3>
                  <p className="voice-card-description">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="product-visual">
            <img 
              src="https://images.unsplash.com/photo-1678977252570-58db7acbbeea"
              alt="AI voice technology"
              className="product-image"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section">
        <DemoPlayer />
      </section>

      {/* ROI Calculator */}
      <section id="roi">
        <ROICalculator />
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <h2 className="heading-1">Trusted by lawyers who win</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="heading-3">{testimonial.name}</h4>
                    <p className="caption">{testimonial.firm}</p>
                  </div>
                </div>
                <p className="testimonial-quote body-medium">"{testimonial.quote}"</p>
                <div className="testimonial-metric">
                  <CheckCircle size={16} />
                  <span>{testimonial.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="heading-1">Common questions answered</h2>
          
          <div className="faq-list">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${openFaq === faq.id ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <span className="heading-3">{faq.question}</span>
                  <ChevronDown 
                    size={24} 
                    className={`faq-icon ${openFaq === faq.id ? 'rotated' : ''}`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="faq-answer">
                    <p className="body-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="heading-hero" style={{ color: 'white' }}>
              Every missed call is a signed client<br />
              — just not yours.
            </h2>
            
            <form onSubmit={handleSubmit} className="cta-form">
              <div className="form-grid">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Law Firm Name"
                  value={formData.firm}
                  onChange={(e) => setFormData({...formData, firm: e.target.value})}
                  className="form-input"
                />
              </div>
              <button type="submit" className="btn-primary btn-large btn-cta">
                Book a 15-min Demo
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>

            <p className="caption" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
              No credit card required • Setup in 15 minutes • Live same day
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Phone size={28} strokeWidth={2.5} />
              <span className="logo-text">Vult0</span>
            </div>
            <p className="caption">
              © 2024 Vult0. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
