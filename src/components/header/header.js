import React from 'react';
import Logo from "../../assets/img/brand/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
const Header = () => {
  return (
    <>
    <header>
   <div className="container-fluid">
    <div className="row">
        <div className="col-sm-2">
          <img src={Logo} />
        </div>
        {/* header search start*/}
        <div className="col-sm-5">
          <div className="headersearch d-flex align-items-center">
          <Select />
            
                <div className="search">
                  <input type="text"  placeholder='Search for items..'/>
                  <SearchIcon className='searchicon c-pointer' />
                </div>
            </div>
        </div>
          {/* header search end */}
    </div>
   </div>
    </header>
    </>
  );
};

export default Header;