import { gitData } from './git';
import { dockerData } from './docker';
import { linuxData } from './linux';
import { Topic, TopicData } from '@/types';

export const topicsData: Record<Topic, TopicData> = {
  git: gitData,
  docker: dockerData,
  linux: linuxData,
};

export { gitData, dockerData, linuxData };

