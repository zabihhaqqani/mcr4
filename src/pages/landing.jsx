import React from 'react'
import { useDataContext } from '../components/context/context'
// import ProductCard from '../components/productCard/productCard';

function LandingPage() {
    const {dataState}= useDataContext()
    console.log(dataState.a);
  return (
    <div>
      <h3>home</h3>
        {/* {data?.map(item)=>{
          return       <ProductCard key={item.id} item={item} />
        }} */}

      
    </div>
  );
}

export default LandingPage