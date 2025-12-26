import TopicPage from '@/components/TopicPage';
import { dockerData } from '@/data';

export const metadata = {
  title: 'Learn Docker - DevCards',
  description: 'Master Docker containerization with flashcards, quizzes, and command reference',
};

export default function DockerPage() {
  return <TopicPage topic={dockerData} />;
}

