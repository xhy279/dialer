import React from "react";
import { Link } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import './Header.css';

const Header = (props) => {
  return (
    <div className="all-contacts-bar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="all-contacts-bar__contacts">
            CONTACTS
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle/>
          </IconButton>
        </Toolbar>
        <input type="text" className="all-contacts-bar__search" placeholder="Search Contact"/>
      </AppBar>
    </div>
  );
}

export default Header;