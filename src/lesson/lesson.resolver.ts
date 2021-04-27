import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
  ) {
  }

  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdasd1234a',
      name: 'Physics Class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    };
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('name') name: String,
    @Args('startDate') startDate: String,
    @Args('endDate') endDate: String,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
