// @flow
import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import { moveCaretAtTheEnd } from '../helpers';

type Props = {
  onSubmit: () => void,
  onNoDescriptionButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  onInputChange: (e: SyntheticEvent<HTMLInputElement>, value: { value: string }) => void,
  inputValue: ?string,
  newlyDisplayed: boolean,
}

const ChangeDescriptionForm = ({
  onSubmit, onInputChange, onNoDescriptionButtonClick, inputValue, newlyDisplayed,
}: Props) => (
  <Form onSubmit={onSubmit}>
    <Form.Group>
      <TextArea
        autoHeight
        onChange={onInputChange}
        placeholder="Enter the description of your change (optional)"
        value={inputValue}
        onFocus={moveCaretAtTheEnd}
        autoFocus={newlyDisplayed}
      />
    </Form.Group>
    <Form.Group>
      <Button>Submit Description</Button>
      <Button onClick={onNoDescriptionButtonClick} compact size="mini">No description</Button>
    </Form.Group>
  </Form>
);

export default ChangeDescriptionForm;
