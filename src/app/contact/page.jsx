import Brands from "@/components/Brands";

const Contact = () => {
  return (
    <div className='mt-40'>
      {/* Titlu */}
      <div className='text-center text-shadow'>
        <h2>Suntem aici pentru tine</h2>
        <h3>Nu ezita să ne contactezi</h3>
      </div>
      {/* Harta */}
      <div className='container max-w-[1440px] mt-32 px-5 py-12 md:pt-40 mx-auto flex flex-col-reverse h-[900px] gap-y-10'>
        <div className='w-full h-full rounded-lg overflow-hidden p-10 flex flex-col md:flex-row md:items-end md:justify-start justify-end relative iframe-container'>
          <iframe
            width='100%'
            height='100%'
            className='responsive-iframe'
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.2685853345934!2d25.442077599999998!3d44.9178733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f4190454420d%3A0x89a6aeb87ef12351!2sMONTE%20BIANCO%20S.A.!5e0!3m2!1sro!2sro!4v1713290590548!5m2!1sro!2sro'
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>
          {/* Adresa */}
          <div className='bg-body/90 lg:bg-body relative hidden md:flex flex-wrap py-4 mb-4 rounded items-center justify-start shadow-button'>
            <div className='lg:w-[350px] px-6 flex flex-col'>
              <h2 className='font-semibold tracking-widest text-lg'>
                Adresa
              </h2>
              <a
                href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                target='_blank'
                className='mt-1 text-accent font-medium hover hover:underline-offset-4 hover:decoration-2'
              >
                Strada Fructelor, Numărul 5, Pucioasa, 135400, Dâmboviţa România
              </a>
            </div>
          </div>
          <div className='flex flex-col items-end justify-center gap-y-6 absolute top-12 right-12'>
            {/* Telefon */}
            <div className='bg-body/90 lg:bg-body  hidden md:flex flex-wrap py-2 rounded items-center justify-start shadow-button text-lg'>
              <a
                href='tel:+40245606296'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 px-3 font-medium flex items-center justify-center gap-x-1'
              >
                <span className='text-black font-semibold'>Tel:</span> +40.245.606.296
              </a>
            </div>
            {/* Fax */}
            <div className='bg-body/90 lg:bg-body  hidden md:flex flex-wrap py-2 rounded items-center justify-start shadow-button text-lg'>
              <a
                href='tel:+40245606286'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 px-3 font-medium flex items-center justify-center gap-x-1'
              >
                <span className='text-black font-semibold'>Fax:</span> +40.245.606.286
              </a>
            </div>
            {/* Vanzari */}
            <div className='bg-body/90 lg:bg-body  hidden md:flex flex-wrap flex-col py-2 rounded items-start px-3 justify-start shadow-button text-lg'>
              <p className='font-semibold'>Vanzari:</p>
              <a
                href='mailto: sales@montebianco.ro'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium flex items-center justify-center gap-x-1'
              >
                sales@montebianco.ro
              </a>
            </div>
            {/* Fabrica */}
            <div className='bg-body/90 lg:bg-body  hidden md:flex flex-wrap flex-col py-2 rounded items-start px-3 justify-start shadow-button text-lg'>
              <p className='font-semibold'>Fabrica:</p>
              <a
                href='mailto: montebianco@montebianco.ro'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium flex items-center justify-center gap-x-1'
              >
                montebianco@montebianco.ro
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Panel */}
        {/* <div className='flex md:hidden flex-col gap-y-6'>
          <div className='lg:w-1/3 md:w-1/2 bg-white/90 z-[7] flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 mr-4 lg:mb-[24rem] rounded shadow-md'>
            <h2 className='font-semibold tracking-widest mb-1'>Program:</h2>
            <div className='relative mb-4'>
              <p className='leading-relaxed font-semibold flex flex-col lg:flex-row gap-x-1'>
                <span className='text-accent'>Luni-Sambata:</span> 11:00 am -
                19:00 pm
              </p>
            </div>
            <div className='relative'>
              <p className='leading-relaxed font-semibold'>
                <span className='text-accent'>Duminica:</span> Inchis
              </p>
            </div>
          </div>
          <div className='bg-white/90 relative flex flex-wrap py-4 mb-4 rounded shadow-md items-center justify-start'>
            <div className='lg:w-1/2 px-6 mb-4 lg:mt-0'>
              <h2 className='title-font font-semibold tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto: madinytattoo@gmail.com'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold items-center flex'
              >
                Madinytattoo@gmail.com
              </a>
              <h2 className='font-semibold tracking-widest mt-4 text-sm'>
                PHONE
              </h2>
              <a
                href='tel:+40741620774'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                +04.741.620.774
              </a>
            </div>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold tracking-widest text-sm'>
                ADDRESS
              </h2>
              <a
                href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                target='_blank'
                className='mt-1 text-accent font-bold hover hover:underline-offset-4 hover:decoration-2'
              >
                Șos. Pipera 61, București 077190
              </a>
            </div>
          </div>
        </div> */}
      </div>
      {/* Brands */}
      <div className="mb-8">
      <Brands />
      </div>
    </div>
  );
};

export default Contact;
