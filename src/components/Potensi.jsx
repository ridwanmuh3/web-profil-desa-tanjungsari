import foto1 from '/src/assets/images/biofloc.png';
import foto2 from '/src/assets/images/seroja.jpg';
import foto3 from '/src/assets/images/image-3.jpg';

const listPotensi = [
  {
    namaPotensi: 'Biofloc',
    deskripsi:
      'Dengan biofloc, Desa Tanjungsari dapat menjadi pusat produksi ikan yang berkelanjutan dan meningkatkan kesejahteraan masyarakat.',
    foto: foto1,
  },
  {
    namaPotensi: 'UMKM Saroja',
    deskripsi:
      'UMKM yang memproduksi makanan dengan cita rasa yang khas dan berkualitas dengan bahan lokal.',
    foto: foto2,
  },
  {
    namaPotensi: 'Pesawahan',
    deskripsi:
      'Sawah subur menghasilkan padi berkualitas yang menjadi andalan ekonomi dan ketahanan pangan desa.',
    foto: foto3,
  },
];

const Potensi = () => {
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
                    src={item.foto}
                    alt='image not found'
                    loading='lazy'
                  />
                </div>
                <div className='bg-white p-5 rounded-b-lg space-y-2 w-full'>
                  <h1 className='font-bold text-normal leading-8 md:text-lg md:leading-8'>
                    {item.namaPotensi}
                  </h1>
                  <p className='text-normal leading-8 md:text-lg md:leading-8'>
                    {item.deskripsi}
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
