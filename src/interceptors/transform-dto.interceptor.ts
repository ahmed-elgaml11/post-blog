
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UseInterceptors } from '@nestjs/common';
import type { ClassConstructor } from 'class-transformer';
import { plainToInstance }  from 'class-transformer';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponsePostDto } from '../posts/dto/response-post.dto';

export function transformToDtoResponse<T>(dto: ClassConstructor<T>){
  return UseInterceptors(new TrasformToDtoInterceptor(dto))
}


@Injectable()
export class TrasformToDtoInterceptor<T> implements NestInterceptor {
  constructor(private readonly dtoClass: ClassConstructor<T>){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) => {
          return plainToInstance(this.dtoClass, data, {
            excludeExtraneousValues: true
          })
        }),
      );
  }
}
