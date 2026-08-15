import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How can I access study materials?',
      answer: 'All study materials are available for free on our website. Simply navigate to your university section (VU or AIOU) and browse by subject or material type. You can also join our WhatsApp community for instant access and updates.'
    },
    {
      id: 2,
      question: 'Are the materials updated regularly?',
      answer: 'Yes, we continuously update our materials with the latest handouts, past papers, and study resources to ensure students have access to current content. New materials are added weekly based on student requests and university updates.'
    },
    {
      id: 3,
      question: 'Can I request specific study materials?',
      answer: 'Absolutely! Use the contact form on our website to request specific materials, and we\'ll do our best to add them to our collection. You can also reach out through our WhatsApp community group for faster responses.'
    },
    {
      id: 4,
      question: 'Is there a mobile app available?',
      answer: 'Currently, our website is fully responsive and works great on mobile devices. We\'re working on a dedicated mobile app for an even better experience. In the meantime, you can access all materials through your mobile browser.'
    },
    {
      id: 5,
      question: 'How can I contribute to the platform?',
      answer: 'We welcome contributions! You can share study materials, provide feedback, or help other students through our WhatsApp community group. Contact us through the website to learn more about becoming a contributor.'
    },
    {
      id: 6,
      question: 'What subjects are covered?',
      answer: 'We cover a wide range of subjects including Computer Science, Biology, Chemistry, Physics, Mathematics, Islamic Studies, English, and many more. Check our categories section to see the complete list of available subjects.'
    }
  ];

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Find answers to common questions about our platform and services</p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${expandedId === faq.id ? 'expanded' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleExpand(faq.id)}
                  aria-expanded={expandedId === faq.id}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-footer">
          <p className="faq-footer-text">
            Didn't find what you're looking for?{' '}
            <a href="/contact" className="faq-footer-link">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
