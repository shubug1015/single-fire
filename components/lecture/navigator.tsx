import { navList } from '@components/navList';
import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigator() {
  const router = useRouter();
  const { category, page } = router.query;

  return (
    <div className='w-screen border-b-2 border-[#464c59]'>
      <Layout bgColor='#282e38' padding='py-6'>
        <div className='flex items-center'>
          <nav className='flex space-x-3 font-medium'>
            {navList.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                <a>
                  <div
                    className={cls(
                      (category && page
                        ? `/lecture/${category}/${page}`
                        : '/lecture') === nav.url
                        ? 'border-[#009fb0] bg-[#00e7ff] text-[#282e38]'
                        : 'border-[#4a4e57]',
                      'rounded-full border py-2 px-8'
                    )}
                  >
                    {nav.label}
                  </div>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </Layout>
    </div>
  );
}
