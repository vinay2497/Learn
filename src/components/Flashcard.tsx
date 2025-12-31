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
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
      {/* Progress Bar */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs sm:text-sm text-gray-400">
            Card {currentIndex + 1} of {shuffledCards.length}
          </span>
          <span className="text-xs sm:text-sm text-emerald-400">
            {knownCount} mastered
          </span>
        </div>
        <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
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
        className="mb-4 sm:mb-6"
      >
        <div
          onClick={handleFlip}
          className="cursor-pointer select-none touch-manipulation"
        >
          <div
            className="relative w-full min-h-[250px] sm:min-h-[300px] rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col justify-center items-center text-center transition-all duration-300"
            style={{
              background: isFlipped 
                ? `linear-gradient(135deg, ${accentColor}40, ${accentColor}20)`
                : `linear-gradient(135deg, ${accentColor}25, ${accentColor}10)`,
              border: `2px solid ${isFlipped ? accentColor : `${accentColor}50`}`,
              boxShadow: `0 8px 40px ${accentColor}30`,
            }}
          >
            {/* Category Badge */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 items-center">
              <span
                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: `${accentColor}50`, color: 'white' }}
              >
                {currentCard.category}
              </span>
              {knownCards.has(currentCard.id) && (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              )}
            </div>

            {/* Side Indicator */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
              <span 
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                style={{ 
                  backgroundColor: isFlipped ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)', 
                  color: isFlipped ? '#10b981' : '#9ca3af' 
                }}
              >
                {isFlipped ? 'Answer' : 'Question'}
              </span>
            </div>

            {/* Content */}
            <div className="mt-6 sm:mt-8 mb-2 sm:mb-4 px-2 sm:px-4">
              {!isFlipped ? (
                <p className="text-base sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
                  {currentCard.front}
                </p>
              ) : (
                <p className="text-sm sm:text-lg md:text-xl text-white leading-relaxed font-mono bg-black/20 rounded-lg p-3 sm:p-4">
                  {currentCard.back}
                </p>
              )}
            </div>

            {/* Flip Instruction */}
            <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2">
              <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
              {isFlipped ? 'Tap to see question' : 'Tap to reveal answer'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Know/Don't Know Buttons */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={markAsUnknown}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors border border-red-500/40 text-xs sm:text-base"
        >
          <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline">Still</span> Learning
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={markAsKnown}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors border border-emerald-500/40 text-xs sm:text-base"
        >
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
          Got It!
        </motion.button>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShuffle}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 border border-gray-700 text-xs sm:text-base"
        >
          <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
          Shuffle
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        </motion.button>
      </div>
    </div>
  );
}
