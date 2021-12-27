import styled from '@emotion/styled';
import { gray, violet } from '@radix-ui/colors';

import * as Modal from '@/components/system/Modal';

export const CreateIssueModalRoot = styled(Modal.StyledContent)({
  background: 'white',
});

export const CreateIssueModalHeader = styled.header({
  padding: 16,
  borderBottom: '1px solid black',
});

export const CreateIssueModalTitle = styled(Modal.Title)({
  fontSize: 24,
});

export const CreateIssueModalBody = styled.div({
  display: 'grid',
  gap: 8,
  padding: 16,
});

export const CreateIssueModalInput = styled.input({
  font: 'inherit',
  appearance: 'none',
  letterSpacing: 'inherit',
  color: 'currentColor',
  border: 0,
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
  outline: 0,
  display: 'block',
  width: '100%',

  // Reset Firefox invalid required input style
  '&:invalid': {
    boxShadow: 'none',
  },
  '&::-webkit-search-decoration': {
    // Remove the padding when type=search.
    WebkitAppearance: 'none',
  },

  fontSize: 16,
  borderRadius: 4,
  padding: '6px 8px',
  background: gray.gray3,
  boxShadow: `inset 0px 0px 0px 2px ${gray.gray7}`,

  '&:hover': {
    boxShadow: `inset 0px 0px 0px 2px ${gray.gray8}`,
  },

  '&:focus-within': {
    boxShadow: `inset 0px 0px 0px 1px ${violet.violet8}, 0px 0px 0px 1px ${violet.violet8}`,
  },
});

export const CreateIssueModalFooter = styled.footer({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 16,
});
