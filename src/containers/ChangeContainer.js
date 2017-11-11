// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';

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

   onButtonClick = editChangeBoolean => (): void => {
     this.setState({ [editChangeBoolean]: false });
   };

   renderForm(onChange: (value: string) => void, onButtonClick: (value: string) => void) {
     return (
       <Box>
         <Input onChange={onChange} />
         <Button onClick={onButtonClick} />
       </Box>
     );
   }

   render() {
     const { change: { name, description }, onNameChange, onDescriptionChange } = this.props;

     return (
       <Box padding="20px 16px" color={COLORS.BLUE} height="100%">
         {this.state.editChangeName ?
           this.renderForm(onNameChange, this.onButtonClick('editChangeName')) :
           <Text>{name}</Text>
         }
         {this.state.editChangeDescription ?
           this.renderForm(onDescriptionChange, this.onButtonClick('editChangeDescription')) :
           <Text>{description}</Text>
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
