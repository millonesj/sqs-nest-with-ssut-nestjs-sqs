import { Controller, Get, Query } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { Message } from 'aws-sdk/clients/sqs';
import { MessageProducer } from './producer.service';
//import { Message } from '@app/commons';

@Controller()
export class SqsProducerController {
  constructor(private readonly messageProducer: MessageProducer) {}

  @Get('send')
  async sendQueue(@Query('message') message: string) {
    await this.messageProducer.sendMessage({
      id: 'uuid',
      body: message,
    });

    return 'ok';
  }
}
