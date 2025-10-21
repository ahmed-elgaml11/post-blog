
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({required: true})
  name: string;

  @Prop()
  description: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);
