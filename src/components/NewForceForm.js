// @flow
import React, { Component } from 'react';
import { Form, Input, Button, Label } from 'semantic-ui-react';

import { MIN_STRENGTH, MAX_STRENGTH } from '../constants/index';
import { COLORS } from '../constants/styles';
import { Text } from './common/index';

type State = {
  newForceName: string,
  newForceError: boolean,
  newForceErrorText: string,
  newForceStrength: number,
};

type Props = {
  submitButtonText: string,
  submitButtonColor: string,
  onFormSubmit: (name: string, strength: number) => void,
};

type InputData = {
  value: string,
}

class NewForceForm extends Component<Props, State> {
  defaultState = {
    newForceName: '',
    newForceError: false,
    newForceErrorText: '',
    newForceStrength: 1,
  };

  state = this.defaultState;

  onNewForceInputChange = (e: SyntheticEvent<HTMLInputElement>, { value }: InputData) => {
    this.setState({
      newForceName: value,
      newForceError: false,
      newForceErrorText: '',
    });
  };

  onIncreaseForceButtonClick = () => {
    if (this.state.newForceStrength !== MAX_STRENGTH) {
      this.setState(prevState => ({
        newForceStrength: prevState.newForceStrength + 1,
      }));
    }
  };

  onDecreaseForceButtonClick = () => {
    if (this.state.newForceStrength !== MIN_STRENGTH) {
      this.setState(prevState => ({
        newForceStrength: prevState.newForceStrength - 1,
      }));
    }
  };

  onNewForceButtonClick = () => {
    if (!this.state.newForceName) {
      this.setState({
        newForceError: true,
        newForceErrorText: 'Enter the description of the force.',
      });
    } else {
      this.props.onFormSubmit(this.state.newForceName, this.state.newForceStrength);

      this.setState(this.defaultState);
    }
  };

  render() {
    const { submitButtonText, submitButtonColor } = this.props;

    return (
      <Form>
        <Form.Field>
          <label>Force name:</label>
          <Input
            onChange={this.onNewForceInputChange}
            value={this.state.newForceName}
            error={this.state.newForceError}
          />
          {this.state.newForceError ? <Label basic color="red" pointing>{this.state.newForceErrorText}</Label> : ''}
        </Form.Field>
        <Form.Group inline>
          <label style={{ whiteSpace: 'nowrap' }}>Force strength:</label>
          <Button
            disabled={this.state.newForceStrength === MAX_STRENGTH}
            basic
            onClick={this.onIncreaseForceButtonClick}
            content="Increase"
            icon="plus"
            labelPosition="left"
            as="a"
          />
          <Text fontSize="24px" padding="0 12px">{this.state.newForceStrength}</Text>
          <Button
            disabled={this.state.newForceStrength === MIN_STRENGTH}
            basic
            onClick={this.onDecreaseForceButtonClick}
            content="Decrease"
            icon="minus"
            labelPosition="right"
            as="a"
          />
        </Form.Group>
        <Form.Field>
          <Button
            fluid
            onClick={this.onNewForceButtonClick}
            style={{ color: COLORS.WHITE, background: submitButtonColor }}
          >
            {submitButtonText}
          </Button>
        </Form.Field>
      </Form>
    );
  }
}

export default NewForceForm;
