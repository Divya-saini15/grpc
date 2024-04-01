import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GrpcService } from './grpc.service';

interface CreateMessageRequest {
  content: string;
}

interface ReadMessageRequest {
  id: number;
}

interface UpdateMessageRequest {
  id: number;
  content: string;
}

interface DeleteMessageRequest {
  id: number;
}

interface MessageResponse {
  id: number;
  content: string;
}

@Controller()
export class GrpcController {
  constructor(private readonly grpcService: GrpcService) { 

    
  }

  @GrpcMethod('GrpcService', 'CreateMessage')
  createMessage(data: CreateMessageRequest): MessageResponse {
    return this.grpcService.createMessage(data);
  }

  @GrpcMethod('GrpcService', 'ReadMessage')
  readMessage(data: ReadMessageRequest): MessageResponse {
    return this.grpcService.readMessage(data);
  }

  @GrpcMethod('GrpcService', 'UpdateMessage')
  updateMessage(data: UpdateMessageRequest): MessageResponse {
    return this.grpcService.updateMessage(data);
  }

  @GrpcMethod('GrpcService', 'DeleteMessage')
  deleteMessage(data: DeleteMessageRequest): MessageResponse {
    return this.grpcService.deleteMessage(data);
  }
}