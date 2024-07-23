import { useState } from 'react';
import CommentSkeleton from '~/pages/comments/CommentSkeleton.jsx';
import ReviewCard from '~/features/reviews/ReviewCard.jsx';
import PaginationButtons from '~/pages/comments/PaginationButtons.jsx';
import { usePagePagination } from '~/hooks/usePagePagination.js';
import { useReviews } from '~/features/reviews/useReviews.js';

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(-1);
  const { reviews, isPending } = useReviews();

  const itemsPerPage = 4;

  const [currentItems, pageNumbers, paginate] = usePagePagination(
    reviews,
    itemsPerPage,
  );

  return (
    <>
      {isPending ? (
        <CommentSkeleton />
      ) : (
        <div className="grid gap-8">
          <ReviewCard
            reviews={currentItems}
            activeReview={activeReview}
            onToggleExpand={setActiveReview}
          />
          <PaginationButtons pageNumbers={pageNumbers} paginate={paginate} />
        </div>
      )}
    </>
  );
}
