import React, { useState } from 'react';
import { Edit } from 'lucide-react';

interface AboutSectionProps {
  about: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = about.length > 300;
  
  const displayText = isExpanded || !shouldTruncate
    ? about
    : `${about.slice(0, 300)}...`;

  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">About</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <Edit className="w-5 h-5" />
        </button>
      </div>
      
      <p className="text-gray-700 whitespace-pre-line">
        {displayText}
      </p>
      
      {shouldTruncate && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 font-medium mt-2 hover:text-[#0a66c2]"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </section>
  );
};