import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AlternativeTitlesScreen.css';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { HeaderComponent } from '../../../components/Header';
import { Colors } from '../../../constants/Colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieAlternativeTitles } from '../../../store/Actions/moviesActions';
import { InsertEmoticon } from '@mui/icons-material';

function createData(name, type) {
    return { name, type };
}

const rows = [
    createData('Frozen yoghurt', 159),
];

export default function AlternativeTitlesScreen() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const movieAlternativeTitlesData = useSelector(state => state.moviesReducer?.get('movieAlternativeTitlesData'));

    useEffect(() => {
        dispatch(fetchMovieAlternativeTitles(`${id}`));
    }, [dispatch]); 

    console.log("alternative titles", movieAlternativeTitlesData)

    return (
        <div>
            <HeaderComponent />
            <div className='parent-container'>
                <div className="div-style">
                    <Box
                        sx={{
                            background: Colors.blackColor, color: Colors.whiteColor,
                            paddingInline: '35px', paddingBlock: '15px', borderRadius: '10px'
                        }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'normal' }}>
                            Alternative Titles
                        </Typography>
                    </Box>
                    <Box sx={{ color: Colors.blackColor, paddingBlock: '15px', }}>
                        <div className='benefit-section'>
                            Brazil
                        </div>
                        <div className='benefit-section'>
                            Bulgaria
                        </div>
                        <div className='benefit-section'>
                            China
                        </div>
                        <div className='benefit-section'>
                            Russia
                        </div>
                        <div className='benefit-section'>
                            South Korea
                        </div>
                        <div className='benefit-section'>
                            Spain
                        </div>
                        <div className='benefit-section'>
                            United States
                        </div>
                    </Box>
                </div>
                <div className='table-style'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
                            <TableHead sx={{ background: 'grey'}}>
                                <TableCell>Brazil</TableCell>
                            </TableHead>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {movieAlternativeTitlesData?.titles?.map((item) => (
                                    <TableRow
                                        key={item.iso_3166_1}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {item.title}
                                        </TableCell>
                                        <TableCell align="left">{item.type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}