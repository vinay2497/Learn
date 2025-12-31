import TopicPage from '@/components/TopicPage';
import { kubernetesData } from '@/data';

export const metadata = {
  title: 'Learn Kubernetes - DevCards',
  description: 'Master Kubernetes container orchestration with flashcards, quizzes, and command reference',
};

export default function KubernetesPage() {
  return <TopicPage topic={kubernetesData} />;
}

