import { MapPinLine } from 'phosphor-react'
import Logo_Navbar from '../../assets/LogoGama.svg'
import { ButtonCart } from '../PI006-ButtonCart'
import { Container } from './styles'


export function Navigation() {
    return (
        <Container>
            <img src={Logo_Navbar} />
            <div className='localizacao'>
                <div className='cidade'>
                    <MapPinLine size={20} weight="fill" />
                    <span>São Paulo</span>
                </div>
                <ButtonCart />
            </div>

        </Container>
    )

}