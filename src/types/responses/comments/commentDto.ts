import {UserCompactDto} from '../userCompactDto.ts';

export type CommentDto = {
  id: number;
  date: Date;
  user: UserCompactDto;
  comment: string;
  rating: number;
}
