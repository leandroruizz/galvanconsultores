import './contact.css'
import Whatsapp from '@/components/Whatsapp'
import Form from '@/components/Form'

export default function Contact() {
    return (
        <main className='contacto'>
            <div>
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'></p>
              <Whatsapp/>
              <Form/>
            </div>
        </main>
    )
}