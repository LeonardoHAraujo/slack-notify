# Slack notify

Biblioteca para padronizar e facilitar notificações nos canais do Slack.

## Como utilizar

A classe `SlackNotifyClient` possui uma implementação default
que instancia baseado na variável de ambiente `SLACK_CHANNEL_URL`, considerando isso,
é importante que for utilizar essa abstração, possuir essa variável.

Sua utilização é feita por 1 método:
- `sendMessage` - Que recebe a mensagem de envio como parâmetro.

### Exemplo de utilização

```ts
import {
  SlackNotifyClient,
  defaultSenderClient,
} from '@develop-fapp/slack-notify'

export class ExampleNotification {
  constructor(
    private readonly client: SlackNotifyClient = defaultSenderClient
  ) {}

  async send(): Promise<void> {
    await this.client.sendMessage('Hello world!!!')
  }
}
```

