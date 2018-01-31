import React from 'react'
import Modal from 'react-modal';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { toggleModal } from '../../actions/'
import { connect } from 'react-redux'

class PriceHistoryModal extends React.Component {

  constructor(props) {
    super()
    this.dispatch = props.dispatch
  }

  render(  ) {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={() => this.dispatch(toggleModal())}
      />
    ];

    return (
      <div>
        <Dialog
          title="Price History for 2017"
          actions={actions}
          modal={true}
          open={this.props.modalIsOpen}>
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalIsOpen: state.modal.modalIsOpen
  }
};

export default connect(mapStateToProps)(PriceHistoryModal)