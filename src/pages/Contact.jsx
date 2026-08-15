import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

const FAQItem = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-accordion-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={() => onToggle(id)}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-toggle-icon">
          <i className={`fas fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i>
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="faq-answer-content">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [expandedFaqId, setExpandedFaqId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleFaqToggle = (id) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <Header />
      <div className={`contact-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Contact Test Spare</h1>
            <p>Get in touch with us for educational support, resources, and assistance</p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our support team</p>
              <a href="tel:+923191954292" className="contact-link">+92 319 1954292</a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>Send us your questions and feedback</p>
              <a href="mailto:info.testsphare@gmail.com" className="contact-link">info.testsphare@gmail.com</a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Support Hours</h3>
              <p>We're here to help you</p>
              <div className="contact-link">
                <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat - Sun: 10:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="academic">Academic Help</option>
                    <option value="resources">Study Materials Request</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please describe your inquiry in detail..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="container">
          <h2>Quick Access</h2>
          <div className="quick-links-grid">
            <div className="quick-link-card">
              <div className="quick-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>VU Students</h3>
              <p>AccessAll Types Of Careers study materials, handouts, and past papers</p>
              <a href="#virtual-university" className="quick-btn">Browse VU Resources</a>
            </div>

            <div className="quick-link-card">
              <div className="quick-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>AIOU Students</h3>
              <p>Find Allama Iqbal Open University materials and assignments</p>
              <a href="#allama-iqbal-uni" className="quick-btn">Browse AIOU Resources</a>
            </div>

            <div className="quick-link-card">
              <div className="quick-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Free Study Materials</h3>
              <p>Download free handouts, notes, and educational resources</p>
              <a href="#courses" className="quick-btn">Access Materials</a>
            </div>

            <div className="quick-link-card">
              <div className="quick-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Online Exams</h3>
              <p>Practice with mock exams, quizzes, and timed tests</p>
              <a href="#opportunities" className="quick-btn">Start Practice</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our platform and services</p>
          </div>
          <div className="faq-accordion">
            <FAQItem 
              id={1}
              question="How can I access study materials?"
              answer="All study materials are available for free on our website. Simply navigate to your university section (VU or AIOU) and browse by subject or material type. You can download materials directly without any registration required."
              isOpen={expandedFaqId === 1}
              onToggle={handleFaqToggle}
            />
            <FAQItem 
              id={2}
              question="Are the materials updated regularly?"
              answer="Yes, we continuously update our materials with the latest handouts, past papers, and study resources to ensure students have access to current content. We add new materials weekly based on student requests and academic calendars."
              isOpen={expandedFaqId === 2}
              onToggle={handleFaqToggle}
            />
            <FAQItem 
              id={3}
              question="Can I request specific study materials?"
              answer="Absolutely! Use the contact form above to request specific materials, and we'll do our best to add them to our collection. We prioritize requests from our community and typically fulfill them within 2-3 business days."
              isOpen={expandedFaqId === 3}
              onToggle={handleFaqToggle}
            />
            <FAQItem 
              id={4}
              question="Is there a mobile app available?"
              answer="Currently, our website is fully responsive and works great on mobile devices. We're working on a dedicated mobile app for an even better experience. You can bookmark our site for quick access on your phone."
              isOpen={expandedFaqId === 4}
              onToggle={handleFaqToggle}
            />
            <FAQItem 
              id={5}
              question="How can I contribute to the platform?"
              answer="We welcome contributions! You can share study materials or provide feedback to help improve our platform. Contributors get special recognition and access to exclusive resources."
              isOpen={expandedFaqId === 5}
              onToggle={handleFaqToggle}
            />
            <FAQItem 
              id={6}
              question="What subjects are covered?"
              answer="We cover a wide range of subjects including Computer Science, Biology, Chemistry, Physics, Mathematics, Islamic Studies, and many more. New subjects are added regularly based on student demand and university curricula."
              isOpen={expandedFaqId === 6}
              onToggle={handleFaqToggle}
            />
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Contact;