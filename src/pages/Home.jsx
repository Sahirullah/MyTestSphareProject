import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Support from '../components/Support';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import logoImage from '../assets/logo (3).png';
import aboutImage from '../assets/About.jpeg';
import '../pages/About.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      
      {/* About Section */}
      <main className="about-main">
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
                  <b>Test Spare</b> is dedicated to providing students around the globe with easy access to high-quality educational resources. We believe that every learner deserves access to comprehensive study materials, regardless of their location or financial situation.
                </p>
                <p className="mission-description">
                 Our platform acts as a bridge between academic excellence and accessibility, offering handouts, assignments, past papers, and study notes from top universities worldwide. Whether you are preparing for exams, researching, or expanding your knowledge, <b>Test Spare</b> ensures you have reliable and up-to-date resources at your fingertips.
                </p>
              </div>
              <div className="mission-image">
                <img src={aboutImage} alt="About Test Spare" className="mission-image-img" />
              </div>
            </div>
          </div>
        </section>

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
      
      <Support />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;