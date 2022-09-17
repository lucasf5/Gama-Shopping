import axios from 'axios'
import { useEffect, useState } from 'react'
import Logo_Navbar from '../../assets/LogoGama.svg'
import { useCart } from '../../contexts/useCart'
import { ButtonCart } from '../PI006-ButtonCart'
import { Container } from './styles'
import Point from "../../assets/imgs/Point.svg"


export function Navigation() {
    const {cep, setIsOpen} = useCart();
    const [adress, setAdress] = useState<string>('');

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            setAdress(response.data.localidade);
            localStorage.setItem('@GamaShopping:adress', JSON.stringify(response.data.localidade));
        });
    }, [cep])

    useEffect(() => {
        const adress = localStorage.getItem('@GamaShopping:adress');
        if(adress) {
            setAdress(JSON.parse(adress));
            setIsOpen(false);
        }
    }, [])
    return (
        <Container>
            <img src={Logo_Navbar}/>
            <div className='localizacao'>
                <div className='cidade' onClick={()=> setIsOpen(true)}>
                    <img src={Point}/>
                    <span>{adress}</span>
                </div>
                <ButtonCart/>
            </div>
                                              
        </Container>
    )

}