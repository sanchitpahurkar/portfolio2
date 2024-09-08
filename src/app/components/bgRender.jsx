import React from 'react'
import { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'


const bgRender = () => {

    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if(!vantaEffect && typeof window!=='undefined'){
            setVantaEffect(
                DOTS({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xc70000,
                    backgroundColor: 0x0,
                    size: 3.10,
                    showLines: false
                })
            );
        }
        return () => {
            if(vantaEffect) vantaEffect.destroy();
        };
    
    }, [vantaEffect]);

    return <div ref={vantaRef} className='w-full h-screen'/>

};

export default bgRender
