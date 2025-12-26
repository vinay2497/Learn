'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from '@/types';
import { Search, Terminal, Copy, Check, Filter } from 'lucide-react';

interface CommandListProps {
  commands: Command[];
  accentColor: string;
}

export default function CommandList({ commands, accentColor }: CommandListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(commands.map((cmd) => cmd.category)))];
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];

  const filteredCommands = commands.filter((cmd) => {
    const matchesSearch =
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cmd.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || cmd.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleCopy = async (command: string, id: string) => {
    await navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-emerald-400 bg-emerald-400/20';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'advanced':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-opacity-100 focus:outline-none text-white placeholder-gray-500 transition-colors"
            style={{ borderColor: searchTerm ? accentColor : undefined }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    selectedCategory === cat
                      ? 'text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === cat ? accentColor : undefined,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Level:</span>
            <div className="flex gap-2">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 rounded-lg text-sm capitalize transition-all ${
                    selectedDifficulty === diff
                      ? 'text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                  style={{
                    backgroundColor: selectedDifficulty === diff ? accentColor : undefined,
                  }}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredCommands.length} of {commands.length} commands
      </p>

      {/* Command List */}
      <div className="space-y-3">
        <AnimatePresence>
          {filteredCommands.map((cmd, index) => (
            <motion.div
              key={cmd.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.02 }}
              className="group rounded-xl p-5 bg-gray-800/30 border border-gray-800 hover:border-opacity-50 transition-all"
              style={{ '--hover-color': accentColor } as React.CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Terminal className="w-4 h-4" style={{ color: accentColor }} />
                    <code
                      className="font-mono text-lg font-semibold"
                      style={{ color: accentColor }}
                    >
                      {cmd.command}
                    </code>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyColor(cmd.difficulty)}`}>
                      {cmd.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{cmd.description}</p>
                  {cmd.example && (
                    <p className="text-sm text-gray-500 font-mono">
                      Example: <span className="text-gray-400">{cmd.example}</span>
                    </p>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy(cmd.command, cmd.id)}
                  className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                >
                  {copiedId === cmd.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-12">
          <Terminal className="w-16 h-16 mx-auto mb-4 text-gray-700" />
          <p className="text-gray-500 text-lg">No commands found</p>
          <p className="text-gray-600 text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

