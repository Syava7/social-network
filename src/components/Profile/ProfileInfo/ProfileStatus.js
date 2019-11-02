import React, { Component } from 'react'
import Input from '@material-ui/core/Input'

class ProfileStatus extends Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode 
          ? <div>
              <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
            </div> 
          : <div>
              <Input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status}/>
            </div>}
      </div>
    );
  }
}

export default ProfileStatus;
