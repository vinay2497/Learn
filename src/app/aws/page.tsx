import TopicPage from '@/components/TopicPage';
import { awsData } from '@/data';

export const metadata = {
  title: 'Learn AWS - DevCards',
  description: 'Master Amazon Web Services with flashcards, quizzes, and command reference',
};

export default function AWSPage() {
  return <TopicPage topic={awsData} />;
}

