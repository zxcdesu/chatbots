import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import { ChatbotTemplateModule } from './chatbot-template/chatbot-template.module';
import { ChatbotModule } from './chatbot/chatbot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().uri().required(),
        PORT: Joi.number().default(8080),
        SECRET: Joi.string().required(),
        AUTHORIZATION_URL: Joi.string().uri().required(),
        CHATBOTS_EDGE_URL: Joi.string().uri().required(),
        CHATBOTS_CONTAINER_URLS: Joi.string().required(),
      }),
    }),
    AuthModule,
    ChatbotModule,
    ChatbotTemplateModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
