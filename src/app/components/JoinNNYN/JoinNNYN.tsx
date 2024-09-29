import React from 'react';
import './styles.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import Footer from '../Footer/Footer';
import { LinkedInEmbed } from 'react-social-media-embed';

const JoinNYYN: React.FC = () => {
  const linkedInPosts = [
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7056990524527800320",
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7186704449464147968",
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7172268791828045824",
    },
  ];

  return (
    <>
      <section id="join" className="join">
        <SectionHeader title="Join Us" />

        {/* Enrollment Forms Section */}
        <div className="centered-section">
          <div className="form-grid">
            <div className="small-card">
              <h4>Mentor/Mentee Form</h4>
              <p>Sign up to be part of the mentorship program.</p>
              <a 
                href="https://forms.gle/nAQUZBZtN4WTUaxYA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fill-form-button" // Ensure this class is added
              >
                Fill the form
              </a>
            </div>

            <div className="small-card">
              <h4>Eboard Application</h4>
              <p>Apply for a position on the Eboard to lead and help grow.</p>
              <a 
                href="https://forms.gle/9LEtHX6JLRnTNjJA7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fill-form-button" // Ensure this class is added
              >
                Fill the form
              </a>
            </div>
          </div>
        </div>

        <div className="centered-section">
          <div className="scroll-container">
            <div className="social-posts-grid">
              {linkedInPosts.map((post, index) => (
                <div key={index} className="small-card">
                  <LinkedInEmbed
                    url={post.url}
                    postUrl=""
                    width={270}
                    height={340}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JoinNYYN;