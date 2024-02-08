import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// import { useTranslation } from 'react-i18next';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  // const { t } = useTranslation()

  
  const navigation = [
    {id:1, name: <span>Home</span>, href: '#home', current: true },
    {id:2, name: <span>About me</span>, href: '#about', current: false },
    {id:3, name: <span>Technologies</span>, href: '#technologies', current: false },
    {id:4, name: <span>My projects</span>, href: '#projects', current: false },
    {id:5, name: <span>Contact me</span>, href: '#contact', current: false },
  ]
  return (
    <Disclosure as="nav" className="fixed z-50 w-full bg-transparent backdrop-filter backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <div className='sm:mr-5'>
                  {/* <Switcher7/> */}
                </div>
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='w-full'>
                <div className="flex flex-1 justify-start items-center ">
                  <div className="flex flex-shrink-0">
                    {/* <a href="#home"><img src={logo} alt="" className='w-28'/></a> */}
                  </div>
                  <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-full lg:ml-6 lg:pt-5">
                    <div className="flex space-x-6 ml-7">
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-[#281849]' : 'text-black hover:text-[#281849] transform hover:scale-110 duration-500',
                            'rounded-md px-3 py-2 text-lg font-semibold'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    {/* <div className='hidden lg:block'>
                      <Switcher7/>      
                    </div> */}
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'text-[#281849]' : 'text-gray-300 hover:text-[#281849] transform hover:scale-105 duration-500',
                  'block rounded-md px-3 py-2 text-base text-center font-medium bg-[#0D0D0D]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}