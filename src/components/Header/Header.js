import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from '@mui/icons-material';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_icons'>
        <div className='header_icon header_icon--active'>
          <Home />
          <p>Home</p>
        </div>
        <div className='header_icon'>
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className='header_icon'>
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className='header_icon'>
          <VideoLibrary />
          <p>Collection</p>
        </div>
        <div className='header_icon'>
          <Search />
          <p>Search</p>
        </div>
        <div className='header_icon'>
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUup2GK8qLABciUzAHs8J1wSdZZB0wqG27wEmu64kls6MQB35o7aNNbJdKzHCBPW-Clk&usqp=CAU'
        alt=''
      />
    </div>
  );
};

export default Header;
