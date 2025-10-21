import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/posts/schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { ResponsePostDto } from './dto/response-post.dto';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) { }


    async create(data: CreatePostDto) {
        const post = await new this.postModel(data).save()
        // const postDto = new ResponsePostDto()

        // postDto.name = post.name
        // postDto._id = post._id.toString()
        // postDto.description = post.description

        // return postDto
        return post 

    }

    async getAll () {
        const posts = await this.postModel.find()

    //     return posts.map(post => {
    //         return {
    //             _id: post._id.toString(),
    //             name: post.name,
    //             description: post.description
    //         }
    //     })
    // }
    return posts
    }


    async getOne(id: string){
        const post = await this.postModel.findById(id)
        if(!post){
            throw new NotFoundException(`post with id: ${id} not found`)
        }
        return post
    }
}
