import React from 'react';
import './styles.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="resources">
      <SectionHeader title="Resources" />

      <div className="resourceGrid">
        <div className="card01">
          <h3>Google Document</h3>
          <p>Access our comprehensive guide and resources.</p>
          <a 
            href="https://docs.google.com/document/d/1pyamKiCyMt89pVsA0Roc_YBIZiGI_MzPy2WeTEC-e7o/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resource-button"
          >
            Open Document
          </a>
        </div>

        <div className="card01">
          <h3>Slack Channel Invite</h3>
          <p>Join our community on Slack for updates and discussions.</p>
          <a 
            href="https://nepaliyouth.slack.com/join/shared_invite/zt-2rjgpe0s2-xi7SR2Ao03VhqTKMfhODpg#/shared-invite/email" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resource-button"
          >
            Join Slack
          </a>
        </div>
      </div>

      <div className="mentorship-section">
        <h3>NNYN Mentorship Program Application</h3>
        <p>
          We will be focusing on applicants who are currently applying to U.S. undergraduate institutions with an estimated matriculation of August 2025.
        </p>
        <p>
          The program will last 10 weeks and will approximately start in mid October. Each week mentors and mentees will meet for 1 hour to discuss college applications, career advice, essay feedback, etc. The sessions will roughly be broken down as follows but will be tailored specifically depending on the mentor and mentee's interests.
        </p>
        <p>
          In week 1 mentors and mentees will discuss the mentees{ "'s" } goals, college list, and where they are in the college application cycle. The first part of the program will be spent on workshopping the mentees{ "'s" } overall application story. Then mentees and mentors will work together on polishing the mentees{ "'s" } personal statements and extracurricular essays. The final part will focus on career advice and finding scholarship opportunities, etc.
        </p>
        <p>Please find the applications on the next section!</p>
        <p>
          If you have any questions regarding the application, please reach out to 
          <a href="mailto:nationalnepaliyouthnetwork@gmail.com"> nationalnepaliyouthnetwork@gmail.com</a> 
        </p>
      </div>
    </section>
  );
};

export default Resources;