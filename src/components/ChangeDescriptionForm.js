// @flow
import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

type Props = {
  onSubmit: () => void,
  onInputChange: (e: SyntheticEvent<HTMLInputElement>, value: { value: string }) => void,
  inputValue: ?string,
}

const ChangeDescriptionForm = ({
  onSubmit, onInputChange, inputValue,
}: Props) => (
  <Form onSubmit={onSubmit}>
    <Form.Group>
      <TextArea
        autoHeight
        onChange={onInputChange}
        placeholder="Enter the description of your change (optional)"
        value={inputValue}
      />
    </Form.Group>
    <Form.Group>
      <Button>Submit Description</Button>
      <Button compact size="mini">No description</Button>
    </Form.Group>
  </Form>
);

export default ChangeDescriptionForm;
