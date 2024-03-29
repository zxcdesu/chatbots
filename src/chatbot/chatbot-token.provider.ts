import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';

@Injectable()
export class ChatbotTokenProvider {
  constructor(private readonly configService: ConfigService) {}

  get(id: number, projectId: number): string {
    return sign(
      {
        type: 'Chatbot',
        id,
        ws: this.configService.get<string>('CHATBOTS_EDGE_URL'),
        project: {
          id: projectId,
        },
      },
      this.configService.get<string>('SECRET'),
    );
  }
}
