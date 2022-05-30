import { Exclude } from 'class-transformer';
import { Flow } from 'src/shared/types';

export class Chatbot {
  id: number;

  @Exclude()
  projectId: number;

  name: string;

  version: string;

  flow: Flow;

  enabled: boolean;

  error?: string;

  createdAt: Date;

  updatedAt: Date;
}
