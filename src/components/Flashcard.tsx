'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FlashCard } from '@/types';
import { RotateCcw, ChevronLeft, ChevronRight, Shuffle, CheckCircle2, XCircle } from 'lucide-react';

interface FlashcardProps {
  cards: FlashCard[];
  accentColor: string;
}

export default function Flashcard({ cards, accentColor }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<FlashCard[]>([]);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setShuffledCards([...cards]);
    setIsLoading(false);
  }, [cards]);

  if (isLoading || shuffledCards.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16">
        <div className="animate-spin w-8 h-8 border-4 border-gray-600 border-t-transparent rounded-full" />
        <p className="mt-4 text-gray-400">Loading flashcards...</p>
      </div>
    );
  }

  const currentCard = shuffledCards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % shuffledCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
  };

  const handleShuffle = () => {
    const newShuffled = [...shuffledCards].sort(() => Math.random() - 0.5);
    setShuffledCards(newShuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const markAsKnown = () => {
    setKnownCards((prev) => new Set([...prev, currentCard.id]));
    handleNext();
  };

  const markAsUnknown = () => {
    setKnownCards((prev) => {
      const newSet = new Set(prev);
      newSet.delete(currentCard.id);
      return newSet;
    });
    handleNext();
  };

  const progress = ((currentIndex + 1) / shuffledCards.length) * 100;
  const knownCount = knownCards.size;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">
            Card {currentIndex + 1} of {shuffledCards.length}
          </span>
          <span className="text-sm text-emerald-400">
            {knownCount} mastered
          </span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: accentColor }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="mb-6"
      >
        <div
          onClick={handleFlip}
          className="cursor-pointer select-none"
        >
          <div
            className="relative w-full min-h-[300px] rounded-2xl p-8 flex flex-col justify-center items-center text-center transition-all duration-300"
            style={{
              background: isFlipped 
                ? `linear-gradient(135deg, ${accentColor}40, ${accentColor}20)`
                : `linear-gradient(135deg, ${accentColor}25, ${accentColor}10)`,
              border: `2px solid ${isFlipped ? accentColor : `${accentColor}50`}`,
              boxShadow: `0 8px 40px ${accentColor}30`,
            }}
          >
            {/* Category Badge */}
            <div className="absolute top-4 right-4 flex gap-2 items-center">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: `${accentColor}50`, color: 'white' }}
              >
                {currentCard.category}
              </span>
              {knownCards.has(currentCard.id) && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              )}
            </div>

            {/* Side Indicator */}
            <div className="absolute top-4 left-4">
              <span 
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ 
                  backgroundColor: isFlipped ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)', 
                  color: isFlipped ? '#10b981' : '#9ca3af' 
                }}
              >
                {isFlipped ? 'Answer' : 'Question'}
              </span>
            </div>

            {/* Content */}
            <div className="mt-8 mb-4 px-4">
              {!isFlipped ? (
                <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                  {currentCard.front}
                </p>
              ) : (
                <p className="text-lg md:text-xl text-white leading-relaxed font-mono bg-black/20 rounded-lg p-4">
                  {currentCard.back}
                </p>
              )}
            </div>

            {/* Flip Instruction */}
            <p className="text-sm text-gray-400 mt-4 flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              {isFlipped ? 'Click to see question' : 'Click to reveal answer'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Know/Don't Know Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={markAsUnknown}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors border border-red-500/40"
        >
          <XCircle className="w-5 h-5" />
          Still Learning
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={markAsKnown}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors border border-emerald-500/40"
        >
          <CheckCircle2 className="w-5 h-5" />
          Got It!
        </motion.button>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <ChevronLeft className="w-6 h-6 text-gray-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShuffle}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 border border-gray-700"
        >
          <Shuffle className="w-4 h-4" />
          Shuffle
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <ChevronRight className="w-6 h-6 text-gray-300" />
        </motion.button>
      </div>
    </div>
  );
}
