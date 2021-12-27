import React from 'react';

import { CursorPagination } from '@/modules/github/api';

export interface UseCursorPaginationOptions extends CursorPagination {
  size?: number;
}

export interface UseCursorPaginationValue extends CursorPagination {
  next: (cursor?: string | null) => void;
  previous: (cursor?: string | null) => void;
}

export const useCursorPagination = (props: UseCursorPaginationOptions): UseCursorPaginationValue => {
  const defaultSize = props.size || 5;

  const [first, setFirst] = React.useState<UseCursorPaginationOptions['size']>(defaultSize);
  const [last, setLast] = React.useState<UseCursorPaginationOptions['size']>();
  const [after, setAfter] = React.useState<UseCursorPaginationOptions['after']>(props.after);
  const [before, setBefore] = React.useState<UseCursorPaginationOptions['before']>(props.before);

  const setPagination = (options: UseCursorPaginationOptions) => {
    setFirst(options.first);
    setLast(options.last);
    setAfter(options.after);
    setBefore(options.before);
  };

  const next = (cursor?: string | null) => {
    setPagination({
      first: defaultSize,
      after: cursor,
      last: undefined,
      before: null,
    });
  };

  const previous = (cursor?: string | null) => {
    setPagination({
      first: undefined,
      after: null,
      last: defaultSize,
      before: cursor,
    });
  };

  return {
    first,
    last,
    after,
    before,
    next,
    previous,
  };
};
