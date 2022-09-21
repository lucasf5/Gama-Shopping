import { AdressContainer } from './style';
import { MapPinLine } from 'phosphor-react';
import { useCart } from '../../contexts/useCart';

const AdressForm = () => {

    const {formsEnvio, setFormsEnvio} = useCart();

    const handleSubimit = (e: { target: { value: any; name: any; }; }) => {
        const {value, name} = e.target;
        setFormsEnvio({...formsEnvio, [name]: value});
    }
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
                <input type="text" placeholder="CEP" id="cep" value={formsEnvio.cep} onChange={handleSubimit} name="cep"/>
                <input type="text" placeholder="Rua" id="rua" value={formsEnvio.rua} onChange={handleSubimit} name="rua"/>
                <input type="text" placeholder="Numero" id="numero" value={formsEnvio.numero} onChange={handleSubimit} name="numero"/>
                <input type="text" placeholder="Complemento" id="complemento" value={formsEnvio.complemento} onChange={handleSubimit} name="complemento"/>
                <input type="text" placeholder="Bairro" id="bairro" value={formsEnvio.bairro} onChange={handleSubimit} name="bairro"/>
                <input type="text" placeholder="Cidade" id="cidade" value={formsEnvio.cidade} onChange={handleSubimit} name="cidade"/>
                <input type="text" placeholder="UF" id="uf" value={formsEnvio.uf} onChange={handleSubimit} name="uf"/>
            </form>
        </AdressContainer>
    )
};

export default AdressForm;