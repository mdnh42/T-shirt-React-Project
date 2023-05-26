import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

import './Grandpa.css';


export const RingContext = createContext('Golden Ring');
export const MoneyContext = createContext(0);
const Grandpa = () => {

    const ring = 'diamond';

    const [money, setMoney] = useState(0);


    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            {setMoney}
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='goldenRing'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div >
    );
};

export default Grandpa;