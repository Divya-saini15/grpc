import { Injectable } from '@nestjs/common';

interface Message {
  id: number;
  content: string;
}

interface MessageResponse {
  id: number;
  content: string;
}

@Injectable()
export class GrpcService {
  private messages: Message[] = [];

  createMessage(data: { content: string }): MessageResponse {
    const id = this.messages.length + 1;
    const message: Message = {
      id,
      content: data.content,
    };
    this.messages.push(message);
    return { id, content: message.content };
  }

  readMessage(data: { id: number }): MessageResponse {
    const message = this.messages.find((m) => m.id === data.id);
    return message ? { id: message.id, content: message.content } : null;
  }

  updateMessage(data: { id: number; content: string }): MessageResponse {
    const index = this.messages.findIndex((m) => m.id === data.id);
    if (index !== -1) {
      this.messages[index].content = data.content;
      return { id: data.id, content: data.content };
    }
    return null;
  }

  deleteMessage(data: { id: number }): MessageResponse {
    const index = this.messages.findIndex((m) => m.id === data.id);
    if (index !== -1) {
      const message = this.messages.splice(index, 1)[0];
      return { id: message.id, content: message.content };
    }
    return null;
  }
}