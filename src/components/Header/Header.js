import React, { useState } from 'react'
import { Button, Fade, makeStyles,Tooltip } from '@material-ui/core';
import {Grid , Divider, Badge,Avatar, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Dashboard,CreateNewFolder,Help,Pageview,Settings, ChatBubble,Notifications, } from '@material-ui/icons';
import './header.css'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Header() {

  return (
    <>
    <div className='menu_Sm display'>
    {/* <NavLink  style={{textDecoration:"none"}} to="/Dashboard" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Dashboard" aria-label="profiles">
          <Dashboard className="icon_color"/>
          </Tooltip>
          </NavLink>      

          <NavLink  style={{textDecoration:"none"}} to="/Search" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Advance Search" aria-label="search">
          <Pageview  className="icon_color"/>
          </Tooltip>
          </NavLink>

          <NavLink  style={{textDecoration:"none"}} to="/Folder" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Folder" aria-label="Folder">
          <CreateNewFolder className="icon_color"/>
          </Tooltip>
          </NavLink>

          <NavLink  style={{textDecoration:"none"}} to="/Help" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Help" aria-label="Help">
          <Help className="icon_color"/>         
          </Tooltip>
          </NavLink>
        <Grid className='icons'>
          <Avatar className='img' src={user ? user?.photoURL : "/broken-image.jpg"} />
            <p className='photoPic' style={{color:"#2F577E"}}>{user?.name} </p>
              <a href={user?.photoPic} target="_blank">{user?.name} </a>
            <Tooltip title="profiles" aria-label="profiles">
            <span><i className="fa fa-angle-down" 
              style={{color:'#2F577E',marginRight:'5px',paddingLeft:"5px",cursor:"pointer"}} aria-hidden="true" onClick={handleClick}></i>
            </span></Tooltip>
            <Menu  id="fade-menu"   anchorEl={anchorEl}  keepMounted open={open}
                      onClose={handleClose} TransitionComponent={Fade} >                      
              <MenuItem >
                <Link style={{textDecoration:"none"}}  to={{pathname: '/Profile'}}>
                  <img src={profile} /> <p className="para menu_item" >My Profile</p>
                </Link>
              </MenuItem>
              <MenuItem >
                <Link style={{textDecoration:"none"}}  to={{pathname: '/ChangePassword'}}>
                  <img src={password} /><p className="para menu_item" >Change password</p>
                </Link>
              </MenuItem>
              <MenuItem >
                <Link style={{textDecoration:"none"}}  to={{pathname: '/Premium'}}>
                  <img src={subscription} /><p className="para menu_item" >Subscription</p>
                </Link>
              </MenuItem>
              <Divider></Divider>
              <MenuItem onClick={logOutHandler}>
                <img src={logoutIcon} /><p className="para menu_item" >Logout</p>
              </MenuItem>
            </Menu>
              </Grid>
              <NavLink  style={{textDecoration:"none"}} to="/Profile" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Settings" aria-label="Settings">
          <Settings className="icon_color"/>        
          </Tooltip>
          </NavLink>

          <NavLink  style={{textDecoration:"none"}} to="/chat" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Chat" aria-label="Chat">
          <Badge badgeContent={4} className="icon_color" color="error">
          <ChatBubble/>
          </Badge> 
          </Tooltip>    
          </NavLink>
          <NavLink  style={{textDecoration:"none"}} to="/notification" activeClassName={!value? 'active': 'inactive'}>
          <Tooltip title="Notification" aria-label="Notification">
          <Badge badgeContent={4} className="icon_color" color="error">
          <Notifications  onClick={handleNotificationClick}/>
          </Badge>    
          </Tooltip>
          </NavLink>
        <Menu  id="fade-menu"   anchorE2={anchorE2}  keepMounted open={open1}
          onClose={handleNotificationClose} TransitionComponent={Fade} >                      
          <MenuItem>
            Uploaded Resumes 
          </MenuItem>
          <MenuItem >
          </MenuItem>
          <MenuItem >
          </MenuItem>
        </Menu>
    */} </div>
    <div container className='menu_Xs'>
    {/* <Grid className='icons'>
        <Avatar src={user ? user?.photoURL : "/broken-image.jpg"} />
          <p className='photoPic' style={{color:"#2F577E"}}>{user?.name} </p>
            <span><i className="fa fa-angle-down" 
              style={{color:'#2F577E',marginRight:'5px',paddingLeft:"5px",cursor:"pointer"}} aria-hidden="true" onClick={handleClick}></i>
            </span>
            </Grid>
      
        <Button onClick={toggleDrawerClose} className="menuIcon" >
        <MenuIcon/>
        </Button>
          <SwipeableDrawer
            open={state}
            onClose={toggleDrawerClose}
            onOpen={toggleDrawerOpen}
          >
          <div
            role="presentation" onClick={toggleDrawerClose} onKeyDown={toggleDrawerOpen} >
            <List>
            <Link style={{textDecoration:"none"}}  to={{pathname: '/Dashboard'}}   >
              <ListItem button>
                  <ListItemIcon>
                    <Dashboard  className='iconMargin'/>
                  </ListItemIcon>
                <ListItemText style={{color:"#495057"}} primary="Dashboard"/>
              </ListItem>
              </Link>
              <Link style={{textDecoration:"none"}}  to={{pathname: '/Search'}}   >
              <ListItem button>
                  <ListItemIcon>
                    <Pageview  className='iconMargin'/>
                  </ListItemIcon>
                <ListItemText style={{color:"#495057"}} primary="Advanced Search"/>
              </ListItem>
              </Link>
              <Link style={{textDecoration:"none"}}  to={{pathname: '/Folder'}}>
              <ListItem button>
                  <ListItemIcon>
                    <CreateNewFolder className='iconMargin'/>
                  </ListItemIcon>
                    <ListItemText style={{color:"#495057"}} primary="My Folder"/>
              </ListItem>
              </Link>
              <Link style={{textDecoration:"none"}}  to={{pathname: '/'}} >
                <ListItem button>
                  <ListItemIcon>
                    <Help  className='iconMargin'/>
                  </ListItemIcon>
                  <ListItemText style={{color:"#495057"}} primary="Help"/>
                </ListItem>
              </Link>  
              <Link style={{textDecoration:"none"}}  to={{pathname: '/'}}   >
                <ListItem button>
                      <ListItemIcon>
                        <Settings  style={{backgroundImage:`url(${bgdSettings})`}} className='iconMargin'/>
                      </ListItemIcon>
                    <ListItemText style={{color:"#495057"}} primary="Settings"/>
                </ListItem>
              </Link>
              <Link style={{textDecoration:"none"}}  to={{pathname: '/'}}   >
                <ListItem button>
                      <ListItemIcon>
                      <Badge badgeContent={4} color="error">
                        <ChatBubble/>
                      </Badge>
                      </ListItemIcon>
                  <ListItemText style={{color:"#495057"}} primary="Messages"/>
                </ListItem>
              </Link>
              <Link style={{textDecoration:"none"}}  to={{pathname: '/'}}   >
                <ListItem button>
                      <ListItemIcon>
                        <Badge badgeContent={4} color="error">
                          <Notifications className='iconMargin'/>
                        </Badge>
                      </ListItemIcon>
                  <ListItemText style={{color:"#495057"}} primary="Notifications"/>
                </ListItem>
              </Link>
            </List>
          </div>
          </SwipeableDrawer>     
     */}</div>
    </>
  );
}
