import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { RootState } from '../../../redux';
// Adjust the path accordingly

const Notification = () => {
  const noti = useSelector((state: RootState) => state.notification.value);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Skip rendering on the initial render
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    // Your logic when noti changes
    // This block will be executed only when noti changes, not on the initial render
  }, [noti, initialRender]); // Add noti and initialRender as dependencies

  return (
    {!initialRender && (<div className="notification">
       (
        // Render the Alert component only after the initial render
        {!noti ? (
          <Alert severity="error">Thất bại!</Alert>
        ) : (
          <Alert severity="success">Thành công!</Alert>
        )
      }
    </div> ) }

export default Notification;
