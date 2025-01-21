import foto1 from '/src/assets/images/image-1.jpg';
import foto2 from '/src/assets/images/image-2.jpg';
import foto3 from '/src/assets/images/seroja.jpg';
import foto4 from '/src/assets/images/biofloc.png';
import foto5 from '/src/assets/images/pangaosan2.png';
import foto6 from '/src/assets/images/nomaskat.png';
import foto7 from '/src/assets/images/pangaosan.png';

const images = [
  {
    styleGrid: 'row-span-1 sm:col-span-2 md:col-span-2',
    foto: foto1,
  },
  { styleGrid: 'row-span-1', foto: foto2 },
  {
    styleGrid: 'row-span-1 col-span-2 sm:col-span-3 md:col-span-1',
    foto: foto3,
  },
  {
    styleGrid: 'row-span-1 sm:col-span-1 md:col-span-1 col-span-1',
    foto: foto4,
  },
  {
    styleGrid: 'row-span-1 col-span-1 sm:col-span-2 md:col-span-1',
    foto: foto5,
  },
  {
    styleGrid: 'row-span-1 sm:col-span-2 col-span-2 md:col-span-2',
    foto: foto6,
  },
  {
    styleGrid:
      'row-span-1 col-span-2 sm:col-span-1 md:col-span-4 lg:col-span-2',
    foto: foto7,
  },
];

const Galeri = () => {
  return (
    <>
      <section
        className='container py-40 px-6 md:px-6 lg:px-[5rem]'
        id='galeri'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-center font-barlow font-bold text-blackText text-3xl md:text-4xl'>
            Galeri
          </h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {images.map((image, index) => (
              <div
                className={`${image.styleGrid} overflow-hidden rounded-lg shrink-0 h-48 sm:h-60 md:h-72`}
                key={`image-${index + 1}`}>
                <img
                  className='object-center h-full w-full object-cover'
                  src={image.foto}
                  alt={`Gallery image ${index + 1}`}
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Galeri;
