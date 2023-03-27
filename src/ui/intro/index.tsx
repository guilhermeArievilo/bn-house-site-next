"use client"

import './styles.scss'

import { useEffect, useRef } from 'react'

import BnDark from '@/assets/svg/BN-dark.svg'
import LeftArrows from '@/assets/svg/left-arrows.svg'
import RightArrows from '@/assets/svg/right-arrows.svg'
import gsap, { Expo } from 'gsap'

export default function Intro () {
  let intro = useRef(null)

  let ease = Expo.easeInOut

  useEffect(() => {
    gsap
      .timeline()
      .to(intro.current, {
        y: '-10000',
        display: 'none',
        ease,
        duration: 2,
        delay: 4
      })
  }, [])


  return (
    <div ref={intro} className="intro h-screen w-screen fixed z-30 top-0 left-0">
      <div className="flex justify-between items-center absolute w-full h-screen -z-20 overflow-hidden">
        <LeftArrows className="-translate-x-1/3"/>
        <RightArrows className="translate-x-1/3"/>
      </div>
      <div className="intro-body flex justify-center items-center w-100 h-screen">
        <BnDark className="bn-dark" />
      </div>
    </div>
  )
}
