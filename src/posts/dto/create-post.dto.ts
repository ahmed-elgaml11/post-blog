import { IsString, IsNotEmpty } from "class-validator"

export class CreatePostDto {
     @IsNotEmpty()
     @IsString()
    name: string
    
    @IsNotEmpty()
    description: string
}