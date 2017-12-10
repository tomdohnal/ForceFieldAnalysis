// @flow
import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

type Props = {
  onSubmit: () => void,
  onInputChange: (e: SyntheticEvent<HTMLInputElement>, value: { value: string }) => void,
  inputValue: ?string,
}

const ChangeNameForm = ({
  onSubmit, onInputChange, inputValue,
}: Props) => (
  <Form onSubmit={onSubmit}>
    <Form.Group>
      <Input
        size="massive"
        style={{ width: '100%' }}
        onChange={onInputChange}
        placeholder="Enter the name of your change"
        value={inputValue}
      />
    </Form.Group>
    <Form.Group>
      <Button>Submit Name</Button>
    </Form.Group>
  </Form>
);

export default ChangeNameForm;
