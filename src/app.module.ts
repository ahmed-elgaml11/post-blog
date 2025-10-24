import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [PostsModule, MongooseModule.forRoot('mongodb+srv://backend2:asdfg12345^@cluster0.hz57cli.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'), UsersModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
