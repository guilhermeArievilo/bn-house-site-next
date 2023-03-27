import Instagram from '@/assets/svg/icons/instagram.svg'
import Phone from '@/assets/svg/icons/phone.svg'
import Whatsapp from '@/assets/svg/icons/whatsapp.svg'

export default function LeftMenu () {
  return (
    <div className="hidden lg:flex flex-col items-center fixed top-64 left-4 xl:left-14">
      <a href="https://www.instagram.com/bnhouse.irece/" target="_blank" className='my-10 outside-glow'>
        <Instagram className="w-8"/>
      </a>
      <a href="" target="_blank" className='my-10 outside-glow'>
        <Phone className="w-8"/>
      </a>
      <a href="" target="_blank" className='my-10 outside-glow'>
        <Whatsapp className="w-8"/>
      </a>
    </div>
  )
}