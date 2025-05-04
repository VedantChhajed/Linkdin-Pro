import React, { useState } from 'react';
import { Edit, Plus, Video, Clock } from 'lucide-react';
import { Skill } from '../types';
import { VideoEndorsementModal } from './VideoEndorsementModal';
import { SkillTimelineModal } from './SkillTimelineModal';

interface SkillsSectionProps {
  skills: Skill[];
  onRequestEndorsement: (skill: Skill, email: string) => void;
  onUploadVideo: (skill: Skill, videoUrl: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  skills, 
  onRequestEndorsement,
  onUploadVideo
}) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTimelineModal, setShowTimelineModal] = useState(false);
  
  const displayedSkills = showAll ? skills : skills.slice(0, 3);
  
  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setShowTimelineModal(true)}
            className="text-[#0a66c2] hover:bg-[#e8f0fe] px-3 py-1 rounded-full font-medium flex items-center"
          >
            <Clock className="w-4 h-4 mr-2" />
            View Timeline
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Plus className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Edit className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {displayedSkills.map((skill) => (
          <div key={skill.id} className="pb-4 border-b border-gray-200 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {skill.endorsements} endorsements
                </p>
              </div>
              <button 
                onClick={() => {
                  setSelectedSkill(skill);
                  setShowVideoModal(true);
                }}
                className="bg-[#0a66c2] text-white px-3 py-1 text-sm rounded-full font-medium flex items-center"
              >
                <Video className="w-4 h-4 mr-2" />
                Request Endorsement
              </button>
            </div>
            
            {skill.videoEndorsements?.length > 0 && (
              <div className="mt-3 grid grid-cols-3 gap-2">
                {skill.videoEndorsements.map((endorsement) => (
                  <div 
                    key={endorsement.id}
                    className="relative cursor-pointer group"
                    onClick={() => {
                      // Handle video playback
                    }}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${endorsement.videoUrl.split('v=')[1]}/mqdefault.jpg`}
                      alt={`Endorsement by ${endorsement.endorserName}`}
                      className="w-full h-24 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <Video className="w-8 h-8 text-white opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {skills.length > 3 && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 font-medium mt-3 hover:text-[#0a66c2]"
        >
          {showAll ? 'Show less' : `Show all ${skills.length} skills`}
        </button>
      )}

      {showVideoModal && selectedSkill && (
        <VideoEndorsementModal
          skill={selectedSkill}
          onClose={() => {
            setShowVideoModal(false);
            setSelectedSkill(null);
          }}
          onRequestEndorsement={onRequestEndorsement}
          onUploadVideo={onUploadVideo}
        />
      )}

      {showTimelineModal && (
        <SkillTimelineModal
          skills={skills}
          onClose={() => setShowTimelineModal(false)}
        />
      )}
    </section>
  );
};