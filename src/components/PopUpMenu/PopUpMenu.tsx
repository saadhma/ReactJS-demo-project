import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Colors } from '../../constants/Colors';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function ButtonWithPopUpMenu({ movieId, items, buttonName }) {

  if (items === 4 && buttonName === 'Movies') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingLeft: 40, paddingRight: 20, textTransform: 'none'
            }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/PopularMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Popular</MenuItem>
              </a>
              <a href='/NowPlayingMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Now Playing</MenuItem>
              </a>
              <a href='/UpcomingMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Upcoming</MenuItem>
              </a>
              <a href='/TopRatedMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Top Rated</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 4 && buttonName === 'TV Shows') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              style={{
                backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
                paddingInline: 20, textTransform: 'none'
              }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/PopularTVShowsScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Popular</MenuItem>
              </a>
              <a href='/AiringTodayTVShowsScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Airing Today</MenuItem>
              </a>
              <a href='/CurrentlyAiringTVShowsScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>On TV</MenuItem>
              </a>
              <a href='/TopRatedTVShowsScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Top Rated</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 1 && buttonName === 'People') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingInline: 20, textTransform: 'none'
            }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/PopularPeopleScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Popular People</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 4 && buttonName === 'More') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingInline: 20, textTransform: 'none'
            }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/PopularMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Discussions</MenuItem>
              </a>
              <a href='/NowPlayingMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Leaderboard</MenuItem>
              </a>
              <a href='/UpcomingMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Support</MenuItem>
              </a>
              <a href='/TopRatedMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>API</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 8 && buttonName === 'Overview') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              endIcon={<ArrowDropDownIcon />}
              style={{
                backgroundColor: Colors.whiteColor, color: Colors.blackColor, fontWeight: 'normal',
                paddingLeft: 40, paddingRight: 20, textTransform: 'none'
              }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Main</MenuItem>
              </a>
              <a href={'/movie/' + movieId + '/titles'} style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Alternative Titles</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Cast & Crew</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Released Dates</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Translations</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Changes</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Report</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Edit</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 4 && buttonName === 'Media') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              endIcon={<ArrowDropDownIcon />}
              style={{
                backgroundColor: Colors.whiteColor, color: Colors.blackColor, fontWeight: 'normal',
                paddingLeft: 40, paddingRight: 20, textTransform: 'none'
              }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Backdrops</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Logos</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Posters</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Videos</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 2 && buttonName === 'Fandom') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              endIcon={<ArrowDropDownIcon />}
              style={{
                backgroundColor: Colors.whiteColor, color: Colors.blackColor, fontWeight: 'normal',
                paddingLeft: 40, paddingRight: 20, textTransform: 'none'
              }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Discussions</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Reviews</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if (items === 3 && buttonName === 'Share') {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              endIcon={<ArrowDropDownIcon />}
              style={{
                backgroundColor: Colors.whiteColor, color: Colors.blackColor, fontWeight: 'normal',
                paddingLeft: 40, paddingRight: 20, textTransform: 'none'
              }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Share Link</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Facebook</MenuItem>
              </a>
              <a href='/' style={styles.textStyle}>
                <MenuItem onClick={popupState.close}>Tweet</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

}

const styles = {
  textStyle: {
    textDecoration: 'none',
    color: Colors.headerColor
  }
}