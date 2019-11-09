import React, { Component } from 'react'
import Input from '@material-ui/core/Input'

class ProfileStatus extends Component {

  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== prevState) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode 
          ? <div>
              <span onDoubleClick={ this.activateEditMode }>{this.props.status || 'No status'}</span>
            </div> 
          : <div>
              <Input onChange={this.onStatusChange} 
                     autoFocus={true} onBlur={ this.deactivateEditMode } 
                     value={this.state.status}/>
            </div>}
      </div>
    );
  }
}


export default ProfileStatus;
