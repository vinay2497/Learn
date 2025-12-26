import TopicPage from '@/components/TopicPage';
import { gitData } from '@/data';

export const metadata = {
  title: 'Learn Git - DevCards',
  description: 'Master Git version control with flashcards, quizzes, and command reference',
};

export default function GitPage() {
  return <TopicPage topic={gitData} />;
}

