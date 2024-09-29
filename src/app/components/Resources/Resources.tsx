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
    </section>
  );
};

export default Resources;