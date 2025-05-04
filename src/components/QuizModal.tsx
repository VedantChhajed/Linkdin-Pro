import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Skill } from '../types';
import { getQuizQuestions } from '../data/quizQuestions';

interface QuizModalProps {
  skill: Skill;
  onClose: () => void;
  onComplete: (passed: boolean) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ skill, onClose, onComplete }) => {
  const [questions] = useState(() => getQuizQuestions(skill.name));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question
  
  useEffect(() => {
    if (showResults) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestion, showResults]);
  
  const handleTimeUp = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(60);
    } else {
      calculateScore();
    }
  };
  
  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(60);
    } else {
      calculateScore();
    }
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswerIndex) {
        correctCount++;
      }
    });
    
    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);
  };
  
  const handleComplete = () => {
    onComplete(score >= 70); // Pass if score is 70% or higher
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const question = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Verify {skill.name} Skill</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {!showResults ? (
          <div className="p-4">
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0a66c2]" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Time left: {formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-base font-medium mb-3">{question.text}</h4>
              <div className="space-y-2">
                {question.answers.map((answer, index) => (
                  <div 
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`p-3 border rounded-lg cursor-pointer ${
                      selectedAnswers[currentQuestion] === index 
                        ? 'border-[#0a66c2] bg-[#e8f0fe]' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {answer}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === -1}
                className={`px-4 py-2 rounded-full font-medium ${
                  selectedAnswers[currentQuestion] === -1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#0a66c2] text-white'
                }`}
              >
                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="text-center mb-4">
              <div className={`text-4xl font-bold mb-2 ${score >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                {score}%
              </div>
              <p className={`text-lg font-medium ${score >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                {score >= 70 ? 'Congratulations!' : 'Try Again!'}
              </p>
              <p className="text-gray-600 mt-2">
                {score >= 70 
                  ? `You've successfully verified your ${skill.name} skill!` 
                  : `You need 70% to verify your ${skill.name} skill.`}
              </p>
            </div>
            
            <button
              onClick={handleComplete}
              className="w-full py-2 rounded-full font-medium bg-[#0a66c2] text-white"
            >
              {score >= 70 ? 'Add to Profile' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};