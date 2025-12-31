import TopicPage from '@/components/TopicPage';
import { redisData } from '@/data';

export const metadata = {
  title: 'Learn Redis - DevCards',
  description: 'Master Redis in-memory data store with flashcards, quizzes, and command reference',
};

export default function RedisPage() {
  return <TopicPage topic={redisData} />;
}

