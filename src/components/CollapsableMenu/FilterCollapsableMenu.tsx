import React, { useState } from 'react';
import './FilterCollapsableMenu.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Colors } from '../../constants/Colors';
import Slider from '@mui/material/Slider';
// import TextField from '@mui/material/TextField';

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none"
        },
        ".expandIconWrapper": {
          display: "none"
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block"
        }
      }}
    >
      <div className="expandIconWrapper">-</div>
      <div className="collapsIconWrapper">+</div>
    </Box>
  );
};

export default function FilterCollapsableMenu() {
  return (
    <Accordion style={{ boxShadow: '1px 1px 1px #E5E4E2', border: '1px solid #ccc', borderRadius: '0.5em' }}>
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontWeight: 'bold' }}>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Show Me
        </Typography>
        <div style={{ paddingBlock: '20px' }}>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                defaultChecked
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }} />} label="Search all releases?" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }} />} label="Search all countries?" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }} />} label="Premiere" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }} />} label="Theatrical (limited)" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }} />} label="Theatrical" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }} />} label="Digital" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }}
              />} label="Physical" />
            <FormControlLabel control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#01B4E4',
                  },
                }}
              />} label="TV" />
          </FormGroup>
          {/* <TextField 
            sx={{
              
            }}
            id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <div className='genre-section-style'>
            <Typography>
              Genres
            </Typography>
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Action'} />
            <GenreButton name={'Adventure'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Animation'} />
            <GenreButton name={'Comedy'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Crime'} />
            <GenreButton name={'Documentary'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Drama'} />
            <GenreButton name={'Family'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Fantasy'} />
            <GenreButton name={'History'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Horror'} />
            <GenreButton name={'Music'} />
            <GenreButton name={'Mystery'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'Romance'} />
            <GenreButton name={'Science Fiction'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'TV Movie'} />
            <GenreButton name={'Thriller'} />
          </div>
          <div className='genre-section-style'>
            <GenreButton name={'War'} />
            <GenreButton name={'Western'} />
          </div>
        </div>
        <div className='user-score-style'>
            <Typography>
              User Score
            </Typography>
            <UserScoreSlider />
          </div>
          <div className='user-score-style'>
            <Typography>
              Minimum User Votes
            </Typography>
            <UserVotesSlider />
          </div>
      </AccordionDetails>
    </Accordion>
  );
}

function GenreButton({ name }) {
  const [buttonState, setButtonState] = useState(false);
  return (
    <Button
      onClick={() => {
        if (!buttonState) {
          setButtonState(true)
        } else {
          setButtonState(false)
        }
      }}
      sx={{
        textTransform: 'none',
        fontWeight: 'normal',
        borderRadius: 30,
        borderColor: buttonState ? Colors.blueColor : Colors.greyColor,
        color: buttonState ? Colors.whiteColor : Colors.blackColor,
        background: buttonState ? Colors.blueColor : Colors.whiteColor,
        marginRight: 1,
        ":hover": {
          color: Colors.blackColor,
          borderColor: Colors.blueColor,
        }
      }}
      variant="outlined">
      {name}
    </Button>
  );
}

function UserScoreSlider() {

  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '1',
    },
    {
      value: 20,
      label: '2',
    },
    {
      value: 30,
      label: '3',
    },
    {
      value: 40,
      label: '4',
    },
    {
      value: 50,
      label: '5',
    },
    {
      value: 60,
      label: '6',
    },
    {
      value: 70,
      label: '7',
    },
    {
      value: 80,
      label: '8',
    },
    {
      value: 90,
      label: '9',
    },
    {
      value: 100,
      label: '10',
    },
  ];

  function valuetext(value: number) {
    return `Rated (0-${value})`;
  }

  return (
  <Box sx={{ width: 250 }}>
    <Slider
      aria-label="Always visible"
      defaultValue={0}
      step={10}
      marks={marks}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  </Box>
  );
}

function UserVotesSlider() {

  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '1',
    },
    {
      value: 20,
      label: '2',
    },
    {
      value: 30,
      label: '3',
    },
    {
      value: 40,
      label: '4',
    },
    {
      value: 50,
      label: '5',
    },
    {
      value: 60,
      label: '6',
    },
    {
      value: 70,
      label: '7',
    },
    {
      value: 80,
      label: '8',
    },
    {
      value: 90,
      label: '9',
    },
    {
      value: 100,
      label: '10',
    },
  ];

  function valuetext(value: number) {
    return `Rated (0-${value})`;
  }

  return (
  <Box sx={{ width: 250 }}>
    <Slider
      aria-label="Always visible"
      defaultValue={0}
      step={10}
      marks={marks}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  </Box>
  );
}