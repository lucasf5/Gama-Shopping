import { MapPinLine } from 'phosphor-react'
import Logo_Navbar from '../../assets/LogoGama.svg'
import { ButtonCart } from '../PI006-ButtonCart'
import { Container } from './styles'


export function Navigation() {
    return (
        <Container>
            <img src={Logo_Navbar}/>
            <div className='localizacao'>
                <div className='cidade'>
                    <MapPinLine/>
                    <span>São Paulo</span>
                </div>
                <ButtonCart/>
            </div>
                                              
        </Container>
    )

}