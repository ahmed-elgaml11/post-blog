import { Expose } from "class-transformer"

export class ResponsePostDto {
    @Expose()
    _id: string
    @Expose()
    name: string
     @Expose()
    description: string
}