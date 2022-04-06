import SEO from '@components/seo';
import type { NextPage } from 'next';

const Test: NextPage = () => {
  return (
    <>
      <SEO title='Test' />
      <div className='px-12 pt-24 pb-36'>
        <div className='mt-10 flex space-x-5'>
          {/* <video key='1' controls playsInline className='aspect-video w-3/4'>
            <source src={'https://vimeo.com/662170319'} />
          </video> */}

          <div className='relative aspect-video w-3/4'>
            <iframe
              src='https://player.vimeo.com/video/662170319?h=02989620f1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title='3강_1부.mp4'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
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
