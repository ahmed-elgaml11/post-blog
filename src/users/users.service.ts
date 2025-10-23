import { Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class UsersService {
    constructor(private readonly postSerive: PostsService) {}
}
