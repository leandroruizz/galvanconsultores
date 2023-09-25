import Link from "next/link"
import './Whatsapp.css'
export default function Whatsapp() {
  return (
       <Link className='whatsapp' href='https://api.whatsapp.com/send?phone=543512330090' target='_blank'>✆ Whatsapp</Link>
  )
}