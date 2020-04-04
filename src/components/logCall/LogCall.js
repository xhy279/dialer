import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

const LogCall = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch({ type: 'CLOSE_CALL' });
    }
  }, []);
  return (
    <div>
      log call page
    </div> 
  );
}

export default LogCall;