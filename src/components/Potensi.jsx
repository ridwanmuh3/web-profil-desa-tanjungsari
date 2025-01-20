const Potensi = () => {
  const listPotensi = [
    {
      namaPotensi: 'Biofloc',
      description:
        'Dengan biofloc, Desa Tanjungsari dapat menjadi pusat produksi ikan yang berkelanjutan dan meningkatkan kesejahteraan masyarakat.',
      image: '/src/assets/images/biofloc.png',
    },
    {
      namaPotensi: 'UMKM Saroja',
      description:
        'UMKM yang memproduksi makanan dengan cita rasa yang khas dan berkualitas dengan bahan lokal.',
      image: '/src/assets/images/seroja.jpg',
    },
    {
      namaPotensi: 'Pesawahan',
      description:
        'Sawah subur menghasilkan padi berkualitas yang menjadi andalan ekonomi dan ketahanan pangan desa.',
      image: '/src/assets/images/image-3.jpg',
    },
  ];

  return (
    <>
      <section className='py-40 bg-secondaryBg' id='potensi'>
        <div className='container flex gap-6 flex-col px-6 md:px-6 lg:px-[5rem]'>
          <h1 className='text-center font-barlow font-bold text-3xl md:text-4xl text-blackText'>
            Potensi
          </h1>
          <div className='flex gap-8 items-start justify-center flex-wrap leading-8'>
            {listPotensi.map((item) => (
              <div
                className='rounded-lg shadow-slate-500/25 shadow-lg text-blackText max-w-[270px] flex-shrink-0'
                key={item.namaPotensi}>
                <div className='w-full h-40 overflow-hidden rounded-t-lg'>
                  <img
                    className='object-fit object-bottom'
                    src={item.image}
                    alt='image not found'
                    loading='lazy'
                  />
                </div>
                <div className='bg-white p-5 rounded-b-lg space-y-2 w-full'>
                  <h1 className='font-bold text-normal leading-8 md:text-lg md:leading-8'>
                    {item.namaPotensi}
                  </h1>
                  <p className='text-normal leading-8 md:text-lg md:leading-8'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Potensi;
