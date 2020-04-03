import React from 'react';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import Badge from './Badge';
import './ProfileCard.css';

const iconStyle = {color: '#7c4dff'};
const ProfileCard = ({user: {email, phone, name, untouched, status}, }) => {
  return (
    <div className="ui cards profile-card">

      <div className="card">
        <div className="profile-card__user">
          <div className="profile-card__user--left">
            <AccountBoxIcon></AccountBoxIcon>
          </div>
          <div className="profile-card__user--right">
          <div className="profile-card__card"> 
            <span>{ name }</span> {untouched ? <span className="ui label profile-card__untouched">New</span> : null}
            <Badge  text={ status } />
          </div>
          </div>
        </div>
        <div className="profile-card__icons">
          <PhoneCallbackIcon style={iconStyle} fontSize="large" ></PhoneCallbackIcon>
          <MailOutlineIcon style={iconStyle} fontSize="large" ></MailOutlineIcon>
          <ChatBubbleOutlineIcon style={iconStyle} fontSize="large" ></ChatBubbleOutlineIcon>
          <CalendarTodayIcon style={iconStyle} fontSize="large" ></CalendarTodayIcon>
          <NoteAddIcon style={iconStyle} fontSize="large" > </NoteAddIcon>
        </div>
      </div>
      <div className="profile-card__contact">
        <div className="profile-card__contact-bar">
          <div>Contact Detail</div>
          <div>Edit</div>
        </div>
        <div className="ui cards profile-card__contact-content">
          <div className="card ">
            <div className="profile-card__info">
              <div>Email</div>
              <div>{email}</div>
            </div>
            <div className="profile-card__info">
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
            <div className="profile-card__info">
              <div>
                <div class="circle">Step 1</div>
                <div class="circle">Step 2</div>
                <div class="circle">Step 3</div>
              </div>
              <div>
                {email}
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default ProfileCard;