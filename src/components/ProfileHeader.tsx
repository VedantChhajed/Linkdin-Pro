import React from 'react';
import { Camera, Edit, MoreHorizontal } from 'lucide-react';
import { ProfileType } from '../types';

interface ProfileHeaderProps {
  profile: ProfileType;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <section className="bg-white rounded-lg shadow overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 sm:h-52 bg-gradient-to-r from-[#0a66c2] to-[#0073b1] relative">
        <button className="absolute right-4 bottom-4 bg-white p-2 rounded-full">
          <Camera className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Profile Image & Basic Info */}
      <div className="px-4 pt-0 pb-4 relative">
        <div className="rounded-full border-4 border-white bg-white absolute -top-16 left-4 shadow">
          <img 
            src={profile.avatarUrl} 
            alt={profile.name} 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
          />
        </div>

        <div className="pt-16 sm:pt-24 flex flex-col sm:flex-row sm:justify-between">
          <div className="mb-3 sm:mb-0">
            <h1 className="text-2xl font-semibold">{profile.name}</h1>
            <p className="text-base text-gray-700">{profile.headline}</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span>{profile.location}</span>
              <span className="mx-1">•</span>
              <span className="text-[#0a66c2] font-semibold cursor-pointer">
                {profile.connectionCount} connections
              </span>
            </div>
            <div className="mt-3 flex space-x-2">
              <button className="bg-[#0a66c2] text-white px-4 py-1 rounded-full font-medium">
                Open to
              </button>
              <button className="border border-[#0a66c2] text-[#0a66c2] px-4 py-1 rounded-full font-medium">
                Add profile section
              </button>
              <button className="border border-gray-400 text-gray-500 px-4 py-1 rounded-full font-medium">
                More
              </button>
            </div>
          </div>

          <div className="text-sm">
            <div className="flex items-center mb-2">
              <img 
                src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Current company" 
                className="w-6 h-6 mr-2 rounded"
              />
              <span>{profile.currentCompany}</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Education" 
                className="w-6 h-6 mr-2 rounded"
              />
              <span>{profile.education}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};