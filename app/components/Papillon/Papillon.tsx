'use client';

import React from 'react'
import Picture from '../Picture/Picture'
import Image from 'next/image'
import { Button } from '../Button/Button'
import PapillonIcon from '../Icons/Papillon'
import { useTranslations } from 'next-intl';

const Papillon = () => {
  const t = useTranslations('papillonSection');

  return (
    <div className='w-full flex flex-col lg:flex-row mt-24 gap-12 px-6 lg:px-0 items-center'>
      <div className="lg:ml-[-120px]">
        <Picture
          src="/me-papillon.jpg"
          description={t('picture')}
          invert
          width={30}
          rotate={-3}
        />
      </div>

      <div className='w-full lg:w-[50%] flex flex-col gap-4'>
        <Image src={"/logo-papillon.svg"} alt="Papillon" width={128} height={28} />
        <h2 className="text-4xl lg:text-5xl font-light">{t('title')}</h2>
        <p className="text-lg text-[#29947A] font-semibold">{t('subtitle')}</p>
        <p>
          {t('description')}
        </p>
        <Button color="#29947A" leading={<PapillonIcon />} href="https://papillon.bzh" target="_blank">{t('button')}</Button>
      </div>
    </div>
  )
}

export default Papillon