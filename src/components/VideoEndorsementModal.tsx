import React, { useState } from 'react';
import { X, Upload, Mail } from 'lucide-react';
import { Skill } from '../types';
import ReactPlayer from 'react-player';

interface VideoEndorsementModalProps {
  skill: Skill;
  onClose: () => void;
  onRequestEndorsement: (skill: Skill, email: string) => void;
  onUploadVideo: (skill: Skill, videoUrl: string) => void;
}

export const VideoEndorsementModal: React.FC<VideoEndorsementModalProps> = ({
  skill,
  onClose,
  onRequestEndorsement,
  onUploadVideo
}) => {
  const [email, setEmail] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'request' | 'upload'>('request');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestEndorsement(skill, email);
    onClose();
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUploadVideo(skill, videoUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Video Endorsement for {skill.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="border-b">
          <div className="flex">
            <button
              className={`flex-1 py-2 text-center font-medium ${
                activeTab === 'request'
                  ? 'text-[#0a66c2] border-b-2 border-[#0a66c2]'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('request')}
            >
              Request Endorsement
            </button>
            <button
              className={`flex-1 py-2 text-center font-medium ${
                activeTab === 'upload'
                  ? 'text-[#0a66c2] border-b-2 border-[#0a66c2]'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('upload')}
            >
              Upload Video
            </button>
          </div>
        </div>

        <div className="p-4">
          {activeTab === 'request' ? (
            <form onSubmit={handleRequestSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endorser's Email
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0a66c2] text-white py-2 rounded-full font-medium hover:bg-[#084482]"
              >
                Send Request
              </button>
            </form>
          ) : (
            <form onSubmit={handleUploadSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video URL (YouTube/Vimeo)
                </label>
                <div className="relative">
                  <Upload className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => {
                      setVideoUrl(e.target.value);
                      setPreviewUrl(e.target.value);
                    }}
                    placeholder="Enter video URL"
                    className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {previewUrl && (
                <div className="mb-4">
                  <div className="relative pt-[56.25%]">
                    <ReactPlayer
                      url={previewUrl}
                      width="100%"
                      height="100%"
                      controls
                      className="absolute top-0 left-0"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#0a66c2] text-white py-2 rounded-full font-medium hover:bg-[#084482]"
              >
                Upload Video
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};