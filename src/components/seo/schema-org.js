import React from "react";
import Helmet from "react-helmet";

export default React.memo(
  ({
    author,
    siteUrl,
    datePublished,
    dateModified,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "@id": "https://wwww.nikhilgohil11.com#organization",
        name: "Nikhil Gohil",
        url: "https://wwww.nikhilgohil11.com",
        sameAs: ["https://twitter.com/nikhilgohil11"],
        legalName: "Nikhil Gohil",
        logo: {
          "@type": "ImageObject",
          url: "https://wwww.nikhilgohil11.com/img/android-chrome-144x144.png",
          width: 144,
          height: 144
        },
        founder: {
          "@type": "Person",
          name: "Nikhil Gohil",
          image: {
            "@type": "ImageObject",
            url: "https://www.nikhilgohil11.com/img/nikhil.jpg",
            width: 300,
            height: 300
          }
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "@id": "https://wwww.nikhilgohil11.com#website",
        url: "https://wwww.nikhilgohil11.com",
        name: "Nikhil Gohil",
        alternateName: "Full Stack Developer | Nikhil Gohil",
        author: {
          "@id": "https://wwww.nikhilgohil11.com#organization"
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "@id": url,
        url,
        headline: title,
        description,
        publisher: {
          "@id": "https://wwww.nikhilgohil11.com#organization"
        },
        sourceOrganization: {
          "@id": "https://wwww.nikhilgohil11.com#organization"
        }
      }
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image
                }
              }
            ]
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image
            },
            description,
            author: {
              "@id": "https://wwww.nikhilgohil11.com#organization"
            },
            publisher: {
              "@id": "https://wwww.nikhilgohil11.com#organization"
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": siteUrl
            },
            datePublished,
            dateModified: dateModified ? dateModified : datePublished
          }
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);
