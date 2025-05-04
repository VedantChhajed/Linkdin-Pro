import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProfileHeader } from './components/ProfileHeader';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { CollaborationSection } from './components/CollaborationSection';
import { useProfile } from './hooks/useProfile';
import { Skill } from './types';

function App() {
  const { profile, toggleAvailability, requestCollaboration, requestEndorsement, uploadVideo } = useProfile();

  const handleRequestEndorsement = (skill: Skill, email: string) => {
    requestEndorsement(skill.id, email);
  };

  const handleUploadVideo = (skill: Skill, videoUrl: string) => {
    uploadVideo(skill.id, videoUrl);
  };

  const handleToggleAvailability = () => {
    toggleAvailability();
  };

  const handleRequestCollaboration = (message: string) => {
    requestCollaboration(message);
  };

  return (
    <div className="bg-[#f3f2ef] min-h-screen pb-10">
      <Header />
      <main className="pt-16 px-4 max-w-[1128px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3 space-y-5">
            <ProfileHeader profile={profile} />
            <CollaborationSection 
              availability={profile.availability}
              onToggleAvailability={handleToggleAvailability}
              onRequestCollaboration={handleRequestCollaboration}
            />
            <AboutSection about={profile.about} />
            <ExperienceSection experiences={profile.experiences} />
            <EducationSection educations={profile.educations} />
            <SkillsSection 
              skills={profile.skills}
              onRequestEndorsement={handleRequestEndorsement}
              onUploadVideo={handleUploadVideo}
            />
            <RecommendationsSection recommendations={profile.recommendations} />
          </div>
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-3">People you may know</h3>
              <p className="text-gray-500 text-sm">LinkedIn connections would appear here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;