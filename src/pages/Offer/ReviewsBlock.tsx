import {ReviewsList} from './ReviewsList.tsx';
import {ReviewForm} from './ReviewForm.tsx';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {
  getCommentsErrorStatus, getCommentsFiltered,
  getCommentsLoadingStatus, getTotalComments
} from '../../store/slices/comments/commentsSelectors.ts';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {fetchCommentsAction} from '../../store/apiActions/commentsActions.ts';
import {useEffect} from 'react';
import {Spinner} from '../../components/Spinner.tsx';

export function ReviewsBlock({offerId} : {offerId: string}) {
  const commentsIsLoading = useAppSelector(getCommentsLoadingStatus);
  const commentsHasError = useAppSelector(getCommentsErrorStatus);
  const comments = useAppSelector(getCommentsFiltered);
  const totalComments = useAppSelector(getTotalComments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!commentsIsLoading && commentsHasError){
      dispatch(fetchCommentsAction(offerId));
    }
  }, [dispatch, commentsHasError, commentsIsLoading, offerId]);

  if (commentsIsLoading) {
    return <Spinner />;
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{totalComments}</span>
      </h2>
      <ReviewsList reviews={comments}/>
      <ReviewForm offerId={offerId}/>
    </section>);
}
