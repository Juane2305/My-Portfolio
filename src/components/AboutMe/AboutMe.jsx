import React from 'react';

const AboutMe = () => {
    return (
        <div className='bg-[#81749c] pb-10' id='about'>
            <h1 className='text-[4rem] pt-10 text-[#f3f3dc] font-bold text-center'>Who am I?</h1>
            <div className='flex justify-center lg:justify-around items-center py-5'>
                <div className=' px-5 lg:w-[50%] flex items-center text-[20px] md:text-[25px] font-semibold text-[#f3f3dc]'>
                    <p className='cursor-default'>Hey there! I'm Juan Emilio Elizondo, a full-stack developer based in Argentina, specializing in JavaScript (React and Node.js), PostgreSQL, HTML, CSS, and Tailwind CSS. Alongside a partner, I co-founded ELIZCA, where we craft diverse websites tailored to various needs. Let's collaborate and bring your web projects to life with <a href='https://www.elizca.com' target='_blank' className='text-[#432186]'>ELIZCA!</a></p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1707365993/Group_12_1_t7rrh5.svg" alt="" className='hidden lg:block w-[22rem]'/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;