import React from 'react';
import { Edit, Plus } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Experience</h2>
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
        {experiences.map((experience) => (
          <div key={experience.id} className="flex">
            <div className="mr-3 mt-1">
              <img 
                src={experience.companyLogo} 
                alt={experience.company} 
                className="w-12 h-12 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{experience.title}</h3>
              <p className="text-sm">{experience.company}</p>
              <p className="text-xs text-gray-500">
                {experience.duration} · {experience.location}
              </p>
              {experience.description && (
                <p className="text-sm text-gray-700 mt-2">
                  {experience.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};