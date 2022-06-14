import Head from 'next/head';

interface SEOProps {
  title: string;
}

export default function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>{title} | 밀레니얼 머니스쿨</title>
    </Head>
  );
}
