const Hero = () => {
  return (
    <>
      <section
        className='bg-blend-overlay bg-center bg-no-repeat bg-cover bg-[url("/src/assets/images/hero-bg.png")] min-h-[720px]'
        id='home'>
        <div className='container px-6 md:px-12 lg:px-[5rem] min-h-[720px] flex items-center justify-center flex-col gap-6'>
          <div className='flex items-center justify-center flex-col gap-4 text-center'>
            <p className='text-normal md:text-lg text-whiteText'>
              Selamat datang di situs resmi
            </p>
            <h1 className='font-barlow text-5xl md:text-6xl font-bold text-normal text-whiteText'>
              Desa Tanjungsari
            </h1>
            <p className='text-normal md:text-lg text-whiteText'>
              Kecamatan Sukaresik
            </p>
            <p className='text-normal md:text-lg text-whiteText'>
              Kabupaten Tasikmalaya
            </p>
          </div>
          <div>
            <a
              className='bg-gradient-to-r from-primary to-blue-300  hover:from-blue-300 hover:to-primary  text-blackText font-bold font-inter py-3 px-6 rounded-[4px] transition-all duration-300 ease-in-out'
              href='#profil'>
              Lihat Profil Desa
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
