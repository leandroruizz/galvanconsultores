import Link from 'next/link'
import './Navigation.css'

export default function Navigation () {
    return (
        <nav className='nav'>
            <img className='logo-galvan' src="./imagenes/logogalvan.png" alt="" />
            <div className='nav-lista'>
                <li className='nav-item'>
                    <Link className='nav-text' href='./'>Inicio</Link>
                </li>
                <li className='nav-item'>
                    <a className='nav-text' href='#servicios'>Servicios</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-text' href='#trabajo'>Trabajo</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-text' href='#nosotros'>Nosotros</a>
                </li>
                <li className='nav-item'>
                    <Link className='nav-text' href='/contact'>Contacto</Link>
                </li>
                <li className='nav-registro'>
                    <Link className='text-registro' href='http://gaconsultores.com.ar/intranet/titanio/app.php/titanio/ '>Registro</Link>
                </li>
            </div>
        </nav>
    )
}
