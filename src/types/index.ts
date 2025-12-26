export interface Command {
  id: string;
  command: string;
  description: string;
  example?: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface FlashCard {
  id: string;
  front: string;
  back: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export type Topic = 'git' | 'docker' | 'linux';

export interface TopicData {
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  commands: Command[];
  flashcards: FlashCard[];
  quizQuestions: QuizQuestion[];
}
