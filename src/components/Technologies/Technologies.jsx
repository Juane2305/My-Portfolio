import React from 'react';

const Technologies = () => {
    return (
        <div className='bg-[#f7f7e6] h-screen pb-24' id='technologies'>
            <h1 className='text-[4rem] pt-10 text-black font-bold text-center'>My knowledge</h1>
            <div className='flex justify-center items-center gap-x-14 pt-28'> 
                <a className='transform hover:scale-110 duration-700' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="95" height="95"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg" alt="tailwindcss" width="95" height="95"/> </a>
            </div>
            <div className='flex justify-center items-center gap-x-16 mt-20'>    
                <a className='transform hover:scale-110 duration-700' href="https://expressjs.com" target="_blank"><img src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" background-color="#ffffff" alt="express" width="135" /> </a>
                <a className='transform hover:scale-110 duration-700' href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="85" height="85" /> </a>
                <a className='transform hover:scale-110 duration-700' href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://mui.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" background-color="white" alt="mui" width="55" height="55" margin-top="100px"/></a>
                <a className='transform hover:scale-110 duration-700' href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="85" height="85"/> </a>
                <a className='transform hover:scale-110 duration-700' href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="85" height="85"/> </a>
            </div>
            <h3 className='text-[40px] p-5 font-bold flex justify-center text-[#4d3e6b] pt-24'>Learning...</h3>
            <div className='flex justify-center items-center gap-x-16 pt-10'>
                <a className='transform hover:scale-110 duration-700' href="https://www.typescriptlang.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" background-color="#ffffff" alt="Typescript" width="100" /> </a>
                <a className='transform hover:scale-110 duration-700' href="https://www.python.org/" target="_blank"><img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/python_104451.png" background-color="#ffffff" alt="Python" width="100" /> </a>
            </div>
        </div>
    );
};

export default Technologies;