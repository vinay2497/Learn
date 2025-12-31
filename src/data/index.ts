import { gitData } from './git';
import { dockerData } from './docker';
import { linuxData } from './linux';
import { networkingData } from './networking';
import { kubernetesData } from './kubernetes';
import { awsData } from './aws';
import { redisData } from './redis';
import { Topic, TopicData } from '@/types';

export const topicsData: Record<Topic, TopicData> = {
  git: gitData,
  docker: dockerData,
  linux: linuxData,
  networking: networkingData,
  kubernetes: kubernetesData,
  aws: awsData,
  redis: redisData,
};

export { gitData, dockerData, linuxData, networkingData, kubernetesData, awsData, redisData };
