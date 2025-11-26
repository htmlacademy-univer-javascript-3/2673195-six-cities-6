import {CommentDto} from '../types/responses/comments/commentDto.ts';

export const reviews: CommentDto[] = [
  {
    id: 0,
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n',
    authorId: 1,
    date: new Date(2019, 4, 1),
  }
];
