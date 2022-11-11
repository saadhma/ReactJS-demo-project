import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Colors } from '../../constants/Colors';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

export default function SortCollapsableMenu() {
  return (
    <Accordion style={{ boxShadow: '1px 1px 1px #E5E4E2', border: '1px solid #ccc', borderRadius: '0.5em' }}>
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontWeight: 'bold'}}>
          Sort</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Sort Results By
        </Typography>
        <div style={{ paddingBlock: '20px' }}>
          <DropDownMenu buttonName={'Popularity Descending'} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

function DropDownMenu({ buttonName }) {

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            endIcon={<ArrowDropDownIcon />}
            style={{
              backgroundColor: Colors.greyColor, color: Colors.blackColor,
              paddingInline: 15
            }} {...bindTrigger(popupState)}>
            {buttonName}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Popularity Descending</MenuItem>
            <MenuItem onClick={popupState.close}>Popularity Ascending</MenuItem>
            <MenuItem onClick={popupState.close}>Rate Descending</MenuItem>
            <MenuItem onClick={popupState.close}>Rate Ascending</MenuItem>
            <MenuItem onClick={popupState.close}>Release Date Descending</MenuItem>
            <MenuItem onClick={popupState.close}>Release Date Ascending</MenuItem>
            <MenuItem onClick={popupState.close}>Title (A-Z)</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
