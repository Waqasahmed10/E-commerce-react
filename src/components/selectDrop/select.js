import React, { useState } from 'react';

const Select = () => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const openSelect = ()=>{
        setisOpenSelect(!isOpenSelect);
    }
  return (
    <>
      <div className="selectDrop c-pointer">
        <span className="openselect" onClick={openSelect}>All Categories</span>
        {
           isOpenSelect ===true &&
           <div className="selectinner">
           <div className="searchfield">
             <input type="text" />
           </div>
           <ul className="search-result">
             <li>Milks and Diaries</li>
             <li>Wines & Drinks</li>
             <li>Clothing & Beauty</li>
             <li>Fresh Seafood</li>
             <li>Pet Foods & Toy</li>
             <li>Baking Material</li>
             <li>Vegetables</li>
             <li>Fresh Fruits</li>
             <li>Bread & Juice</li>
           </ul>
         </div>
        }
      
      </div>
    </>
  );
};

export default Select;
