import {useState} from 'react';
import {useAppDispatch} from '../hooks/useAppDispatch.ts';
import {changeOfferFavouriteStatus, fetchFavouriteAction} from '../store/apiActions/favouriteActions.ts';
import {AuthorizationStatus, BookmarkButtonType} from '../const.ts';
import {getBookmarkButtonStyle} from '../utils/bookmarkButtonUtils.ts';
import {useAppSelector} from '../hooks/useAppSelector.ts';
import {getAuthorizationStatus} from '../store/slices/user/userSelectors.ts';
import {fetchNearbyAction, fetchOfferAction, fetchOffersAction} from '../store/apiActions/offersActions.ts';
import {getOffer} from '../store/slices/offer/offerSelectors.ts';

interface BookmarkButtonProps {
  offerId: string;
  isFavorite: boolean;
  styleType: BookmarkButtonType;
}

export function BookmarkButton({ offerId, isFavorite, styleType }: BookmarkButtonProps) {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const currentOffer = useAppSelector(getOffer);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const { buttonClass, iconClass, width, height } = getBookmarkButtonStyle(styleType);
  const activeClass = isFavorite ? `${buttonClass}--active` : '';

  const handleClick = () => {
    if (isSubmitting || authStatus !== AuthorizationStatus.Auth) {
      return;
    }

    setIsSubmitting(true);

    dispatch(changeOfferFavouriteStatus({
      offerId,
      newIsFavorite: !isFavorite,
    }))
      .then((result) => {
        if (changeOfferFavouriteStatus.fulfilled.match(result)) {
          dispatch(fetchOffersAction());
          dispatch(fetchFavouriteAction());
          if (styleType === BookmarkButtonType.Offer) {
            dispatch(fetchOfferAction(offerId));
          }

          if (styleType === BookmarkButtonType.NearPlace && currentOffer) {
            dispatch(fetchNearbyAction(currentOffer.id));
          }
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <button
      className={`${buttonClass} button ${activeClass}`}
      type="button"
      onClick={handleClick}
      disabled={isSubmitting || authStatus !== AuthorizationStatus.Auth}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg className={iconClass} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
