import fotoKepalaDesa from '/src/assets/images/foto-struktur-organisasi/kepala-desa.jpeg';

const About = () => {
  return (
    <>
      <section
        className='container px-6 md:px-12 lg:px-[7rem] py-20 sm:py-28 md:py-40'
        id='profil'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 text-blackText lg:gap-10'>
          <div className='flex items-center justify-center gap-4 flex-col shrink-0 order-0'>
            <div className='overflow-hidden rounded-lg '>
              <img
                className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover scale-125'
                src={fotoKepalaDesa}
                alt='Image not found'
                loading='lazy'
              />
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
              <h3 className='font-bold text-lg sm:text-xl md:text-2xl leading-7'>
                Amas
              </h3>
              <p className='text-normal sm:text-lg'>Kepala Desa</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 self-center mt-6 lg:mt-0 text-center lg:text-left lg:self-start'>
            <h1 className='font-barlow text-3xl md:text-4xl font-bold'>
              Tentang <span className='text-primary'>Desa Tanjungsari</span>
            </h1>
            <p className='max-w-full sm:max-w-[500px] md:max-w-[650px] font-inter leading-8 text-normal sm:text-lg sm:leading-8'>
              Desa Tanjungsari di Kabupaten Tasikmalaya dikenal dengan keindahan
              alam dan hasil pertanian. Desa ini terus berkembang melalui
              pembangunan dan pemberdayaan masyarakat, menjadikannya aset
              penting dan destinasi menarik di Tasikmalaya.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
