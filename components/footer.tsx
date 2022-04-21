import Layout from '@layouts/sectionLayout';
// import Image from 'next/image';
import Link from 'next/link';
// import Logo from '@public/logo.png';

export default function Footer() {
  return (
    <Layout bgColor='bg-[#14161a]' padding='pt-[6.5rem] pb-[7.5rem]'>
      <div className='flex justify-between'>
        {/* 좌측 섹션 */}
        <div>
          <Link href='/'>
            <a>
              <div className=''>
                {/* <Image
                  src={Logo}
                  alt='Logo'
                  layout='fill'
                  objectFit='cover'
                  priority
                /> */}
                <svg
                  width='178'
                  height='21'
                  viewBox='0 0 178 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.0955 0.0735113H14.2633V10.3162H18.0955V0.0735113ZM12.0183 0.318553H0V9.87514H12.0183V0.318553ZM3.78691 6.54259V3.65111H8.23143V6.54259H3.78691ZM18.0955 11.0513H0.748312V13.9183H14.3086V14.7515H0.793664V21H18.2996V18.133H4.58057V17.2999H18.0955V11.0513Z'
                    fill='white'
                  />
                  <path
                    d='M36.8694 0.0735113V21H40.4522V0.0735113H36.8694ZM31.994 7.93932H30.4294V11.86H31.994V20.6324H35.5315V0.171528H31.994V7.93932ZM25.0778 16.4912V12.007H29.613V0.563594H21.5177V4.09218H26.0756V8.52742H21.5177V20.0198H26.189C27.8216 20.0198 29.8852 19.7748 31.0416 19.2602V15.7806C29.8625 16.2462 28.0484 16.4912 26.5291 16.4912H25.0778Z'
                    fill='white'
                  />
                  <path
                    d='M61.7205 0.0735113H57.8882V21H61.7205V0.0735113ZM47.7973 0.441074H43.8517V20.0198H51.8564C53.7158 20.0198 55.6886 19.6523 56.8678 19.0152V15.2415C55.6886 15.8541 53.6931 16.2462 51.8564 16.2462H47.7973V0.441074Z'
                    fill='white'
                  />
                  <path
                    d='M76.8435 6.93466H79.7914V10.3162H83.6236V0.0735113H79.7914V3.16103H76.7301C75.8911 1.27421 73.8502 0.0980165 70.993 0.0980165C67.2288 0.0980165 64.8478 2.15636 64.8478 5.17036C64.8478 8.20887 67.2288 10.2427 70.993 10.2427C73.9636 10.2427 76.0725 8.96849 76.8435 6.93466ZM68.6347 5.17036C68.6347 4.06768 69.5418 3.35706 70.993 3.35706C72.4443 3.35706 73.3514 4.06768 73.3514 5.17036C73.3514 6.27305 72.4443 6.98366 70.993 6.98366C69.5418 6.98366 68.6347 6.27305 68.6347 5.17036ZM70.3354 18.133V17.2999H83.6236V11.0513H66.5032V13.9183H79.8367V14.7515H66.5485V21H83.8277V18.133H70.3354Z'
                    fill='white'
                  />
                  <path
                    d='M107.959 0.0735113V7.7923H105.011V0.563594H93.7414V20.0198H105.011V11.6639H107.959V21H111.792V0.0735113H107.959ZM101.179 16.1727H97.5737V4.41074H101.179V16.1727Z'
                    fill='white'
                  />
                  <path
                    d='M133.513 0.0735113H129.681V21H133.513V0.0735113ZM119.59 0.441074H115.645V20.0198H123.649C125.509 20.0198 127.482 19.6523 128.661 19.0152V15.2415C127.482 15.8541 125.486 16.2462 123.649 16.2462H119.59V0.441074Z'
                    fill='white'
                  />
                  <path
                    d='M146.255 8.03734L154.192 13.5263L156.21 10.1692L147.956 4.8028C148.478 3.50408 148.84 2.13186 149.022 0.66161L145.122 0C144.419 5.61143 140.836 9.48308 136.981 9.50758V13.4282C140.677 13.4037 144.01 11.3209 146.255 8.03734ZM136.595 20.2649H156.188V16.3932H136.595V20.2649Z'
                    fill='white'
                  />
                  <path
                    d='M178 11.0023V8.03734H176.821V0.0735113H159.587V3.03851H173.011V4.09218H159.587V6.98366H173.011V8.03734H158.408V11.0023H166.299V12.0805H159.519V14.6044H173.125V15.4131H159.564V21H177.07V18.4516H163.306V17.6429H176.866V12.0805H170.109V11.0023H178Z'
                    fill='white'
                  />
                </svg>
              </div>
            </a>
          </Link>

          <nav className='mt-10 flex space-x-7 font-medium'>
            <Link href='/'>
              <a className='text-[#c0c0c0]'>회사소개</a>
            </Link>

            <Link href='/'>
              <a className='text-[#c0c0c0]'>이용약관</a>
            </Link>

            <Link href='/'>
              <a>개인정보처리방침</a>
            </Link>
          </nav>

          <div className='mt-[3.75rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas auctor
            <br />
            sapien ac tristique. Sed commodo pretium neque vitae venenatis. Nam
            sagittis
            <br />
            mauris velit, nec tempor risus lobortis a. Phasellus faucibus eros a
            arcu hendrerit,
            <br />
            quis aliquet sapien congue. Nulla elementum quis magna sed
            porttitor.
          </div>
        </div>
        {/* 좌측 섹션 */}

        {/* 우측 섹션 */}
        <div className='font-medium'>
          <div>고객센터</div>

          <Link href='/'>
            <a>
              <div className='mt-5 rounded-sm bg-white py-3 px-[3.75rem] text-sm text-black'>
                고객센터 채널톡
              </div>
            </a>
          </Link>
        </div>
        {/* 우측 섹션 */}
      </div>
    </Layout>
  );
}
