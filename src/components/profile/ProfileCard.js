import React from 'react';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DescriptionIcon from '@material-ui/icons/Description';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Badge from './Badge';
import './ProfileCard.css';

const iconStyle = {color: '#7c4dff'};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProfileCard = ({user: {email, phone, name, untouched, status}, }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  function openCall() {
    dispatch({ type: 'OPEN_CALL' });
  }

  return (
    <div className="ui cards profile-card">

      <div className="card">
        <div className="profile-card__user">
          <div className="profile-card__user--left">
            <AccountBoxIcon />
          </div>
          <div className="profile-card__user--right">
          <div className="profile-card__card"> 
            <span>{ name }</span> {untouched ? <span className="ui label profile-card__untouched">New</span> : null}
            <Badge  text={ status } />
          </div>
          </div>
        </div>
        <div className="profile-card__icons">
          <PhoneCallbackIcon onClick={openCall} style={{...iconStyle, cursor: 'pointer'}} fontSize="large" />
          <MailOutlineIcon style={iconStyle} fontSize="large"  />
          <ChatBubbleOutlineIcon style={iconStyle} fontSize="large" />
          <CalendarTodayIcon style={iconStyle} fontSize="large" />
          <NoteAddIcon style={iconStyle} fontSize="large" /> 
        </div>
      </div>
      <div className="profile-card__contact">
        <div className="profile-card__contact-bar">
          <div>Contact Detail</div>
          <div className="profile-card__contact--text profile-card__contact--cursor" onClick={openCall}>Edit</div>
        </div>
        <div className="ui cards profile-card__contact-content">
          <div className="card ">
            <div className="profile-card__info profile-card__contact--text">
              <div>Email</div>
              <div>{email}</div>
            </div>
            <div className="profile-card__info profile-card__contact--text">
              <div>Phone</div>
              <div>{phone}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-card__contact">
        <div className="profile-card__contact-bar">
          <div>Activities</div>
        </div>
        <div className="ui cards profile-card__contact-content">
          <div className="card ">
            <List className={classes.root}>
            {/* <ListItem>
              <ListItemAvatar>
                <Avatar >
                  <CallIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem> */}
            <ListItem>
              <ListItemAvatar>
                <Avatar >
                < ControlPointIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="New contact created" secondary="12/12/2019 10:59:30 am" />
            </ListItem>
            <ListItem className="last">
              <ListItemAvatar>
                <Avatar variant="square">
                <DescriptionIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Form filled" secondary="12/12/2019 10:59:00 am" />
            </ListItem>
          </List>
          </div>
        </div>
      </div>
    </div>
);
}

export default ProfileCard;