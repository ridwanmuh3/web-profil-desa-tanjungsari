const Wilayah = () => {
  return (
    <>
      <section
        className='container py-40 px-6 md:px-6 lg:px-[5rem]'
        id='wilayah'>
        <div className='flex gap-6 flex-col'>
          <h1 className='font-bold font-barlow text-3xl md:text-4xl text-blackText text-center'>
            Wilayah
          </h1>
          <div className='self-center w-full rounded-lg  shadow-slate-500/25 shadow-lg'>
            <iframe
              className='rounded-lg w-full h-[30rem] md:h-[35rem]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27010.829890266956!2d108.17821630697945!3d-7.144586360198968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f48d102031069%3A0x10cf5a63fc1add16!2sTanjungsari%2C%20Sukaresik%2C%20Tasikmalaya%20Regency%2C%20West%20Java!5e1!3m2!1sen!2sid!4v1737181411301!5m2!1sen!2sid!'
              allowFullScreen=''
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wilayah;
