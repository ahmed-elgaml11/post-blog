import { IsString, IsNotEmpty } from "class-validator"

export class UpdatePostDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    description: string
}