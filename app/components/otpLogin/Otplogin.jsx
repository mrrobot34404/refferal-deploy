"use client"
import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/app/firebase';

const OtpLogin = ({ uid }) => {
  const [phone, setPhone] = useState('+91');
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState(uid); // Assuming you have the user ID available
    console.log(userId);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
      'size': 'invisible',
      callback: () => {
        console.log('recaptcha resolved..')
      }
    });
  }

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        console.error(error);
      });
  }
  
  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        let user = result.user;
        console.log(user);
        alert('User signed in successfully');
        
        // Make PATCH request to update phone number
        updatePhoneNumber(user.uid, phone);
      }).catch((error) => {
        alert('User couldn\'t sign in (bad verification code?)');
      });
    }
  }

  const updatePhoneNumber = async (userId, phoneNumber) => {
    try {
      const response = await fetch(`/api/login/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log('Phone number updated successfully:', updatedUser);
      } else {
        console.error('Failed to update phone number');
      }
    } catch (error) {
      console.error('Error updating phone number:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {hasFilled ? 'Enter the OTP' : 'Enter your phone number'}
        </h1>
        <form onSubmit={handleSend}>
          {!hasFilled ? (
            <>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded mb-4"
                placeholder="Phone Number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Send Code
              </button>
            </>
          ) : (
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="OTP"
              value={otp}
              onChange={verifyOtp}
            />
          )}
        </form>
      </div>
      <div id="recaptcha"></div>
    </div>
  );
}

export default OtpLogin;
