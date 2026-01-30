import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const SkillsDetailReact = () => {
  return (
    <div className="w-full h-full p-4 flex gap-4">
      <div className="w-full h-full p-4 flex flex-col gap-4 justify-center">
        <h2 className='text-lg font-semibold'>React et React Native</h2>

        <p className='opacity-60'>
          React est un framework JavaScript utile pour créer des interfaces dynamique et réactives. Il est très populaire dans le monde du développement front-end.
        </p>

        <p>
          J&apos;utilise <a href="https://react.dev/" target="_blank" className='link'>React</a> quasi-quotidiennement depuis maintenant 4 ans avec le développement de mon application <Link className='link' href="/projects/papillon">Papillon</Link>, plus particulièrement sa variante <a href="https://reactnative.dev/" target="_blank" className='link'>React Native</a>, permattant de faire appel aux platerformes Android et iOS pour créer des applications natives et performantes.
        </p>

        <p className='opacity-60 text-sm'>
          On peut voir ici mon application Papillon, que j&apos;ai développé en React Native.
        </p>
      </div>
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image
          src="/skill-example-react.jpg"
          alt="React"
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export const SkillsDetailFigma = () => {
  return (
    <div className="w-full h-full p-4 flex gap-4">
      <div className="w-full h-full p-4 flex flex-col gap-4 justify-center">
        <h2 className='text-lg font-semibold'>Figma</h2>

        <p className='opacity-60'>
          Figma est un logiciel d'édition vectorielle notamment utilisé pour le design d'interfaces utilisateur et d'expériences utilisateur.
        </p>

        <p>
          J&apos;utilise <a href="https://figma.com/" target="_blank" className='link'>Figma</a> depuis longtemps, que ça soit pour des projets personnels ou pour des projets professionnels, de la simple création de logo à la <Link href="/projects/papillon" className='link'>création d&apos;interfaces complexes</Link> pour des applications aux formats variés : desktop, mobile ou web.
        </p>

        <p>
          Cela m&apos;a permis d&apos;acquérir une certaine expertise dans le domaine du design d&apos;interfaces utilisateur, de branding et d&apos;expériences utilisateur.
        </p>
      </div>
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image
          src="/skill-example-figma.jpg"
          alt="React"
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export const SkillsDetailAE = () => {
  return (
    <div className="w-full h-full p-4 flex gap-4">
      <div className="w-full h-full p-4 flex flex-col gap-4 justify-center">
        <h2 className='text-lg font-semibold'>Adobe After Effects</h2>

        <p className='opacity-60'>
          Adobe After Effects est un logiciel d'animation et de compositing 2D, notamment utilisé dans le monde du motion design et de la post-production.
        </p>

        <p>
          J&apos;ai appris à utiliser <a href="https://www.adobe.com/fr/products/aftereffects.html" target="_blank" className='link'>Adobe After Effects</a> lorsque je voulais trouver un moyen dynamique et engageant de présenter mes projets en vidéo.
        </p>

        <p>
          Maintenant, le motion design est intégrant de la plupart de mes projets personnels et universitaires, que cela soit via de la vidéo, des micro-interactions ou de l&apos;animation interactive en front-end.
        </p>
      </div>
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <video
          src="/skill-example-motion.webm"
          autoPlay
          loop
          muted
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};

export const SkillsDetailPython = () => {
  return (
    <div className="w-full h-full p-4 flex gap-4">
      <div className="w-full h-full p-4 flex flex-col gap-4 justify-center">
        <h2 className='text-lg font-semibold'>Python</h2>

        <p className='opacity-60'>
          Python est un langage de programmation interprété de haut niveau, très utilisé dans le monde du développement back-end, du web notamment.
        </p>

        <p>
          J&apos;ai eu l&apos;occasion de développer le backend de <Link href="/projects/papillon" className='link'>Papillon</Link> en Python (à l'aide du framework <a href="https://hug.rest/" target="_blank" className='link'>Hug</a>), permettant à des millers d'utilisateurs d'accéder à leurs données avec une API performante fournissant une expérience utilisateur fluide et réactive.
        </p>

        <p>
          Papillon a ensuite migré vers un back-end local, développé en Node.js, mais cette expérience m'a permis d'approcher Python.
        </p>
      </div>
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image
          src="/skill-example-python.jpg"
          alt="React"
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export const SkillsDetailDaVinci = () => {
  return (
    <div className="w-full h-full p-4 flex gap-4">
      <div className="w-full h-full p-4 flex flex-col gap-4 justify-center">
        <h2 className='text-lg font-semibold'>DaVinci Resolve</h2>

        <p className='opacity-60'>
          DaVinci Resolve est un logiciel de post-production et de montage vidéo, que j'utilise depuis longtemps pour mes projets vidéo personnels et universitaires.
        </p>

        <p>
          Au cours de ma formation MMI, j&apos;ai eu l&apos;occasion de développer mes compétences sur <a href="https://www.blackmagicdesign.com/fr/products/davinciresolve/" target="_blank" className='link'>DaVinci Resolve</a>, notamment pour des projets en cours d'audiovisuel et de communication, ainsi que pour différents projets personnels.
        </p>

        <p>
          Je l'utilise également en complémentarité avec After Effects pour mettre en avant mes différents projets en vidéo.
        </p>
      </div>
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image
          src="/skill-example-davinci.jpg"
          alt="React"
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};