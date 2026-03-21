import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, schema }) => {
  const defaultTitle = "Urdu Shayari | By Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)";
  const defaultDescription = "Discover a beautiful collection of Urdu Shayari from legendary poets like Mirza Ghalib, Allama Iqbal, Faiz Ahmed Faiz, curated by Aqsa Mirza.";
  const defaultKeywords = "AQSA ZAM ZAM MIRZA JOHAR BAIG, Aqsa Mirza, BA LLB, CLAT AIR 42, Legal Researcher, Urdu Shayari, Mirza Ghalib, Allama Iqbal, Faiz Ahmed Faiz, Jaun Elia, Ahmed Faraz, Love Shayari, Sad Shayari, Hindi Shayari, Poetry";
  const defaultUrl = "https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/";
  const defaultImage = "https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/vite.svg"; // Replace with your actual SEO image URL

  const seoTitle = title ? `${title} | Urdu Shayari` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoUrl = url || defaultUrl;
  const seoImage = image || defaultImage;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
