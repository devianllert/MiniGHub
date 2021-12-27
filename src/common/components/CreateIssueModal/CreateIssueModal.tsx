import * as React from 'react';
import * as Modal from '@/components/system/Modal';

import * as S from './styled';

export interface CreateIssueModalProps {
  onCreate: (title: string, description: string) => void;
}

export const CreateIssueModal = (props: CreateIssueModalProps): JSX.Element => {
  const {
    onCreate,
  } = props;

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <S.CreateIssueModalRoot>
      <S.CreateIssueModalHeader>
        <S.CreateIssueModalTitle>New Issue</S.CreateIssueModalTitle>
      </S.CreateIssueModalHeader>

      <S.CreateIssueModalBody>
        <S.CreateIssueModalInput
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
          type="text"
          placeholder="Title"
        />

        <S.CreateIssueModalInput
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
          as="textarea"
          placeholder="Description"
        />
      </S.CreateIssueModalBody>

      <S.CreateIssueModalFooter>
        <Modal.Close asChild>
          <button type="button">Cancel</button>
        </Modal.Close>

        <button type="button" onClick={() => onCreate(title, description)}>Accept</button>
      </S.CreateIssueModalFooter>
    </S.CreateIssueModalRoot>
  );
};
