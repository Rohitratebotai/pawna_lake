import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Cancellation and Refund Policy
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          At <strong>Blue Bell Homestay</strong>, we aim to provide our guests with a seamless and transparent booking experience.
          This Cancellation and Refund Policy outlines the terms related to cancellations, refunds, and changes to bookings.
          By confirming a reservation with us, you acknowledge and agree to the following terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Cancellation Policy</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Guests may cancel their booking by informing us in advance. If the cancellation is made more than 48 hours
          prior to the check-in date, a full refund will be issued. For cancellations made within 48 hours of the check-in date,
          a charge equivalent to one night’s stay will be applicable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Refund Policy</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          All eligible refunds will be processed within 7–10 business days from the date of cancellation confirmation.
          Refunds will be credited via the original mode of payment. Please note that any service or transaction fees
          charged by the booking platform or payment gateway are non-refundable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Non-Refundable Bookings</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Certain reservations may be marked as non-refundable at the time of booking.
          In such cases, no refund will be provided, irrespective of the timing of the cancellation.
          Kindly review the terms and conditions before confirming your reservation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Reservation Modifications</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you wish to make any changes to your reservation (such as modifying the check-in date, number of guests, etc.),
          please get in touch with us directly. All changes are subject to availability and may involve additional charges.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For any queries or further clarification regarding our cancellation and refund policy, feel free to reach out to us at{' '}
          <a
            href="mailto:bluebellhomestay99@gmail.com"
            className="text-blue-600 underline"
          >
            bluebellhomestay99@gmail.com
          </a>{' '}
          or call us at <span className="font-medium">+91 99221 13508</span>.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
