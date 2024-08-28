'use client'
import React from 'react';
import Project from './Project';

const Work = () => {
  return (
    <div className='mt-[5rem] h-auto w-[330px] md:w-[1000px] m-auto'>
      <div className='stroke-yellow-300 text-center  text-[2rem] md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
        {"<"}Work {"/>"}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 m-2 justify-center'>

        <Project
          projectName='E-LEARNING PLATFORM'
          projectImgLink='/nnn.png'
          Description='Comprehensive Educational Platform aimed at providing a seamless experience for students and educators alike. It offers a range of features that facilitate learning, collaboration, and resource sharing.'
          key={2}
          projectLink='https://e-learning-platform-nu-taupe.vercel.app/'

          tech={[
            { link: "react.png", name: "REACT" },
            { link: "node-js.png", name: "NODE JS" },
            { link: "expressw.png", name: "Express js" },
            { link: "mongodb.png", name: "MongoDB" },
            { link: "tailwind.png", name: "TAILWIND" },
            { link: "githubicon.png", name: "GITHUB" },
          ]}
        />

        <Project
          projectName='RAZORPAY'
          projectImgLink='/rp.png'
          Description='Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.

          Sign Up Now'
          key={3}
          projectLink='https://rpc-123.vercel.app/'
          tech={[
            { link: "tailwind.png", name: "TAILWIND" }, 
            { link: "html.png ", name: "HTML" },
            { link: " css.jpeg", name: "CSS" },
             { link: "vercel2.png", name: "Vercel" },
             { link: "mui.png", name: "Material Ui" },
             { link: "githubicon.png", name: "GITHUB" },
          ]}
        />

        <Project
          projectName='SUKUNLY-HAYASAKA'
          projectImgLink='hsk.png'
          Description='This is a free music streaming web application built with Next.js and powered by the savan API. The app allows users to search and stream music from a vast collection of songs available on the Saavn platform. 🙌'
          key={1}
          projectLink='https://github.com/s11saurabh/sukunly'
          tech={[

            { link: "mui.png", name: "Material Ui" },
            { link: "next.png", name: "Next JS" },
            { link: "postgres.png", name: "MongoDB" },
            { link: "typescript.png", name: "Vercel" },
            { link: "shadcn.png", name: "Shadcn" },
            { link: "prismaw.png", name: "Prisma" },
            { link: "tailwind.png", name: "TAILWIND" }, 
            { link: " css.jpeg", name: "CSS" },
            { link: "githubicon.png", name: "GITHUB" },
          ]}
        />

        <Project
          projectName='Cart-Craze-Clickquisition'
          projectImgLink='/com.webp'
          Description='  E-commerce website that  provides a seamless online shopping experience with advanced search, secure payments, and user account management.🙌'
          key={2}
          projectLink='https://ecom-kosr.onrender.com/'
          tech={[
            { link: "react.png", name: "REACT" },
            { link: "node-js.png", name: "NODE JS" },
            { link: "expressw.png", name: "Express js" },
            { link: "mongodb.png", name: "MongoDB" },
            { link: "tailwind.png", name: "TAILWIND" },
            { link: "githubicon.png", name: "GITHUB" },
          ]}
        />

      </div>
    </div>
  );
}

export default Work;
