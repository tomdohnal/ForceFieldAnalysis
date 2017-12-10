// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditIcon from 'react-icons/lib/ti/edit';

import { COLORS } from '../constants/styles';
import type { ReduxState } from '../redux/index';
import { setChangeName, setChangeDescription, type Change } from '../ducks/change';
import { Box, Text } from '../components/common/index';
import ChangeNameForm from '../components/ChangeNameForm';
import ChangeDescriptionForm from '../components/ChangeDescriptionForm';

type Props = {
  change: Change,
  setChangeName: (name: string) => void,
  setChangeDescription: (description: string) => void,
};

type State = {
  editChangeName: boolean,
  editChangeDescription: boolean,
};

export class ChangeContainer extends Component<Props, State> {
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

  onNameChange = (e: SyntheticEvent<HTMLInputElement>, { value }: { value: string }): void => {
    this.props.setChangeName(value);
  };

  onDescriptionChange =
    (e: SyntheticEvent<HTMLInputElement>, { value }: { value: string }): void => {
      this.props.setChangeDescription(value);
    };

  render() {
    const { change: { name, description } } = this.props;

    return (
      <Box padding="20px 16px" backgroundColor={COLORS.BLUE} height="100%">
        {this.state.editChangeName ?
          <ChangeNameForm
            onSubmit={this.onNameFormSubmit}
            onInputChange={this.onNameChange}
            inputValue={name || ''}
          />
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
            <ChangeDescriptionForm
              onSubmit={this.onDescriptionFormSubmit}
              onInputChange={this.onDescriptionChange}
              inputValue={description || ''}
            />
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

export const mapStateToProps = (state: ReduxState) => ({
  change: state.change,
});

export default connect(mapStateToProps, { setChangeName, setChangeDescription })(ChangeContainer);
