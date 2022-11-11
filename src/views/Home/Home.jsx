import React from 'react';
import './Home.css';
import { HeaderComponent } from '../../components/Header';
import HorizontalImageList from '../../components/HorizontalImageList/HorizontalImageList';
import BasicTabs from '../../components/TabBar/TabBar.tsx';

export default function Home() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '75px', }}>
                <h2 className='text-style'> What's Popular </h2>
                <BasicTabs tabs={4} />
            </div>
            <HorizontalImageList />
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', }}>
                <h2 className='text-style'> Free to Watch </h2>
                <BasicTabs tabs={2} tab1={'Movies'} tab2={'TV'} />
            </div>
            <HorizontalImageList />
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', }}>
                <h2 className='text-style'> Trending </h2>
                <BasicTabs tabs={2} tab1={'Today'} tab2={'This Week'} />
            </div>
            <HorizontalImageList />
        </div>
    );
}