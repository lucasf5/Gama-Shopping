import { AdressContainer } from "./style";
import { MapPinLine } from 'phosphor-react';

const AdressForm = () => {
    return (
        <AdressContainer>
            <div className="header">
                <MapPinLine className="icon" size={32} />
                <div>
                    <h2>Endereço</h2>
                    <p>Informe o enderesço onde o produto será entregue</p>
                </div>
            </div>
            <form action="">
                <input type="text" placeholder="CEP" id="cep"/>
                <input type="text" placeholder="Rua" id="rua"/>
                <input type="text" placeholder="Numero" id="numero"/>
                <input type="text" placeholder="Complemento" id="complemento"/>
                <input type="text" placeholder="Bairro" id="bairro"/>
                <input type="text" placeholder="Cidade" id="cidade"/>
                <input type="text" placeholder="UF" id="uf"/>
            </form>
        </AdressContainer>
    )
};

export default AdressForm;