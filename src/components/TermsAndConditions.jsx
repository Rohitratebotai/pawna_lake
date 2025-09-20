import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to <strong>Blue Bell Homestay</strong>. These Terms and Conditions outline the rules and regulations for the use of our website
          and services. By accessing or using our website or making a reservation, you agree to comply with these terms.
          Please refrain from using the site or services if you disagree with any part of these terms.
        </p>

        <Section title="License">
          <p>
            Unless otherwise stated, <strong>Blue Bell Homestay</strong> and/or its licensors own the intellectual property rights for all material
            on this website. You may access the website for your personal use, subject to the restrictions set forth in these
            terms and conditions.
          </p>
        </Section>

        <Section title="User Comments">
          <p>
            Guests and visitors may post reviews or comments on our platform. <strong>Blue Bell Homestay</strong> does not pre-screen or moderate
            comments before they are posted. The opinions expressed belong solely to the individuals and do not necessarily reflect
            our views or values.
          </p>
        </Section>

        <Section title="Hyperlinking to Our Content">
          <p>
            Government agencies, search engines, news outlets, and online directories may link to our website without prior approval.
            Other organizations, such as NGOs or local community groups, may link to our homepage upon request and approval.
          </p>
        </Section>

        <Section title="iFrames">
          <p>
            You may not create frames around our webpages or modify the visual presentation or layout of our website without
            explicit written permission.
          </p>
        </Section>

        <Section title="Content Liability">
          <p>
            We are not responsible for any content that appears on external websites linking to or from <strong>Blue Bell Homestay</strong>.
            You agree to protect us from any claims that arise from your website if you link to ours. Links must not contain
            content that is unlawful, defamatory, or violates any third-party rights.
          </p>
        </Section>

        <Section title="Reservation of Rights">
          <p>
            We reserve the right to request removal of any or all links to our website. By continuing to link to our site, you
            agree to these terms and any future changes to them.
          </p>
        </Section>

        <Section title="Removal of Links">
          <p>
            If you find any link on our site that you believe is inappropriate, feel free to contact us. We will review all requests
            for link removal, but we are not obligated to respond or take action unless legally required.
          </p>
        </Section>

        <Section title="Disclaimer">
          <p className="mb-2">
            To the fullest extent permitted by law, we exclude all warranties and representations related to our website and services.
            This disclaimer does not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Limit or exclude liability for death or personal injury</li>
            <li>Limit or exclude liability for fraud or fraudulent misrepresentation</li>
            <li>Limit any liabilities in ways not permitted under applicable law</li>
            <li>Exclude any liabilities that cannot be excluded under applicable law</li>
          </ul>
        </Section>

        <Section title="Contact Us">
          <p>
            Have questions or need help? <br /> Contact us at{' '}
            <a href="mailto:bluebellhomestay99@gmail.com" className="text-blue-600 underline">
              bluebellhomestay99@gmail.com
            </a>{' '}
            <br /> or call <span className="font-medium">+91 99221 13508</span>.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
