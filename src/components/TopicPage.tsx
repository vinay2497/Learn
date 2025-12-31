'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TopicData } from '@/types';
import Flashcard from './Flashcard';
import Quiz from './Quiz';
import CommandList from './CommandList';
import { BookOpen, Brain, Terminal, Layers } from 'lucide-react';

interface TopicPageProps {
  topic: TopicData;
}

type TabType = 'flashcards' | 'quiz' | 'commands';

const tabs = [
  { id: 'flashcards' as TabType, label: 'Flashcards', icon: Layers },
  { id: 'quiz' as TabType, label: 'Quiz', icon: Brain },
  { id: 'commands' as TabType, label: 'Reference', icon: Terminal },
];

export default function TopicPage({ topic }: TopicPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('flashcards');

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-6 sm:pb-8 px-3 sm:px-4">
      {/* Compact Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-4 sm:mb-6">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
          <span className="text-3xl sm:text-5xl">{topic.icon}</span>
          <h1 className={`text-2xl sm:text-4xl font-bold bg-gradient-to-r ${topic.gradient} bg-clip-text text-transparent`}>
            {topic.name}
          </h1>
        </div>
        <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 px-2">{topic.description}</p>
        
        {/* Stats - Compact */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: topic.color }} />
            <span>{topic.flashcards.length} Cards</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: topic.color }} />
            <span>{topic.quizQuestions.length} Quiz</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: topic.color }} />
            <span>{topic.commands.length} Cmds</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Mobile Optimized */}
      <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
        <div className="flex justify-center gap-1 sm:gap-2 bg-gray-900/50 p-1 rounded-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all text-xs sm:text-sm ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
                style={{
                  backgroundColor: isActive ? `${topic.color}25` : 'transparent',
                }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? topic.color : undefined }} />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {activeTab === 'flashcards' && (
          <Flashcard cards={topic.flashcards} accentColor={topic.color} />
        )}
        {activeTab === 'quiz' && (
          <Quiz questions={topic.quizQuestions} accentColor={topic.color} />
        )}
        {activeTab === 'commands' && (
          <CommandList commands={topic.commands} accentColor={topic.color} />
        )}
      </motion.div>
    </div>
  );
}
