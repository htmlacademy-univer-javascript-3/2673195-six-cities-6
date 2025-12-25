import {UserCompactDto} from '../responses/userCompactDto.ts';

export type ReviewData = {
  id: number;
  date: Date;
  user: UserCompactDto;
  comment: string;
  rating: number;
}
