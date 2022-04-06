import SEO from '@components/seo';
import type { NextPage } from 'next';

const Test: NextPage = () => {
  return (
    <>
      <SEO title='Test' />
      <div className='px-12 pt-24 pb-36'>
        <div className='mt-10 flex space-x-5'>
          <video key='1' controls playsInline className='aspect-video w-3/4'>
            <source src={'https://vimeo.com/662170319'} />
          </video>
        </div>

        <div className='mt-8 flex w-3/4 space-x-7 rounded-sm bg-[#1e2126] pt-10 pb-20 pl-12 pr-48'>
          <div>💡</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas auctor sapien ac tristique. Sed commodo pretium neque vitae
            venenatis. Nam sagittis mauris velit, nec tempor risus lobortis a.
            Phasellus faucibus eros a arcu hendrerit, quis aliquet sapien
            congue. Nulla elementum quis magna sed porttitor.
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
