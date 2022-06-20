const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: { res: any }) => {
  const BASE_URL = 'http://localhost:3000';

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->
<url>
<loc>https://www.xn--o22bp6a0zk.com/</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/lecture</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/community</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/login</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/signup</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/lecture/real-estate/1</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/lecture/stock/1</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/lecture/coin/1</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/lecture/online-business/1</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/tutor/1</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/event/1</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/calculator</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/terms-of-service</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/refund-policy</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/privacy-policy</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/find-id</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.64</priority>
</url>
<url>
<loc>https://www.xn--o22bp6a0zk.com/reset-pw</loc>
<lastmod>2022-06-20T06:08:02+00:00</lastmod>
<priority>0.64</priority>
</url>
</urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
