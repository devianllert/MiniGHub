import * as React from 'react';

import * as S from './styled';

export interface PaginationProps {
  onNext: () => void;
  onPrevious: () => void;
  canNextPage: boolean;
  canPreviousPage: boolean;
}

export const Pagination = (props: PaginationProps) => {
  const {
    onNext,
    onPrevious,
    canNextPage,
    canPreviousPage,
  } = props;

  return (
    <S.PaginationRoot>
      <S.PageButton onClick={onPrevious} disabled={canPreviousPage}>
        Previous
      </S.PageButton>

      <S.PageButton onClick={onNext} disabled={canNextPage}>
        Next
      </S.PageButton>
    </S.PaginationRoot>
  );
};
