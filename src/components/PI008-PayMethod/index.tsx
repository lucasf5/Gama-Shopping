import React, { useState } from "react";
import { CurrencyDollarSimple, CreditCard, ArrowsLeftRight, Money } from 'phosphor-react';

import { PayMethodContainer } from "./style";

const initialState = {
    cartao: false,
    dinheiro: false,
    pix: false,
};

const PayMethod = () => {
    const [value, setValue] = useState(initialState);

    const handleRadio = (type: string, val: boolean) => {
        setValue({ ...initialState, [type]: val });
    };
    return (
        <PayMethodContainer>
            <div className="header">
                <CurrencyDollarSimple className="icon" size={32} />
                <div>
                    <h2>Pagamento</h2>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagarm</p>
                </div>
            </div>
            <div className="payOptionsContainer">
                <div className={`button select-${value.cartao}`} onClick={() => handleRadio('cartao', !value.cartao)}>
                    <CreditCard className="icon" size={25} />
                    <p>Cartão de Crédito</p>
                </div>
                <div className={`button select-${value.dinheiro}`} onClick={() => handleRadio('dinheiro', !value.dinheiro)}>
                    <Money className="icon" size={25} />
                    <p>Dinheiro</p>
                </div>
                <div className={`button select-${value.pix}`} onClick={() => handleRadio('pix', !value.pix)}>
                    <ArrowsLeftRight className="icon" size={25} />
                    <p>Transferência</p>
                </div>
            </div>
        </PayMethodContainer >
    )
};

export default PayMethod;