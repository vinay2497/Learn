import TopicPage from '@/components/TopicPage';
import { linuxData } from '@/data';

export const metadata = {
  title: 'Learn Linux - DevCards',
  description: 'Master Linux commands with flashcards, quizzes, and command reference',
};

export default function LinuxPage() {
  return <TopicPage topic={linuxData} />;
}

