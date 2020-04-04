import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import './LogCall.css';

const LogCall = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedUser = useSelector(state => state.users)
    .filter(user => user.id === Number(id))[0];
  useEffect(() => {
    return () => {
      dispatch({ type: 'CLOSE_CALL' });
    }
  }, []);

  function handleChange(e) {
    dispatch({ 
      type: 'UPDATE_USER', 
      payload:  {
        id: id, 
        field: 'log',
        value: e.target.value,
      }
    });
    dispatch({ 
      type: 'UPDATE_USER', 
      payload:  {
        id: id, 
        field: 'status',
        value: 'in progress',
      }
    });
    dispatch({ 
      type: 'UPDATE_USER', 
      payload:  {
        id: id, 
        field: 'untouched',
        value: false,
      }
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
          <div>Call Detail</div>
          <div className="profile-card__contact--text">12/12/2019 10:50:30 am</div>
        </div>
        <div className="ui cards profile-card__contact-content">
          <div className="card ">
            <div className="ui form">
              <div className="field">
                <textarea className="log-call__textarea"
                  placeholder="what have you discussed?"
                  value={selectedUser.log}
                  onChange={handleChange}
                />
                <div className="log-call__log">
                  <button className={`ui button ${selectedUser.log? 'log-call__log--changed' : ''}`}
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