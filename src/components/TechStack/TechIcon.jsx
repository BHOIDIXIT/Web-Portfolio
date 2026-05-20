import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export default function TechIcon  ()  {
  return (
    <>
    <div className='TechIcon flex gap-8 py-5 text-center justify-center items-center my-3'>
      <FaJs size={50}/>
      <SiNextdotjs size={50} />
      <FaHtml5   size={50}/>
      <FaCss3Alt size={50}/>
      <FaReact   size={50}/>
    </div>
    </>
  )
}
