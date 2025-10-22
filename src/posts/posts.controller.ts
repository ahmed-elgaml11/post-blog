import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseInterceptors } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { transformToDtoResponse } from '../interceptors/transform-dto.interceptor';
import { ResponsePostDto } from './dto/response-post.dto';
import { ValidateMongoIdPipe } from 'src/pipes/validate-mongo.pipe';
import { UpdatePostDto } from './dto/update-post.dto';
import { UpdatePostPatchDto } from './dto/update-post-patch.dto';

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

    @Get(':id')
    async getOne(@Param('id', ValidateMongoIdPipe) id: string) {
        return this.postService.getOne(id)

    }


    @Put(':id')
    async update(@Param('id', ValidateMongoIdPipe) id: string, @Body() body: UpdatePostDto) {
        return this.postService.update(id, body)
    }



    @Patch(':id')
    async updateOne(@Param('id', ValidateMongoIdPipe) id: string, @Body() body: UpdatePostPatchDto) {
        return this.postService.updateOne(id, body)
    }


    @Delete(':id')
    async deleteOne(@Param('id', ValidateMongoIdPipe) id: string){
        return this.postService.deleteOne(id)
    }



}
