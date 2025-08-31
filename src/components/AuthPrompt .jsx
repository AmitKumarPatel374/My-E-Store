import React from 'react';

const AuthPrompt = ({ onClose, onContinue }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 text-center space-y-4 shadow-2xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold text-gray-800">You’re not logged in</h2>
        <p className="text-gray-600">Please register or sign in to continue.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 cursor-pointer hover:bg-gray-400 transition rounded-md"
          >
            Stay Logged Out
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-2 bg-[#00809D] cursor-pointer hover:bg-[#00809D99] transition text-white rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPrompt;
