import { useState } from 'react';
import { profileData } from '../data/profileData';
import { ProfileType } from '../types';

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileType>(profileData);

  const toggleAvailability = () => {
    setProfile(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        isAvailable: !prev.availability.isAvailable
      }
    }));
  };

  const requestCollaboration = (message: string) => {
    // In a real app, this would send the message to a backend
    alert(`Collaboration request sent: ${message}`);
  };

  const requestEndorsement = (skillId: string, email: string) => {
    // In a real app, this would send an email to the endorser
    alert(`Endorsement request sent to ${email}`);
  };

  const uploadVideo = (skillId: string, videoUrl: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === skillId
          ? {
              ...skill,
              videoEndorsements: [
                ...(skill.videoEndorsements || []),
                {
                  id: Date.now().toString(),
                  endorserName: 'Self Upload',
                  endorserTitle: 'Video Endorsement',
                  endorserAvatar: profile.avatarUrl,
                  videoUrl,
                  date: new Date().toISOString()
                }
              ]
            }
          : skill
      )
    }));
  };

  return {
    profile,
    toggleAvailability,
    requestCollaboration,
    requestEndorsement,
    uploadVideo
  };
};