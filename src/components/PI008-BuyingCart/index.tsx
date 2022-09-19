import { CartContainer } from "./style";
import BuyingItem from "../PI008-BuyingItens/intex";

const products = [{
    name: 'Produto 1',
    img: 'https://picsum.photos/64',
    unityPrice: 42
}, {
    name: 'Produto 2',
    img: 'https://picsum.photos/64',
    unityPrice: 100
}]

const BuyingCart = () => {
    return (
        <CartContainer>
            {products.map((product) => {
                return (<BuyingItem product={product} />)
            })}
            <div className="total-container">
                <div className="itens-total">
                    <p>Total de Itens</p>
                    <p>
                        R$ {products.map((e) => e.unityPrice).reduce((a, b) => a + b)}
                    </p>
                </div>
                <div className="frete-price">
                    <p>Entrega</p>
                    <p>R$ 3,50</p>
                </div>
                <div className="total">
                    <h3>Total</h3>
                    <h3>{products.map((e) => e.unityPrice).reduce((a, b) => a + b) + 3.5}</h3>
                </div>
            </div>
            <div className="confirm-button">
                Confirmar Pedido
            </div>
        </CartContainer >
    )
};

export default BuyingCart;