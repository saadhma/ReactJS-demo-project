import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Colors } from '../../constants/Colors';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ tabs, tab1, tab2 }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (tabs === 2) {
    return (
      <Box sx={{ width: '100%', paddingLeft: '20px', paddingTop: '10px', }}>
        <Box sx={{}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
            style: {
              backgroundColor: Colors.whiteColor
            }
          }}>
            <Tab style={{ backgroundColor: value === 0 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 0 ? Colors.lightGreenColor : Colors.headerColor }} label={tab1} {...a11yProps(0)} />
            <Tab style={{ backgroundColor: value === 1 ? Colors.headerColor : Colors.whiteColor, borderRadius: 15, color: value === 1 ? Colors.lightGreenColor : Colors.headerColor }} label={tab2} {...a11yProps(1)} />
          </Tabs>
        </Box>
      </Box>
    );
  }
  if (tabs === 4) {
    return (
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
    );
  }
}
