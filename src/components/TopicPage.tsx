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
  { id: 'flashcards' as TabType, label: 'Flashcards', icon: Layers, description: 'Learn with interactive cards' },
  { id: 'quiz' as TabType, label: 'Quiz', icon: Brain, description: 'Test your knowledge' },
  { id: 'commands' as TabType, label: 'Reference', icon: Terminal, description: 'Browse all commands' },
];

export default function TopicPage({ topic }: TopicPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('flashcards');

  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      {/* Compact Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-5xl">{topic.icon}</span>
          <h1 className={`text-4xl font-bold bg-gradient-to-r ${topic.gradient} bg-clip-text text-transparent`}>
            {topic.name}
          </h1>
        </div>
        <p className="text-gray-400 mb-4">{topic.description}</p>
        
        {/* Stats - Compact */}
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <BookOpen className="w-4 h-4" style={{ color: topic.color }} />
            <span>{topic.flashcards.length} Flashcards</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Brain className="w-4 h-4" style={{ color: topic.color }} />
            <span>{topic.quizQuestions.length} Quiz Questions</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Terminal className="w-4 h-4" style={{ color: topic.color }} />
            <span>{topic.commands.length} Commands</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Compact */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex justify-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
                style={{
                  backgroundColor: isActive ? `${topic.color}25` : 'transparent',
                  border: `1px solid ${isActive ? `${topic.color}50` : 'transparent'}`,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: isActive ? topic.color : undefined }} />
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
