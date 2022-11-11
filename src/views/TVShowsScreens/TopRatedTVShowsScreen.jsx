import React from 'react';
import { HeaderComponent } from '../../components/Header';
import StandardImageList from '../../components/StandardImageList/StandardImageList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SortCollapsableMenu from '../../components/CollapsableMenu/SortCollapsableMenu.tsx';
import FilterCollapsableMenu from '../../components/CollapsableMenu/FilterCollapsableMenu.tsx';
import WhereToWatchCollapsableMenu from '../../components/CollapsableMenu/WhereToWatchCollapsableMenu.tsx';

const images = [
    {
        thumbnail: {
            uri: "https://lorempixel.com/200/200/animals",
            name: "Peaky Blinders"
        }
    },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "The Devil's Hour" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "Spider-Man No Way Home" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "Hotel Transylvania: Transformania" } },
    {
        thumbnail: { uri: "https://lorempixel.com/200/200/nature", name: "SPY x FAMILY" }
    },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Hellhole" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Breaking Bad" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Manifest" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "The Stranger" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Hellhole" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Breaking Bad" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Manifest" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "The Stranger" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "Beyond the Universe" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "The Vampire Diaries" } }
];

export default function TopRatedTVShowsScreen() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ paddingTop: '75px', }}>
                <Box sx={{ flexGrow: 1 }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <div style={{ alignItems: 'center', justifyContent: 'center', paddingInline: '40px' }}>
                                <h2> Top Rated TV Shows </h2>
                                <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                                <SortCollapsableMenu/>
                                </div>
                                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <FilterCollapsableMenu/>
                                </div>
                                <div style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                                <WhereToWatchCollapsableMenu/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <StandardImageList imagesList={images} />
                        </Grid>
                    </Grid>
            </div>
        </Box >
            </div >
        </div >
    );
}