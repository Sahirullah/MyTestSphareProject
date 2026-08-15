import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImage from '../assets/logo (3).png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <h1 className="about-hero-title">About Test Spare</h1>
            <p className="about-hero-subtitle">
              Empowering Pakistani students with quality educational resources since 2024
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-container">
            <div className="mission-content">
              <div className="mission-text">
                <div className="mission-logo">
                  <img src={logoImage} alt="Test Spare Logo" className="mission-logo-image" />
                  <div className="mission-logo-text">
                    <h3 className="mission-logo-title">Test Spare</h3>
                    <p className="mission-logo-subtitle">Educational Resources</p>
                  </div>
                </div>
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-description">
                  Test Spare is dedicated to providing Pakistani university students with 
                  easy access to high-quality educational resources. We believe that every student 
                  deserves access to comprehensive study materials, regardless of their financial 
                  situation or geographical location.
                </p>
                <p className="mission-description">
                  Our platform serves as a bridge between academic excellence and accessibility, 
                  offering handouts, assignments, past papers, and study notes from top universities 
                  across Pakistan.
                </p>
              </div>
              <div className="mission-stats">
                <div className="stat-card">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Study Materials</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5K+</div>
                  <div className="stat-label">Happy Students</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Universities</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Subjects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-container">
            <h2 className="section-title">Our Story</h2>
            <div className="story-content">
              <div className="story-text">
                <p>
                  Test Spare was born from the shared struggles of Pakistani university students 
                  who faced difficulties accessing quality study materials. Founded by a group of 
                  passionate students and educators, we recognized the gap between academic requirements 
                  and resource availability.
                </p>
                <p>
                  What started as a small collection of shared notes among friends has grown into 
                  Pakistan's largest digital library for educational resources. Today, we serve 
                  thousands of students across the country, helping them achieve academic success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon"><i className="fas fa-graduation-cap"></i></div>
                <h3 className="value-title">Academic Excellence</h3>
                <p className="value-description">
                  We curate only the highest quality educational materials from top-performing 
                  students and experienced educators.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon"><i className="fas fa-heart"></i></div>
                <h3 className="value-title">Community Support</h3>
                <p className="value-description">
                  Building a supportive community where students help each other succeed 
                  through knowledge sharing.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon"><i className="fas fa-lightbulb"></i></div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  Continuously improving our platform to provide better learning experiences 
                  and easier access to resources.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon"><i className="fas fa-star"></i></div>
                <h3 className="value-title">Accessibility</h3>
                <p className="value-description">
                  Making quality education accessible to all students, regardless of their 
                  background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default About;