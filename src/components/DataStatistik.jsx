import { FaUserFriends, FaMapMarked, FaHome } from 'react-icons/fa';

const dataStatistik = [
  {
    label: 'Jumlah Penduduk',
    jumlah: 5180,
    logo: <FaUserFriends />,
  },
  {
    label: 'Jumlah Kepala Keluarga',
    jumlah: 1597,
    logo: <FaHome />,
  },
  {
    label: 'Luas Wilayah (Ha)',
    jumlah: 218.9,
    logo: <FaMapMarked />,
  },
];

const DataStatistik = () => {
  return (
    <>
      <section className='bg-secondaryBg py-28' id='data-statistik-desa'>
        <div className='container px-6 md:px-6 lg:px-[5rem]'>
          <div className='flex flex-col gap-6 justify-center items-center'>
            <h1 className='font-barlow text-blackText text-3xl md:text-4xl font-bold'>
              Data Statistik
            </h1>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
              {dataStatistik.map((data) => (
                <div
                  className='flex justify-center items-center gap-5 p-10'
                  key={data.label}>
                  <div className='text-6xl text-primary'>{data.logo}</div>
                  <div className='space-y-1.5'>
                    <h1 className='text-5xl font-bold'>{data.jumlah}</h1>
                    <p className='text-normal md:text-lg'>{data.label}</p>
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

export default DataStatistik;
