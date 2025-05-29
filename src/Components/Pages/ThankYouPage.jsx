import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    {/*Redirect to home/dashboard after 5 seconds*/}
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Thank You!</h1>
         <h2 className="text-2xl font-bold text-orange-500 mb-3">Order Confirmed!</h2>
  <p className="text-gray-700 mb-2">Thank you for choosing us.</p>
        <p className="text-gray-600">Your delicious food will be on its way shortly!</p>
        <p className="text-gray-500 text-sm mb-6 mt-4">Redirecting you shortly...</p>

        <div className="flex justify-center">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
