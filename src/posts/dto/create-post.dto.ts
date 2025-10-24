import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty } from "class-validator"

export class CreatePostDto {
    @ApiProperty({
        description: 'post title',
        default: 'post title'
    })
    @IsNotEmpty()
    @IsString()
    name: string


    @ApiProperty()
    @IsNotEmpty()
    description: string
}