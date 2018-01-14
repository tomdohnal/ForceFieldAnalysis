// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditIcon from 'react-icons/lib/ti/edit';

import { COLORS } from '../constants/styles';
import type { ReduxState } from '../redux/index';
import { setChangeName, setChangeDescription, type Change } from '../ducks/change';
import type { Mode } from '../ducks/mode';
import { Box, Text } from '../components/common/index';
import ChangeNameForm from '../components/ChangeNameForm';
import ChangeDescriptionForm from '../components/ChangeDescriptionForm';
import { EDIT_MODE } from '../ducks/mode';

type Props = {
  change: Change,
  appMode: Mode,
  setChangeName: (name: string) => void,
  setChangeDescription: (description: string) => void,
};

type State = {
  editChangeName: boolean,
  editChangeDescription: boolean,
  isEditChangeDescriptionNewlyDisplayed: boolean,
  isEditChangeNameNewlyDisplayed: boolean,
};

export class ChangeContainer extends Component<Props, State> {
  state = {
    editChangeName: !this.props.change.name,
    editChangeDescription: !this.props.change.description,
    isEditChangeDescriptionNewlyDisplayed: false,
    isEditChangeNameNewlyDisplayed: false,
  };

  onNameFormSubmit = (): void => {
    this.setState({ editChangeName: false });
  };

  onEditNameClick = (): void => {
    this.setState({ editChangeName: true, isEditChangeNameNewlyDisplayed: true });
  };

  onDescriptionFormSubmit = (): void => {
    this.setState({ editChangeDescription: false });
  };

  onNoDescriptionButtonClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    this.props.setChangeDescription('');

    this.setState({ editChangeDescription: false });
  };

  onEditDescriptionClick = (): void => {
    this.setState({ editChangeDescription: true, isEditChangeDescriptionNewlyDisplayed: true });
  };

  onNameChange = (e: SyntheticEvent<HTMLInputElement>, { value }: { value: string }): void => {
    this.props.setChangeName(value);
  };

  onDescriptionChange =
    (e: SyntheticEvent<HTMLInputElement>, { value }: { value: string }): void => {
      this.props.setChangeDescription(value);
    };

  render() {
    const { change: { name, description }, appMode } = this.props;
    const {
      editChangeName, editChangeDescription,
      isEditChangeNameNewlyDisplayed, isEditChangeDescriptionNewlyDisplayed,
    } = this.state;

    return (
      <Box padding="20px 16px" backgroundColor={COLORS.BLUE} height="100%">
        {editChangeName && appMode === EDIT_MODE ?
          <ChangeNameForm
            onSubmit={this.onNameFormSubmit}
            onInputChange={this.onNameChange}
            inputValue={name || ''}
            newlyDisplayed={isEditChangeNameNewlyDisplayed}
          />
          :
          <Box marginTop="16px" textAlign="center">
            <Text color={COLORS.WHITE} fontSize="48px">{name}</Text>
            {appMode === EDIT_MODE &&
              <Box display="inline" >
                <EditIcon
                  color={COLORS.WHITE}
                  size="28"
                  style={{ verticalAlign: 'top', marginLeft: '8px', cursor: 'pointer' }}
                  onClick={this.onEditNameClick}
                />
              </Box>
            }
          </Box>
        }
        {editChangeDescription && appMode === EDIT_MODE ?
          <Box marginTop="16px">
            <ChangeDescriptionForm
              onSubmit={this.onDescriptionFormSubmit}
              onNoDescriptionButtonClick={this.onNoDescriptionButtonClick}
              onInputChange={this.onDescriptionChange}
              inputValue={description || ''}
              newlyDisplayed={isEditChangeDescriptionNewlyDisplayed}
            />
          </Box>
          :
          <Box marginTop="16px">
            <Text color={COLORS.WHITE} fontSize="18px">{description}</Text>
            {appMode === EDIT_MODE &&
              <Box display="inline">
                <EditIcon
                  color={COLORS.WHITE}
                  size="18"
                  style={{ verticalAlign: 'top', marginLeft: '4px', cursor: 'pointer' }}
                  onClick={this.onEditDescriptionClick}
                />
              </Box>
            }
          </Box>
        }
      </Box>
    );
  }
}

export const mapStateToProps = (state: ReduxState) => ({
  change: state.change,
  appMode: state.mode,
});

export default connect(mapStateToProps, { setChangeName, setChangeDescription })(ChangeContainer);
