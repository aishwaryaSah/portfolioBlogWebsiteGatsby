module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Aishwarya Blogs!', // Navigation and Site Title
  titleAlt: 'Aishwarya Blogs!', // Title for JSONLD
  description: 'A portfolio website with blogs in making.',
  headline: 'Technical blogs', // Headline for schema.org JSONLD
  url: 'https://asah.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '../images/profileimage.jpeg', // Used for SEO
  // ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'asah27', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Aishwarya', // Author for schemaORGJSONLD
  themeColor: 'white',
  backgroundColor: '#123c69',
}