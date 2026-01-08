import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">
          Forgot Password
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Password reset functionality coming soon...
        </p>
        <a href="/login" className="text-red-400 hover:text-red-300 text-lg font-semibold">
          ← Back to Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
