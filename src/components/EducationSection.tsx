import React from 'react';
import { Edit, Plus } from 'lucide-react';
import { Education } from '../types';

interface EducationSectionProps {
  educations: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <Plus className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Edit className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-5">
        {educations.map((education) => (
          <div key={education.id} className="flex">
            <div className="mr-3 mt-1">
              <img 
                src={education.logo} 
                alt={education.institution} 
                className="w-12 h-12 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{education.institution}</h3>
              <p className="text-sm">{education.degree}</p>
              <p className="text-xs text-gray-500">{education.years}</p>
              {education.description && (
                <p className="text-sm text-gray-700 mt-2">
                  {education.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};