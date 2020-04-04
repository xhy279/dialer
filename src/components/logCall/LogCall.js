import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CallIcon from '@material-ui/icons/Call';
import './LogCall.css';

const LogCall = () => {
  const dispatch = useDispatch();
  // const log = useSelector( state => state.usersInfo.selectedUser.log);
  const selectedUser = useSelector( state => state.usersInfo.selectedUser);
  useEffect(() => {
    return () => {
      dispatch({ type: 'CLOSE_CALL' });
    }
  }, []);

  function handleChange(e) {
    dispatch({ 
      type: 'UPDATE_USER', 
      payload:  e.target.value
    });
  }

  function handleClick() {
    dispatch({ type: 'CLOSE_CALL' });
  }

  return (
    <div className="ui cards log-call">
      <div className="card log-call__top-card">
        <div><CallIcon />Log Call</div>
      </div>
      <div className="profile-card__contact">
        <div className="profile-card__contact-bar">
          <div>Contact Detail</div>
          <div className="profile-card__contact--text">12/12/2019 10:50:30 am</div>
        </div>
        <div className="ui cards profile-card__contact-content">
          <div className="card ">
            <div className="ui form">
              <div className="field">
                <textarea className="log-call__textarea"
                  placeholder="what have you discussed?"
                  onChange={handleChange}
                />
                <div className="log-call__log">
                  <button className={`ui button ${false? 'log-call__log--changed' : ''}`}
                    onClick={handleClick}
                  >
                    Log
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default LogCall;