import SectionsControl from '@/assets/svg/icons/sections-control.svg'
import Map from '@/assets/svg/icons/map.svg'
import Warning from '@/assets/svg/icons/warning.svg'

export default function LeftMenu () {
  return (
    <div className="hidden lg:flex flex-col items-center fixed top-64 right-4 xl:right-14">
      <a href="" target="_blank" className='my-10'>
        <SectionsControl className="w-4"/>
      </a>
      <a href="" target="_blank" className='my-10 outside-glow'>
        <Map className="w-8"/>
      </a>
      <a href="" target="_blank" className='my-10 outside-glow'>
        <Warning className="w-8"/>
      </a>
    </div>
  )
}