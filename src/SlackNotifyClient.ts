import * as dotenv from 'dotenv'
import { IncomingWebhook } from '@slack/webhook';

dotenv.config()

export class SlackNotifyClient {
  constructor(
    private channelUrl: string = process.env.SLACK_CHANNEL_URL
  ) {}

  async sendMessage(text: string): Promise<void> {
    try {
      if (!this.channelUrl && !text)
        throw new Error('Invalid channelUrl or message.');

      const webhook = new IncomingWebhook(this.channelUrl);
      await webhook.send({ text });

    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export const defaultSenderClient = new SlackNotifyClient();
