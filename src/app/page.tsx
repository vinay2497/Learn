'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GitBranch, Container, Terminal, Globe, ArrowRight, Sparkles, Brain, Layers, Zap, BookOpen, Trophy, Ship, Cloud, Database } from 'lucide-react';
import { topicsData } from '@/data';

const topicCards = [
  {
    id: 'git',
    icon: GitBranch,
    data: topicsData.git,
  },
  {
    id: 'docker',
    icon: Container,
    data: topicsData.docker,
  },
  {
    id: 'linux',
    icon: Terminal,
    data: topicsData.linux,
  },
  {
    id: 'networking',
    icon: Globe,
    data: topicsData.networking,
  },
  {
    id: 'kubernetes',
    icon: Ship,
    data: topicsData.kubernetes,
  },
  {
    id: 'aws',
    icon: Cloud,
    data: topicsData.aws,
  },
  {
    id: 'redis',
    icon: Database,
    data: topicsData.redis,
  },
];

const features = [
  {
    icon: Layers,
    title: 'Interactive Flashcards',
    description: 'Flip through cards to reinforce your memory with active recall',
    color: '#8B5CF6',
  },
  {
    icon: Brain,
    title: 'Adaptive Quizzes',
    description: 'Test your knowledge with randomized questions and track progress',
    color: '#06B6D4',
  },
  {
    icon: BookOpen,
    title: 'Command Reference',
    description: 'Searchable database of essential commands with examples',
    color: '#F59E0B',
  },
  {
    icon: Trophy,
    title: 'Track Progress',
    description: 'Mark cards as mastered and monitor your learning journey',
    color: '#10B981',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Floating decorations - hidden on mobile */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-40 left-[10%] w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden sm:block absolute top-60 right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 blur-sm"
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Learn smarter, not harder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-white">Master </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Dev Tools
            </span>
            <br />
            <span className="text-white">with </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Flashcards
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Interactive flashcards and quizzes to help you memorize Git, Docker, and Linux commands using spaced repetition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
          >
            <Link href="/git" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow text-sm sm:text-base"
              >
                Start Learning
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
            <Link href="#topics" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Browse Topics
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8"
          >
            {[
              { value: '500+', label: 'Commands', icon: Terminal },
              { value: '240+', label: 'Flashcards', icon: Layers },
              { value: '145+', label: 'Quiz Questions', icon: Brain },
              { value: '7', label: 'Topics', icon: BookOpen },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-violet-400" />
                <div className="text-2xl sm:text-4xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Choose Your Topic</h2>
            <p className="text-gray-400 text-sm sm:text-lg">
              Select a topic to start learning with flashcards and quizzes
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {topicCards.map((topic, index) => {
              const Icon = topic.icon;
              
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${topic.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 h-full cursor-pointer overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${topic.data.color}10, ${topic.data.color}05)`,
                        border: `1px solid ${topic.data.color}30`,
                      }}
                    >
                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${topic.data.color}15, transparent 70%)`,
                        }}
                      />

                      <div className="relative z-10">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                          style={{ backgroundColor: `${topic.data.color}20` }}
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: topic.data.color }} />
                        </div>

                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{topic.data.icon}</div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{topic.data.name}</h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2">{topic.data.description}</p>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                          <span>{topic.data.commands.length} cmds</span>
                          <span>•</span>
                          <span>{topic.data.flashcards.length} cards</span>
                          <span>•</span>
                          <span>{topic.data.quizQuestions.length} quiz</span>
                        </div>

                        <div
                          className="flex items-center gap-2 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all"
                          style={{ color: topic.data.color }}
                        >
                          Start Learning
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
              Learn with Proven Methods
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-4">
              Inspired by Anki and Quizlet, using active recall and spaced repetition.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-800/30 border border-gray-800"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-fuchsia-600/20 border border-violet-500/30"
          >
            <Zap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-violet-400" />
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Start learning now and master essential commands every developer needs.
            </p>
            <Link href="/git">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 mx-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-base sm:text-lg font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Started Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-xs sm:text-base">
          <p>
            Built with 💜 using Next.js, Tailwind CSS, and Framer Motion
          </p>
          <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm">
            Inspired by Anki & Quizlet • Learn smarter, not harder
          </p>
        </div>
      </footer>
    </div>
  );
}
