import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Glassmorphism Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-2xl shadow-lg text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold text-purple-400 drop-shadow-lg">
          Smart Notes & AI Summarization
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          AI-powered note-taking with speech-to-text and auto-summarization.
        </p>
        
        {/* Features Section */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-200">
          <div className="p-3 bg-white bg-opacity-20 rounded-lg">✅ AI Summarization</div>
          <div className="p-3 bg-white bg-opacity-20 rounded-lg">✅ Speech-to-Text</div>
          <div className="p-3 bg-white bg-opacity-20 rounded-lg">✅ Mind Map Generator</div>
          <div className="p-3 bg-white bg-opacity-20 rounded-lg">✅ Shareable Notebooks</div>
        </div>
        
        {/* Get Started Button */}
        <Link
          to="/dashboard"
          className="mt-6 inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
