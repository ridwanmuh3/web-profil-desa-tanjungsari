const VisiMisi = () => {
  return (
    <>
      <section className='py-40 bg-secondaryBg' id='visi-misi'>
        <div className='container px-6 md:px-12 lg:px-[5rem] flex justify-center flex-col md:flex-col lg:items-start md:items-center sm:items-center sm:flex-col lg:flex-row gap-28 text-blackText'>
          <div className='flex flex-col gap-4 items-center'>
            <div className='flex gap-4 items-center justify-center'>
              {/* <img src={visiLogo} alt='image not found' /> */}
              <h1 className='font-bold font-barlow text-3xl'>Visi</h1>
            </div>
            <div className='list-decimal ml-5 max-w-[450px] sm:max-w-[500px] md:max-w-[550px] space-y-2 text-normal leading-8 sm:text-lg sm:leading-8'>
              <p>
                Terwujudnya Desa Tanjungsari sebagai Desa yang mandiri berbasis
                pesawahan, untuk mencapai masyarakat yang sehat, cerdas, dan
                lebih sejahtera
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <div className='flex gap-4 items-center justify-center'>
              <h1 className='font-bold font-barlow text-3xl'>Misi</h1>
            </div>
            <ol className='list-decimal ml-5 max-w-[450px] sm:max-w-[500px] md:max-w-[550px] space-y-2 text-normal leading-8 sm:text-lg sm:leading-8'>
              <li>
                Menciptakan tata kelola pemerintah yang baik (good governance)
                berdasarkan demokratisasi, transparansi, penegakan hukum,
                berkeadilan, kesetaraan gender, dan mengutamakan pelayanan
                kepada masyarakat
              </li>
              <li>
                Meningkatkan pembangunan infrastruktur yang mendukung
                perekonomian desa, seperti jalan, jembatan serta infrastruktur
                strategis lainnya
              </li>
              <li>
                Meningkatkan pembangunan di bidang kesehatan untuk mendorong
                derajat kesehatan masyarakat agar dapat bekerja lebih optimal
                dan memiliki harapan hidup yang lebih panjang
              </li>
              <li>
                Meningkatkan pembangunan di bidang pendidikan untuk mendorong
                peningkatan kualitas sumber daya manusia agar memiliki
                kecerdasan dan daya saing yang lebih baik
              </li>
              <li>
                Meningkatkan pembangunan ekonomi dengan mendorong semakin tumbuh
                dan berkembangnya pembangunan di bidang pertanian dalam arti
                luas
              </li>
              <li>
                Mengupayakan pelestarian sumber daya alam untuk memenuhi
                kebutuhan dan pemerataan pembangunan guna meningkatkan
                perekonomian
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisiMisi;
