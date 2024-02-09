import React from 'react';
import { Separator } from '@/components/ui/separator';


const Projects = () => {
    return (
      <div className="bg-[#81749c] h-fullflex flex-col items-center" id='projects'>
        <h1 className="text-[4rem] pt-10 text-[#f3f3dc] font-bold text-center">
          My Projects
        </h1>
        <h2 className="text-gray-900 font-semibold text-center pb-10 text-[2rem]">
          Here are some of my best projects
        </h2>
        <div className='flex flex-col items-center py-16'>
            <p className='text-[#f3f3dc] text-[2rem] font-semibold pb-5'>Elizca</p>
            <div className='flex flex-col  items-center'>
                <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1707368653/elizca_okwtwo.png" alt="" className='w-[40rem] xl:w-[60rem]'/>
                <div className='text-center'>
                  <p className='hidden lg:block text-[#f3f3dc] px-36 pt-20 text-[25px] pb-5'>Elizca is a venture that I have with one more partner, where we focus on creating custom websites of all kinds. We specialize in crafting personalized web pages tailored to the unique needs and preferences of our clients. Whether it's for businesses, individuals, or organizations, we work closely with our clients to ensure that their vision is translated into a functional and aesthetically pleasing website. Our goal is to deliver high-quality web solutions that not only meet but exceed our client's expectations.</p>
                  <div className='flex flex-col items-center  space-y-5'>
                    <div className='flex justify-center items-center py-5  space-x-4'>
                      <a className='transform hover:scale-110 duration-700' href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="65" height="65"/> </a>
                      <a className='transform hover:scale-110 duration-700' href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg" alt="tailwindcss" width="95" height="95"/> </a>
                    </div>
                    <div>
                      <a href="https://www.elizca.com" target='_blank' className='bg-[#422a72] p-3 text-[#f3f3dc] rounded-xl'>Website</a>
                    </div>
                  </div>

                </div>
            </div>
        </div>
       <div className='flex justify-center'>
          <Separator/>
       </div>
        
        <div className='flex flex-col items-center py-16'>
            <p className='text-[#f3f3dc] text-[2rem] font-semibold pb-5'>M&J Agency</p>
            <div className='flex flex-col-reverse  items-center'>
            <div className='text-center'>
                <p className='hidden lg:block text-[#f3f3dc] px-36 pt-20 text-[25px] pb-5'>M&J Agency is a website designed for a client in the finance and accounting sector.It showcases services such as financial consulting and accounting, aiming to convey expertise and reliability. The user-friendly design provides easy access to valuable information, enhancing the agency's credibility and attracting potential clients.</p>
                
                <div className='flex flex-col items-center space-y-5'>
                  <div className='flex justify-center items-center py-5 space-x-4 '>
                      <a className='transform hover:scale-110 duration-700' href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="65" height="65"/> </a>
                      <a className='transform hover:scale-110 duration-700' href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg" alt="tailwindcss" width="95" height="95"/> </a>
                  </div>
                  <div>
                    <a href="https://www.mjagency.info"  target='_blank' className='bg-[#422a72] p-3 text-[#f3f3dc] rounded-xl'>Website</a>
                  </div>

                </div>
            </div>
                
                <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1707369516/mj-agency_u59jpa.png" alt="" className='w-[40rem] xl:w-[60rem]'/>
            </div>
        </div>
      </div>
    );
};

export default Projects;