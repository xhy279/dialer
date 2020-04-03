import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSelector } from 'react-redux';

import './Header.css';
import {
  useHistory
} from "react-router-dom";

const Header = ({config: {name}}) => {
  let history = useHistory();
  const users = useSelector(state => state.usersInfo.users)
  console.log(users);
  function handleBackButton() {
    history.push("/");
  }
  return (
    
    <div className="all-contacts-bar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleBackButton}
          >
            { !name? <MenuIcon /> : 
            <ArrowBackIosIcon   /> }
          </IconButton>
          <Typography variant="h6" className="all-contacts-bar__contacts">
            {!name ? 'CONTACTS' : name}
          </Typography>
          { !name? <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle/>
          </IconButton> : null }
        </Toolbar>
        { !name? <input type="text" className="all-contacts-bar__search" placeholder="Search Contact"/> : null}
      </AppBar>
    </div>
  );
}

export default Header;