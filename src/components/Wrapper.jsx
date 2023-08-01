'use client'

import BackToTop from '@/utils/BackToTop';
import { animationCreate } from '@/utils/utils';
import React, { useEffect } from 'react';


if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
  }


const Wrapper = ({ children }) => {
    useEffect(() => {
		setTimeout(() => {
		  animationCreate()
		}, 200);
	  },[])
    return (
        <>
            {children}
            <BackToTop />
        </>
    );
};

export default Wrapper;