import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title} | 밀레니얼 머니스쿨 - 밀머스</title>
      <meta name='description' content={description} />
      <meta
        property='og:title'
        content={`${title} | 밀레니얼 머니스쿨 - 밀머스`}
      />
      <meta property='og:description' content={description} />
    </Head>
  );
}
