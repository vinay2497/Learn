'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GitBranch, Container, Terminal, ArrowRight, Sparkles, Brain, Layers, Zap, BookOpen, Trophy } from 'lucide-react';
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
];

const features = [
  {
    icon: Layers,
    title: 'Interactive Flashcards',
    description: 'Flip through cards to reinforce your memory with active recall technique',
    color: '#8B5CF6',
  },
  {
    icon: Brain,
    title: 'Adaptive Quizzes',
    description: 'Test your knowledge with randomized questions and track your progress',
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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Floating decorations */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-60 right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-[20%] w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 blur-sm"
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Learn smarter, not harder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Master </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Developer Tools
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
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Interactive flashcards and quizzes to help you memorize Git commands, 
            Docker operations, and Linux essentials using proven spaced repetition techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <Link href="/git">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="#topics">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Browse Topics
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '100+', label: 'Commands', icon: Terminal },
              { value: '45+', label: 'Flashcards', icon: Layers },
              { value: '30+', label: 'Quiz Questions', icon: Brain },
              { value: '3', label: 'Topics', icon: BookOpen },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-violet-400" />
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Topic</h2>
            <p className="text-gray-400 text-lg">
              Select a topic to start learning with flashcards and quizzes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                      className="group relative rounded-3xl p-8 h-full cursor-pointer overflow-hidden"
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
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                          style={{ backgroundColor: `${topic.data.color}20` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: topic.data.color }} />
                        </div>

                        <div className="text-4xl mb-4">{topic.data.icon}</div>

                        <h3 className="text-2xl font-bold text-white mb-3">{topic.data.name}</h3>
                        <p className="text-gray-400 mb-6">{topic.data.description}</p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                          <span>{topic.data.commands.length} commands</span>
                          <span>•</span>
                          <span>{topic.data.flashcards.length} cards</span>
                          <span>•</span>
                          <span>{topic.data.quizQuestions.length} questions</span>
                        </div>

                        <div
                          className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                          style={{ color: topic.data.color }}
                        >
                          Start Learning
                          <ArrowRight className="w-5 h-5" />
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
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Learn with Proven Methods
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our learning tools are inspired by Anki and Quizlet, using active recall 
              and spaced repetition to help you remember commands long-term.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-gray-800/30 border border-gray-800"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-fuchsia-600/20 border border-violet-500/30"
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-violet-400" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
              Start learning now and master the essential commands that every developer needs to know.
            </p>
            <Link href="/git">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 mx-auto px-10 py-5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-lg font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>
            Built with 💜 using Next.js, Tailwind CSS, and Framer Motion
          </p>
          <p className="mt-2 text-sm">
            Inspired by Anki & Quizlet • Learn smarter, not harder
          </p>
        </div>
      </footer>
    </div>
  );
}
