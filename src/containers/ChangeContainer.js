// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import EditIcon from 'react-icons/lib/ti/edit';

import { COLORS } from '../constants/styles';
import type { ReduxState } from '../redux/index';
import { setChangeName, setChangeDescription, type Change } from '../ducks/change';
import { Box, Text } from '../components/common/index';

type Props = {
  change: Change,
  onNameChange: (name: string) => void,
  onDescriptionChange: (description: string) => void,
};

type State = {
  editChangeName: boolean,
  editChangeDescription: boolean,
};

class ChangeContainer extends Component<Props, State> {
  state = {
    editChangeName: !this.props.change.name,
    editChangeDescription: !this.props.change.description,
  };

  onNameFormSubmit = (): void => {
    this.setState({ editChangeName: false });
  };

  onEditNameClick = (): void => {
    this.setState({ editChangeName: true });
  };

  onDescriptionFormSubmit = (): void => {
    this.setState({ editChangeDescription: false });
  };

  onEditDescriptionClick = (): void => {
    this.setState({ editChangeDescription: true });
  };

  render() {
    const { change: { name, description }, onNameChange, onDescriptionChange } = this.props;

    return (
      <Box padding="20px 16px" color={COLORS.BLUE} height="100%">
        {this.state.editChangeName ?
          <Form onSubmit={this.onNameFormSubmit}>
            <Form.Group>
              <Input
                size="massive"
                style={{ width: '100%' }}
                onChange={onNameChange}
                placeholder="Enter the name of your change"
                value={name || ''}
              />
            </Form.Group>
            <Form.Group>
              <Button>Submit Name</Button>
            </Form.Group>
          </Form>
          :
          <Box marginTop="16px" textAlign="center">
            <Text color={COLORS.WHITE} fontSize="48px">{name}</Text>
            <Box display="inline" >
              <EditIcon
                color={COLORS.WHITE}
                size="28"
                style={{ verticalAlign: 'top', marginLeft: '8px', cursor: 'pointer' }}
                onClick={this.onEditNameClick}
              />
            </Box>
          </Box>
        }
        {this.state.editChangeDescription ?
          <Box marginTop="16px">
            <Form onSubmit={this.onDescriptionFormSubmit}>
              <Form.Group>
                <TextArea
                  autoHeight
                  onChange={onDescriptionChange}
                  placeholder="Enter the description of your change (optional)"
                  value={description || ''}
                />
              </Form.Group>
              <Form.Group>
                <Button>Submit Description</Button>
                <Button compact size="mini">No description</Button>
              </Form.Group>
            </Form>
          </Box>
          :
          <Box marginTop="16px">
            <Text color={COLORS.WHITE} fontSize="18px">{description}</Text>
            <Box display="inline" >
              <EditIcon
                color={COLORS.WHITE}
                size="18"
                style={{ verticalAlign: 'top', marginLeft: '4px', cursor: 'pointer' }}
                onClick={this.onEditDescriptionClick}
              />
            </Box>
          </Box>
        }
      </Box>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  change: state.change,
});

const mapDispatchToProps = dispatch => ({
  onNameChange: (event, data) => (dispatch(setChangeName(data.value))),
  onDescriptionChange: (event, data) => (dispatch(setChangeDescription(data.value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeContainer);
