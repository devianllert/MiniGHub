import * as React from 'react';

import * as S from './styled';

export interface MainHeaderProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const MainHeader = (props: MainHeaderProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.MainHeaderRoot>{children}</S.MainHeaderRoot>
  );
};
