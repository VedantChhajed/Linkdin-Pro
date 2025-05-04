import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { Skill } from '../types';
import 'vis-timeline/styles/vis-timeline-graph2d.css';

interface SkillTimelineModalProps {
  skills: Skill[];
  onClose: () => void;
}

export const SkillTimelineModal: React.FC<SkillTimelineModalProps> = ({
  skills,
  onClose
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const items = new DataSet(
      skills.map((skill) => ({
        id: skill.id,
        content: skill.name,
        start: new Date(skill.firstLearned),
        end: new Date(skill.lastUsed),
        type: 'range',
        className: 'bg-[#0a66c2] text-white rounded-full px-3 py-1'
      }))
    );

    const options = {
      height: '400px',
      start: new Date(Math.min(...skills.map(s => new Date(s.firstLearned).getTime()))),
      end: new Date(),
      zoomable: true,
      stack: true
    };

    const timeline = new Timeline(timelineRef.current, items, options);

    return () => {
      timeline.destroy();
    };
  }, [skills]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Skill Timeline</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <div ref={timelineRef} className="w-full" />
        </div>
      </div>
    </div>
  );
};