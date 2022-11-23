import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Colors } from '../../constants/Colors';
import { Grid, Typography } from '@mui/material';
import HorizontalImageList from '../HorizontalImageList/HorizontalImageList';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ tabs, tab1, tab2, streammingMoviesList, tvShowsList, inTheatresMovies, freeMoviesList, trendingMoviesList }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (tabs === 2 && tab1 === "Movies" && tab2 === "TV") {
    return (
      <React.Fragment>
        <Grid container style={{ paddingTop: '30px', paddingInline: '25px' }}>
          <Grid item xs={2}>
            <h2> Free to Watch </h2>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ width: '100%', paddingLeft: '20px', paddingTop: '10px', }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                style: {
                  backgroundColor: Colors.whiteColor
                }
              }}>
                <Tab style={{ backgroundColor: value === 0 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 0 ? Colors.lightGreenColor : Colors.headerColor }} label={tab1} {...a11yProps(0)} />
                <Tab style={{ backgroundColor: value === 1 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 1 ? Colors.lightGreenColor : Colors.headerColor }} label={tab2} {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        {
          value === 0 ?
            <HorizontalImageList dataList={freeMoviesList} type={undefined} /> :
            value === 1 ?
              <HorizontalImageList dataList={tvShowsList} type={"TV Shows"} /> : null
        }
      </React.Fragment>
    );
  }
  if (tabs === 2 && tab1 === "Today" && tab2 === "This Week") {
    return (
      <React.Fragment>
        <Grid container style={{ paddingTop: '30px', paddingInline: '25px' }}>
          <Grid item xs={2}>
            <h2> Trending </h2>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ width: '100%', paddingLeft: '20px', paddingTop: '10px', }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                style: {
                  backgroundColor: Colors.whiteColor
                }
              }}>
                <Tab style={{ backgroundColor: value === 0 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 0 ? Colors.lightGreenColor : Colors.headerColor }} label={tab1} {...a11yProps(0)} />
                <Tab style={{ backgroundColor: value === 1 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 1 ? Colors.lightGreenColor : Colors.headerColor }} label={tab2} {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        {
          value === 0 ?
            <HorizontalImageList dataList={trendingMoviesList} type={undefined} /> :
            value === 1 ?
              <HorizontalImageList dataList={streammingMoviesList} type={undefined} /> : null
        }
      </React.Fragment>
    );
  }
  if (tabs === 4) {
    return (
      <React.Fragment>
        <Grid container style={{ paddingTop: '75px', paddingInline: '25px' }}>
          <Grid item xs={2}>
            <h2> What's Popular </h2>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ paddingLeft: '20px', paddingTop: '10px', }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                style: {
                  backgroundColor: Colors.whiteColor
                }
              }}>
                <Tab style={{ backgroundColor: value === 0 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 0 ? Colors.lightGreenColor : Colors.headerColor }} label="Streaming" {...a11yProps(0)} />
                <Tab style={{ backgroundColor: value === 1 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 1 ? Colors.lightGreenColor : Colors.headerColor }} label="On TV" {...a11yProps(1)} />
                <Tab style={{ backgroundColor: value === 2 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 2 ? Colors.lightGreenColor : Colors.headerColor }} label="For Rent" {...a11yProps(2)} />
                <Tab style={{ backgroundColor: value === 3 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 3 ? Colors.lightGreenColor : Colors.headerColor }} label="In Theatres" {...a11yProps(3)} />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        {
          value === 0 ?
            <HorizontalImageList dataList={streammingMoviesList} type={undefined} /> :
            value === 1 ?
              <HorizontalImageList dataList={tvShowsList} type={"TV Shows"} /> :
              value === 3 ?
                <HorizontalImageList dataList={inTheatresMovies} type={undefined} /> :
                <Typography sx={{ paddingInline: '30px' }}>
                  This panel didn't return any results.
                </Typography>
        }
      </React.Fragment>
    );
  }
}