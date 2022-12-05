import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Categories from './categories';
import Footer from '../footer/footer';

import data from '../../data/data';

function StoreFront() {
  // const [data , setData] = useState([]);
  // useEffect(()=>{
  //    fetch('http://localhost:3000/api/products/')
  //        .then(res => res.json())
  //        .then(json => setData({...json}))
  //        .catch(err => err)
  // }, [])  
  return (
    <>
      {console.log(data)}
      <Header cart={data.cart} />
      <Categories {...data} />
      <Footer />
    </>
  );
}

export default StoreFront;
