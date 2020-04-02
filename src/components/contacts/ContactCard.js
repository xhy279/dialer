import React from 'react';
import './ContactCard.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

const ContactCard = ({user: { name, email, untouched }}) => {
  return (
    <div class="ui cards contact-card">
      <div class="card">
        <div class="content">
          <div className="contact-card__icons">
            <div class="right floated mini ui image">
              <MailOutlineIcon/>
            </div>
            <div class="right floated mini ui image">
              <PhoneCallbackIcon/>
            </div>
          </div>
          <div class="header"> 
            { name } {untouched ? <span className="ui label contact-card__untouched">New</span> : null}
          </div>
          <div class="meta">{email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;