import React from 'react';

import './Modal.css';

const Modal = ({show, handler}) => {
  if(!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div style={{'padding': '20px', 'cursor': 'pointer'}}
            onClick={handler.bind(this, 'hired')}
          >
            Mark as Hired
          </div>
          <hr/>
          <div style={{'padding': '20px', 'cursor': 'pointer'}}>Follow Up</div>
        </div>
        <div className="modal-footer">
          <div style={{'padding': '20px', 'cursor': 'pointer'}}
            onClick={handler.bind(this, 'close')}
          >
            Cancel
          </div>
        </div>
      </div>

    </div>
  );
}

export default Modal;