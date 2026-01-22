import React from 'react'
import Picture from '../Picture/Picture'
import Image from 'next/image'
import { Button } from '../Button/Button'
import PapillonIcon from '../Icons/Papillon'

const Papillon = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row mt-24 gap-12 px-6 lg:px-0 items-center'>
      <div className="lg:ml-[-120px]">
        <Picture
          src="/me-papillon.jpg"
          description="Voici l’équipe avec laquelle je travaille sur Papillon ! (oui, on n’a qu’une photo tous ensemble)"
          invert
          width={30}
          rotate={-3}
        />
      </div>

      <div className='w-full lg:w-[50%] flex flex-col gap-4'>
        <Image src={"/logo-papillon.svg"} alt="Papillon" width={128} height={28} />
        <h2 className="text-4xl lg:text-5xl font-light">« Un jour, je déploierai mes aîles »...</h2>
        <p className="text-lg text-[#29947A] font-semibold">...ou un truc comme ça, je sais plus</p>
        <p>
          Papillon, c’est mon plus gros projet depuis toujours. En résumé, c’est une appli ou les étudiants peuvent retrouver tout ce dont ils ont besoin pour bien étudier — et aujourd’hui, ils sont plus d’1 500 000 à l’avoir essayé !
        </p>
        <Button color="#29947A" leading={<PapillonIcon />} href="https://papillon.bzh" target="_blank">Voir papillon.bzh</Button>
      </div>
    </div>
  )
}

export default Papillon