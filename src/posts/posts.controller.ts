import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { transformToDtoResponse } from '../interceptors/transform-dto.interceptor';
import { ResponsePostDto } from './dto/response-post.dto';
import { ValidateMongoIdPipe } from 'src/pipes/validate-mongo.pipe';

@Controller('posts')
@transformToDtoResponse(ResponsePostDto)
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Post()
    create(@Body() body: CreatePostDto) {
        return this.postService.create(body)
    }

    @Get()
    getAll() {
        return this.postService.getAll()
    }

    @Get(':id' )
    getOne(@Param('id', ValidateMongoIdPipe) id: string){
        return this.postService.getOne(id)
    }
}
