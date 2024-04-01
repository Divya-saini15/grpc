import { Module } from '@nestjs/common';
import { GrpcController } from './grpc/grpc.controller';
import { GrpcService } from './grpc/grpc.service';

@Module({
  imports: [],
  controllers: [GrpcController],
  providers: [GrpcService],
})
export class AppModule {}