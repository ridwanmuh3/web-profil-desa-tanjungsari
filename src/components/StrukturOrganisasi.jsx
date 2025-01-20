import dataStrukturOrganisasi from '/src/data/strukturOrganisasi.json';

const StrukturOrganisasi = () => {
  return (
    <>
      <section
        className='container py-40 px-6 md:px-6 lg:px-[5rem]'
        id='struktur-organisasi'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-center space-y-4'>
            <h1 className='font-barlow text-blackText text-3xl md:text-4xl font-bold'>
              Struktur Organisasi
            </h1>
          </div>
          <div className='self-center w-full'>
            <div className='flex flex-col items-center justify-start gap-12'>
              {dataStrukturOrganisasi.map((data, index) => (
                <div className='space-y-6' key={data.bidang}>
                  {index >= 1 && (
                    <h2 className='text-center font-barlow font-bold text-2xl md:text-3xl'>
                      {data.bidang}
                    </h2>
                  )}
                  <div className='flex gap-8 flex-wrap justify-center'>
                    {data.anggota.map((anggota, index) => (
                      <div
                        className='rounded-lg shadow-slate-500/25 shadow-lg overflow-hidden w-56'
                        key={`anggota-${index + 1}`}>
                        <div className='overflow-hidden min-h-60 max-h-60'>
                          <img
                            className='object-cover w-full scale-100 '
                            src={anggota.foto}
                            alt='image not found'
                            loading='lazy'
                          />
                        </div>
                        <div className='p-4 space-y-1.5 bg-white text-center'>
                          <h2 className='text-lg font-bold'>{anggota.nama}</h2>
                          <p className='text-lg'>{anggota.jabatan}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StrukturOrganisasi;
