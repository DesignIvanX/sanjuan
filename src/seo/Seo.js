import Head from "next/head";

const Seo = ({
  title,
  description,
  twitter_card,
  twitter_site,
  twitter_creator,
  twitter_title,
  twitter_description,
  twitter_image,
  og_title,
  og_description,
  og_image,
  og_url,
  og_site_name,
  og_locale,
  og_type,
  fb_app_id,
  // seo
  keywords,
  author,
  copyright,
  // schema
  url,
  name,
  facebook,
  instagram,
  twitter,
  inLenguage = "es",
  captain,
  siteName,
}) => {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: `${name}`,
        url: `${url}`,
        sameAs: [`${facebook}`, `${instagram}`, `${twitter}`],
        image: {
          "@id": `${url}#logo`,
        },
        logo: {
          "@type": "ImageObject",
          "@id": `${url}#logo`,
          inLanguage: `${inLenguage}`,
          url: `${url}/public/icon.ico`,
          contentUrl: `${url}/public/icon.ico`,
          width: 1024,
          height: 1021,
          caption: `${captain}`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url: `${url}`,
        name: `${name}`,
        description: `${description}`,
        publisher: {
          "@id": `${url}#organization`,
        },
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url: `${url}`,
        name: `${name}`,
        isPartOf: {
          "@id": `${url}#website`,
        },
        about: {
          "@id": `${url}#organization`,
        },
        primaryImageOfPage: {
          "@id": `${url}#primaryimage`,
        },
        description: `${description}`,
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
        inLanguage: inLenguage,
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`${url}`],
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        inLanguage: inLenguage,
        url: "https://www.uhg.edu.py/src/img/logo/logouhg.webp",
        contentUrl: "https://www.uhg.edu.py/src/img/logo/logouhg.webp",
        width: 1200,
        height: 630,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url: `${url}`,
        name: `${name}`,
        isPartOf: { "@id": `${url}#website` },
        about: { "@id": `${url}#organization` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        datePublished: "2019-10-23T00:41:21+00:00",
        dateModified: "2021-07-19T17:40:35+00:00",
        description: `${description}`,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: `${inLenguage}`,
        potentialAction: [{ "@type": "ReadAction", target: [`${url}`] }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: `${siteName}`,
          },
        ],
      },
    ],
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitter_card} />
      <meta name="twitter:site" content={twitter_site} />
      <meta name="twitter:creator" content={twitter_creator} />
      <meta name="twitter:title" content={twitter_title} />
      <meta name="twitter:description" content={twitter_description} />
      <meta name="twitter:image" content={twitter_image} />
      {/* Web */}
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={og_description} />
      <meta property="og:image" content={og_image} />
      <meta property="og:url" content={og_url} />
      <meta property="og:site_name" content={og_site_name} />
      <meta property="og:locale" content={og_locale} />
      <meta property="og:type" content={og_type} />
      {/* Faccebook */}
      <meta property="fb:app_id" content={fb_app_id} />
      {/* Optimization SEO  */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      {/* default settings */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href="https://www.uhg.edu.py/" />
      <link rel="apple-touch-icon" href="../../public/logo192.png" />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no,initial-scale=1.0"
      />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0">  */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../../public/favicon.ico"
      />
      {/* End Optimization SEO  */}
      {/* SEO schema  */}
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      {/* SEO schema end  */}
      {/* Analitics */}
      {/* <script async src=""></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', '');
      </script> */}

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-Q229GL8HW4`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q229GL8HW4', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};

export default Seo;
