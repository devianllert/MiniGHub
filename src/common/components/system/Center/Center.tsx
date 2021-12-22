import * as React from 'react';

import * as S from './styled';

export interface CenterProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const Center = (props: CenterProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.CenterRoot>{children}</S.CenterRoot>
  );
};
