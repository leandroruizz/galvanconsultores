import './contact.css'
import Whatsapp from '@/app/components/Whatsapp'
import Form from '@/app/components/Form'

export default function Contact() {
    return (
        <main className='contacto'>
            <Whatsapp/>
            <div>
              <img className='imgform' src="./imagenes/logogalvan.png" alt="" />
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'></p>
              <Form/>
            </div>
        </main>
    )
}