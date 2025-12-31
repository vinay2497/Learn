import TopicPage from '@/components/TopicPage';
import { networkingData } from '@/data/networking';

export const metadata = {
  title: 'Learn Networking - DevCards',
  description: 'Master networking fundamentals with interactive flashcards and quizzes',
};

export default function NetworkingPage() {
  return <TopicPage topic={networkingData} />;
}

