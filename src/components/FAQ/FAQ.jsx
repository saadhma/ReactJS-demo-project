import { Box } from "@mui/material";
import './FAQ.css';
import Typography from '@mui/material/Typography';
import { Colors } from "../../constants/Colors";

export default function FAQ() {
    return (
        <div className="div-style">
            <Box
                sx={{
                    background: Colors.blueColor, color: Colors.whiteColor,
                    paddingInline: '35px', paddingBlock: '15px', borderRadius: '10px'
                }}>
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                    FAQ
                </Typography>
            </Box>
            <Box sx={{ width: 270, height: 450, color: Colors.blackColor }}>
                <div className='benefit-section'>
                    <a href="/">
                        Our History
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        Staying In Touch
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        Logos & Attribution
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/faq/general">
                        General
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/faq/account">
                        Account
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        Website
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        API Overview
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        Discover Examples
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        API Sessions
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        API Status Codes
                    </a>
                </div>
                <div className='benefit-section'>
                    <a href="/">
                        API Libraries
                    </a>
                </div>
            </Box>
        </div>
    );
}