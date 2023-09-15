import './contact.css'
import Whatsapp from '@/app/components/Whatsapp'
import Form from '@/app/components/Form'

export default function Contact() {
    return (
        <main className='contacto'>
            <div className='cont-contacto'>
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'></p>
              <Form/>
            </div>
            <div className='cont-contacto'>
              <iframe className='map' src="https://maps.google.com.ar/maps?f=q&amp;source=s_q&amp;hl=es&amp;geocode=&amp;q=Av+Corrientes+1309,+Buenos+Aires&amp;aq=0&amp;oq=av.+corrientes+1309&amp;sll=-38.452918,-63.598921&amp;sspn=37.971238,79.013672&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Av+Corrientes+1309,+San+Nicol%C3%A1s,+Buenos+Aires&amp;z=14&amp;ll=-34.603907,-58.385266&amp;output=embed"></iframe>
              <Whatsapp/>
            </div>
        </main>
    )
}