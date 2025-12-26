'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizQuestion } from '@/types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Target, Zap, Brain } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  accentColor: string;
}

export default function Quiz({ questions, accentColor }: QuizProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setIsLoading(false);
  }, [questions]);

  if (isLoading || shuffledQuestions.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Brain className="w-12 h-12" style={{ color: accentColor }} />
        </motion.div>
        <p className="mt-4 text-gray-400">Loading quiz...</p>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsQuizComplete(false);
    setStreak(0);
  };

  const getGrade = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 90) return { grade: 'A+', message: 'Outstanding! You\'re a master!', emoji: '🏆' };
    if (percentage >= 80) return { grade: 'A', message: 'Excellent work!', emoji: '⭐' };
    if (percentage >= 70) return { grade: 'B', message: 'Good job! Keep practicing!', emoji: '👍' };
    if (percentage >= 60) return { grade: 'C', message: 'Not bad, room for improvement', emoji: '📚' };
    return { grade: 'D', message: 'Keep studying, you\'ll get there!', emoji: '💪' };
  };

  if (isQuizComplete) {
    const { grade, message, emoji } = getGrade();
    const percentage = Math.round((score / shuffledQuestions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto text-center"
      >
        <div
          className="rounded-3xl p-12"
          style={{
            background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-7xl mb-6"
          >
            {emoji}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Quiz Complete!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8"
          >
            {message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-gray-800/50 rounded-2xl p-6">
              <Trophy className="w-8 h-8 mx-auto mb-2" style={{ color: accentColor }} />
              <div className="text-3xl font-bold text-white">{grade}</div>
              <div className="text-sm text-gray-400">Grade</div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6">
              <Target className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <div className="text-3xl font-bold text-white">{score}/{shuffledQuestions.length}</div>
              <div className="text-sm text-gray-400">Score</div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6">
              <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <div className="text-3xl font-bold text-white">{bestStreak}</div>
              <div className="text-sm text-gray-400">Best Streak</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: accentColor }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </div>
            <p className="text-lg mt-2" style={{ color: accentColor }}>
              {percentage}% Correct
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRestart}
            className="flex items-center gap-2 mx-auto px-8 py-4 rounded-xl text-white font-semibold transition-all"
            style={{ backgroundColor: accentColor }}
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header Stats */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            Question {currentIndex + 1}/{shuffledQuestions.length}
          </span>
          {streak > 1 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm"
            >
              <Zap className="w-4 h-4" />
              {streak} streak!
            </motion.span>
          )}
        </div>
        <span className="text-sm text-emerald-400">
          Score: {score}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: accentColor }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="rounded-2xl p-8 mb-6"
            style={{
              background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
              border: `1px solid ${accentColor}30`,
            }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${accentColor}30`, color: accentColor }}
            >
              {currentQuestion.category}
            </span>
            <h3 className="text-xl font-semibold text-white leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <motion.button
                  key={index}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                    showCorrect
                      ? 'bg-emerald-500/20 border-emerald-500'
                      : showWrong
                      ? 'bg-red-500/20 border-red-500'
                      : isSelected
                      ? 'border-2'
                      : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                  } border`}
                  style={{
                    borderColor: isSelected && !showResult ? accentColor : undefined,
                    backgroundColor: isSelected && !showResult ? `${accentColor}15` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        showCorrect
                          ? 'bg-emerald-500 text-white'
                          : showWrong
                          ? 'bg-red-500 text-white'
                          : isSelected
                          ? 'text-white'
                          : 'bg-gray-700 text-gray-300'
                      }`}
                      style={{
                        backgroundColor: isSelected && !showResult ? accentColor : undefined,
                      }}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={showCorrect ? 'text-emerald-400' : showWrong ? 'text-red-400' : 'text-gray-200'}>
                      {option}
                    </span>
                  </div>
                  {showCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                  {showWrong && <XCircle className="w-6 h-6 text-red-400" />}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 overflow-hidden"
              >
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">Explanation:</p>
                  <p className="text-gray-200">{currentQuestion.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button */}
          <div className="flex justify-center">
            {!showResult ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  selectedAnswer === null
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'text-white'
                }`}
                style={{
                  backgroundColor: selectedAnswer !== null ? accentColor : undefined,
                }}
              >
                Check Answer
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold"
                style={{ backgroundColor: accentColor }}
              >
                {currentIndex < shuffledQuestions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    View Results
                    <Trophy className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

