import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const navMenus = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Profil',
    link: '#profil',
  },
  {
    name: 'Galeri',
    link: '#galeri',
  },
  {
    name: 'Potensi',
    link: '#potensi',
  },
  {
    name: 'Wilayah',
    link: '#wilayah',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    determineActiveSection();
  };

  const determineActiveSection = () => {
    navMenus.forEach((menu) => {
      const sectionId = menu.name.toLowerCase();
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
          setActiveLink(sectionId);
        }
      }
    });
  };

  return (
    <>
      <header
        className={`${
          (isScrolled || showMenu) && 'bg-secondaryBg shadow-lg'
        } fixed top-0 right-0 left-0 z-10 transition duration-300 ease-in-out`}>
        <nav>
          <div className='container flex justify-between items-center gap-8 py-5 px-6 md:px-6 lg:px-[5rem]'>
            <h1 className='font-barlow font-extrabold italic text-slate text-2xl text-primary'>
              <a className='text-nowrap' href='#home'>
                Desa Tanjungsari
              </a>
            </h1>
            {/* nav menu */}
            <div className='hidden lg:block'>
              <div
                className={`flex items-center gap-6 font-bold ${
                  isScrolled ? 'text-blackText' : 'text-whiteText'
                }`}>
                {navMenus.map((menu) => (
                  <a
                    key={menu.name}
                    className={
                      (activeLink === menu.name.toLowerCase()
                        ? 'text-primary'
                        : '') +
                      ' text-nowrap hover:text-primary transition duration-300 ease-in-out'
                    }
                    href={menu.link}>
                    {menu.name}
                  </a>
                ))}
              </div>
            </div>
            {/* hamburger menu */}
            <div className='block lg:hidden'>
              <div className='cursor-pointer text-primary'>
                {!showMenu ? (
                  <BiMenu className='text-4xl' onClick={toggleMenu} />
                ) : (
                  <BiX className='text-4xl' onClick={toggleMenu} />
                )}
              </div>
              {showMenu && (
                <div className='fixed z-10 bg-secondaryBg left-0 top-16 right-0 py-6 px-3 rounded-b-lg shadow-md'>
                  <div
                    className='flex items-center justify-center flex-col gap-4 font-bold text-blackText w-full
                  '>
                    {navMenus.map((menu) => (
                      <a
                        key={menu.name}
                        className={
                          (activeLink === menu.name.toLowerCase()
                            ? 'text-primary'
                            : '') +
                          ' text-nowrap hover:text-primary transition duration-300 ease-in-out'
                        }
                        href={menu.link}>
                        {menu.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
