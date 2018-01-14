// @flow
import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import { moveCaretAtTheEnd } from '../helpers';

type Props = {
  onSubmit: () => void,
  onInputChange: (e: SyntheticEvent<HTMLInputElement>, value: { value: string }) => void,
  inputValue: ?string,
  newlyDisplayed: boolean,
}

const ChangeNameForm = ({
  onSubmit, onInputChange, inputValue, newlyDisplayed,
}: Props) => (
  <Form onSubmit={onSubmit}>
    <Form.Group>
      <Input
        size="massive"
        style={{ width: '100%' }}
        onChange={onInputChange}
        placeholder="Name of your change"
        value={inputValue}
        onFocus={moveCaretAtTheEnd}
        autoFocus={newlyDisplayed}
      />
    </Form.Group>
    <Form.Group>
      <Button>Submit Name</Button>
    </Form.Group>
  </Form>
);

export default ChangeNameForm;
