import Award from '@/assets/svg/icons/award.svg'
import Arrows from '@/assets/svg/arrows.svg'
import Check from '@/assets/svg/icons/check.svg'

import './styles.scss'

interface IPlanCard {
  name: string,
  stars: Number,
  content: string,
  price: string
}

export default function PlanCard ({ name, stars, content, price }: IPlanCard) {
  return (
  <div className="card-plan p-8 gradient-dark">
    <div className="header relative flex flex-col justify-start">
      <div className="adwards flex mb-6 z-20">
        {
          [1, 2, 3].map((item) => (
            <Award key={`Award-${item}`} className={item > stars ? 'stroke-dark-100' : 'stroke-light-100'}/>
          ))
        }
      </div>
      <h2 className='z-20'>{ name }</h2>
      <div className="description mt-4 z-20">
        <p>{ content }</p>
        <span className='text-primary underline cursor-pointer'>Ler mais...</span>
      </div>
      <Arrows className="absolute top-0 left-6 z-10"/>
    </div>
    <div className="price flex flex-col items-center my-8">
      <span className='text-primary'>A partir de</span>
      <div className="price-value flex items-end">
        <span className='text-6xl'>R$</span>
        <span className='text-9xl'>{ price.split(',')[0] }</span>
        <span className="text-4xl self-start">,{price.split(',')[1]}</span>
      </div>
    </div>
    <div className="footer flex justify-center">
      <a href="" className="fill-button flex items-center">
        <Check className="mr-2"/>
        Assinar
      </a>
    </div>
  </div>
  )
}