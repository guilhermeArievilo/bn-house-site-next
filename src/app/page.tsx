import BnOutline from '@/assets/svg/bn-outline.svg'
import LeftArrows from '@/assets/svg/left-arrows.svg'
import RightArrows from '@/assets/svg/right-arrows.svg'
import Check from '@/assets/svg/icons/check.svg'
import Photos from '@/assets/svg/photos.svg'
import XGroup from '@/assets/svg/x-group.svg'
import Plans from '@/assets/svg/plans.svg'

import CItems from '@/ui/c-items'
import CPlanCard from '@/ui/plan-cards/c-plan-card'

import '../styles/home/style.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='spot-light'>
      <div className="flex absolute w-full justify-center items-center top-0 -z-10">
        <BnOutline className="w-5/6 bn-animation"/>
      </div>
      <div className="flex justify-between items-center absolute w-full h-screen -z-20 overflow-hidden">
        <LeftArrows className="-translate-x-1/3 opacity-80"/>
        <RightArrows className="translate-x-1/3 opacity-80"/>
      </div>
      <main className="container py-16 mt-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex lg:justify-end justify-center">
              <h1 className="h0 metal-gradient lg:pt-20 text-center lg:text-left xl:pl-24">
                Quer ter resultados nos treinos ?
              </h1>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Photos className="w-100 lg:w-[120%] lg:-translate-x-32" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:-translate-y-24">
          <h1>Entre para <strong className='text-primary'>BN HOUSE</strong></h1>
          <a href="" className="fill-button flex items-center mt-20">
            <Check className="mr-2"/>
            Pré-matricula
          </a>
        </div>
      </main>
      <section id='about' className="container mb-16">
        <div className="grid grid-cols-12 gap-8 items-center pb-24">
          <div className="col-span-12 lg:col-span-6 col-end lg:order-1 order-2">
            <Image className='gym-section' src="/composition-gym.png" width={2069} height={1635} alt={'BN House - Agachamento livre'}/>
          </div>
          <div className="lg:col-span-6 col-span-12 text-center lg:text-left order-1 lg:order-2">
            <XGroup className="mb-6 x-group lg:m-0 m-auto"/>
            <h1 className='metal-gradient mb-4'>Estamos sempre buscando o seu melhor !</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Nascetur ipsum gravida elementum integer erat sed pretium. Diam gravida in purus convallis. Eget ut neque at est nulla dignissim. Egestas massa netus quis mi. Nulla mattis velit a nulla velit duis imperdiet at velit. Proin phasellus commodo in id.</p>
          </div>
        </div>
      </section>
      <section id="machines" className="flex flex-col lg:flex-row lg:justify-around items-center my-32 py-10">
        <CItems number='+10' label='Aparelhos'/>
        <CItems number='+300kg' label='Em Anilhas'/>
        <CItems number='Até 40kg' label='Em Halteres'/>
        <CItems number='3' label='Esteiras'/>
        <CItems number='3' label='Bikes'/>
      </section>
      <section id="plans" className='container py-14 my-14'>
        <div className="flex justify-center mb-24">
          <h1 className='metal-gradient'>Planos</h1>
        </div>
        <div className="grid grid-cols-12 gap-8 relative">
          <Plans className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dash-animation"/>
          <div className="lg:col-span-4 col-span-12">
            <CPlanCard
              name='Básico'
              stars={1}
              content='Lorem ipsum dolor sit amet consectetur. Tristique eget nulla nulla aliquam facilisi amet id velit commodo'
              price='69,90'
            />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <CPlanCard
              name='Intermediário'
              stars={2}
              content='Lorem ipsum dolor sit amet consectetur. Tristique eget nulla nulla aliquam facilisi amet id velit commodo'
              price='79,90'
            />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <CPlanCard
              name='Avançado'
              stars={3}
              content='Lorem ipsum dolor sit amet consectetur. Tristique eget nulla nulla aliquam facilisi amet id velit commodo'
              price='89,90'
            />
          </div>
        </div>
      </section>
      <section id="place" className="container py-32 my-14 relative">
        <div className="flex justify-center absolute w-full h-screen -z-20 overflow-visible">
          <LeftArrows className=" opacity-80 rotate-90"/>
        </div>
        <div className="flex flex-col items-center">
          <h1 className='metal-gradient'>Estamos aqui</h1>
          <a href='https://goo.gl/maps/andgz9YnxzLeMVm66' target='_blank' className='hover:text-primary underline transition-all ease-in-out'>R. Francisco Sena, 121 - Irecê, BA, 44900-000</a>
        </div>
        <div className="flex flex-col items-center mt-14">
          <iframe width="100%" height="420px" id="gmap_canvas" src="https://maps.google.com/maps?q=R. Francisco Sena, 121 - Irecê, BA, 44900-000&t=&z=19&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
        <div className='flex justify-center'>
          <a href="" className="fill-button flex items-center mt-20">
            <Check className="mr-2"/>
            Pré-matricula
          </a>
        </div>
      </section>
    </div>
  )
}
