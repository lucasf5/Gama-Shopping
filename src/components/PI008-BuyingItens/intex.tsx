import { ItemContainer } from "./style";
import { Trash, Plus, Minus } from 'phosphor-react'
import { useState } from "react";

interface IProduct {
    product: {
        name: string;
        img: string;
        unityPrice: number;
    }
}

const BuyingItem = ({ product }: IProduct) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <ItemContainer>
            <div className="img-container">
                <img src={product.img} alt="" />
            </div>
            <div className="prod-data">
                <div className="names">
                    <div className="item-name">{product.name}</div>
                    <div className="item-price">R$ {quantity * product.unityPrice}</div>
                </div>
                <div className="buttons-container">
                    <div className="quantity button">
                        <Minus className="icon" size={16} onClick={() => setQuantity(quantity - 1)} />
                        {quantity}
                        <Plus className="icon" size={16} onClick={() => setQuantity(quantity + 1)} />
                    </div>
                    <div className="delete button">
                        <Trash className="icon" size={16} />
                        Remover
                    </div>
                </div>
            </div>
        </ItemContainer>
    )
};

export default BuyingItem;