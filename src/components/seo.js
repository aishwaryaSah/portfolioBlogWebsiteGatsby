/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, desc, banner, pathname, article, node }) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            siteUrl
            defaultTitle: title
            defaultDescription: description
            defaultBanner: banner
            headline
            siteLanguage
            author
          }
        }
      }
    `
  );

  const seo = {
    title: title || site.defaultTitle,
    description: desc || site.defaultDescription,
    image: `${site.siteUrl}${banner || site.defaultBanner}`,
    url: `${site.siteUrl}${pathname || ''}`,
  }
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: site.siteUrl,
    headline: site.headline,
    inLanguage: site.siteLanguage,
    mainEntityOfPage: site.siteUrl,
    description: site.defaultDescription,
    name: site.defaultTitle,
    author: {
      '@type': 'Person',
      name: site.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: site.author,
    },
    copyrightYear: '2020',
    creator: {
      '@type': 'Person',
      name: site.author,
    },
    publisher: {
      '@type': 'Person',
      name: site.author,
    },
    datePublished: '2020-04-12',
    dateModified: site.buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${site.siteUrl}${site.defaultBanner}`,
    },
  }

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': site.siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ]


  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: site.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: site.author,
      },
      copyrightYear: '2020',
      creator: {
        '@type': 'Person',
        name: site.author,
      },
      publisher: {
        '@type': 'Organization',
        name: site.author,
        logo: {
          '@type': 'ImageObject',
          url: `${site.siteUrl}${site.defaultBanner}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.title,
      inLanguage: site.siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={site.siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="gatsby-starter" content="Gatsby Starter Prismic" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      {/* <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        // locale={ogLanguage}
        name={facebook}
      /> */}
      {/* <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} /> */}
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null,
}
export default SEO;
