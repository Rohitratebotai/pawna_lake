import React from 'react';
import { Link } from 'react-router-dom'; // or use <a> if not using react-router
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 h-fit px-4 py-14">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

        <p className="text-gray-600 mb-4">
          At <strong>Blue Bell Homestay, Himachal Pradesh</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website or make use of our services. By using our website or booking a stay with us, you agree to the practices described below.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          When you make a reservation or contact us through our website, we may collect personal details including your name, email address, phone number, postal address, identification documents, payment information, and preferences related to your stay.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          The information we collect is used to confirm your reservations, enhance your guest experience, respond to inquiries, process payments, and send important updates. Occasionally, we may send you promotional offers or information relevant to your interests, but you can opt out at any time.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Sharing of Data</h2>
        <p className="text-gray-600 mb-4">
          We do not sell or rent your personal data. Your information may be shared only with trusted third-party vendors or service providers (e.g., payment gateways, IT support) who help us operate efficiently. These partners are required to maintain strict confidentiality. We may also disclose information when required by law or government authorities.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Data Security</h2>
        <p className="text-gray-600 mb-4">
          We implement robust security measures such as encryption, secure servers, and firewalls to protect your personal data from unauthorized access or misuse. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Your Privacy Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to access, modify, or delete your personal information held by us. You may also object to our processing or request data portability. To exercise any of these rights, please contact us through the details provided below.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Policy Updates</h2>
        <p className="text-gray-600 mb-4">
          We may revise this Privacy Policy occasionally to reflect changes in our practices or legal requirements. The latest version will always be available on our website. Continued use of our services after such updates constitutes your acceptance of the revised policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy or your personal data, please reach out to us at{' '}
          <a href="mailto:bluebellhomestay99@gmail.com" className="text-blue-600 hover:underline">
            bluebellhomestay99@gmail.com
          </a>{' '}
          or call us at <span className="font-medium">+91 99221 13508</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
