import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Colors } from '../../constants/Colors';

export default function ButtonWithPopUpMenu({ items, buttonName }) {

  if(items === 4 && buttonName === 'Movies'){
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingInline: 15, paddingBottom: 15
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

  if(items === 4 && buttonName === 'TV Shows'){
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingInline: 15, paddingBottom: 15
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

  if(items === 1 && buttonName === 'People'){
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingInline: 15, paddingBottom: 15
            }} {...bindTrigger(popupState)}>
              {buttonName}
            </Button>
              <Menu {...bindMenu(popupState)}>
              <a href='/PopularMoviesScreen' style={{ textDecoration: 'none', color: Colors.headerColor }}>
                <MenuItem onClick={popupState.close}>Popular People</MenuItem>
              </a>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  if(items === 4 && buttonName === 'More'){
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button style={{
              backgroundColor: Colors.headerColor, color: Colors.whiteColor, fontWeight: 'bold',
              paddingInline: 15, paddingBottom: 15
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

}
