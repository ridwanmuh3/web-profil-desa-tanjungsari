const Galeri = () => {
  const images = [
    {
      styleGrid: 'row-span-1 sm:col-span-2 md:col-span-2',
      link: '/src/assets/images/image-1.jpg',
    },
    { styleGrid: 'row-span-1', link: '/src/assets/images/image-2.jpg' },
    {
      styleGrid: 'row-span-1 col-span-2 sm:col-span-3 md:col-span-1',
      link: '/src/assets/images/seroja.jpg',
    },
    {
      styleGrid: 'row-span-1 sm:col-span-1 md:col-span-1 col-span-1',
      link: '/src/assets/images/biofloc.png',
    },
    {
      styleGrid: 'row-span-1 col-span-1 sm:col-span-2 md:col-span-1',
      link: '/src/assets/images/pangaosan2.png',
    },
    {
      styleGrid: 'row-span-1 sm:col-span-2 col-span-2 md:col-span-2',
      link: '/src/assets/images/nomaskat.png',
    },
    {
      styleGrid:
        'row-span-1 col-span-2 sm:col-span-1 md:col-span-4 lg:col-span-2',
      link: '/src/assets/images/pangaosan.png',
    },
  ];

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
                className={`${image.styleGrid} overflow-hidden rounded-lg bg-primary shrink-0 h-48 sm:h-60 md:h-72`}
                key={`image-${index + 1}`}>
                <img
                  className='object-center h-full w-full object-cover'
                  src={image.link}
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
