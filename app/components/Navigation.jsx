import Link from 'next/link'
import './Navigation.css'

export default function Navigation () {
    return (
        <nav className='nav'>
            <input type="checkbox" id='check'/>
            <label for="check" className='checkbtn'>
                <img className='bars' src="imagenes/fabars.png" width={30}/>
            </label>
            <img className='logo-galvan' src="./imagenes/logogalvanblanco.png" alt="" />
            <div className='nav-lista'>
                <li className='nav-item'>
                    <Link className='nav-text' href='./'>Inicio</Link>
                </li>
                <li className='nav-item'>
                    <a className='nav-text' href='./#servicios'>Servicios</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-text' href='./#trabajo'>Trabajo</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-text' href='./#nosotros'>Nosotros</a>
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
