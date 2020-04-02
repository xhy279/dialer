import React from 'react';
import './ContactCard.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

const ContactCard = ({user: { name, email, untouched }}) => {
  return (
    <div className="ui cards contact-card">
      <div className="card">
        <div className="content">
          <div className="contact-card__icons">
            <div className="right floated mini ui image">
              <MailOutlineIcon/>
            </div>
            <div className="right floated mini ui image">
              <PhoneCallbackIcon/>
            </div>
          </div>
          <div className="header"> 
            { name } {untouched ? <span className="ui label contact-card__untouched">New</span> : null}
          </div>
          <div className="meta">{email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;