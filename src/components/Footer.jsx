import emailLogo from '/src/assets/images/logos/email.png';
import telephoneLogo from '/src/assets/images/logos/telephone.png';

const Footer = () => {
  return (
    <>
      <footer className='bg-secondaryBg shadow-lg shadow-slate-500/30'>
        <div className='container px-6 md:px-6 lg:px-[5rem] w-full py-6 flex items-center justify-between flex-col md:flex-row lg:flex-row gap-4'>
          <div>
            <p className='font-bold font-inter text-blackText text-center text-normal leading-8'>
              © 2024 KKN 88 Tanjungsari | Desa Tanjungsari
            </p>
          </div>
          <div className='flex gap-3'>
            <a href='mailto:ridwanmuhraihan@gmail.com'>
              <img src={emailLogo} alt='image not found' />
            </a>
            <a href='tel:085793516167'>
              <img src={telephoneLogo} alt='image not found' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
