import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grapa give: {money}</p>
            <button onClick={() => setMoney(money + 100)}>1000</button>
            <section>
                <Cousin>Nabil</Cousin>
                <Cousin>Abil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;