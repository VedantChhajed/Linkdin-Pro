import React from 'react';
import { Edit, Plus, ThumbsUp, MessageSquare } from 'lucide-react';
import { Recommendation } from '../types';

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return null;
  }
  
  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Recommendations</h2>
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
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="border-b border-gray-200 last:border-0 pb-4">
            <div className="flex items-start">
              <img 
                src={recommendation.recommenderAvatar} 
                alt={recommendation.recommenderName} 
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold">{recommendation.recommenderName}</h3>
                <p className="text-sm text-gray-500">{recommendation.recommenderTitle}</p>
                <p className="text-sm text-gray-700 mt-2">{recommendation.text}</p>
                
                <div className="flex items-center mt-3 text-gray-500">
                  <button className="flex items-center mr-4 hover:text-gray-700">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span className="text-xs">Like</span>
                  </button>
                  <button className="flex items-center hover:text-gray-700">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span className="text-xs">Comment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};