import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, name, type }) {
  const defaultMeta = {
    title: 'Sarvin Agrochemical - Leading Agrochemical Solutions for India',
    description: 'India\'s Trusted Agrochemical Professionals with 25+ Years of Experience. Offering quality seeds, certified products, and expert advisory.',
    name: 'Sarvin Agrochemical',
    type: 'website'
  }

  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title ? `${title} | Sarvin Agrochemical` : defaultMeta.title}</title>
      <meta name='description' content={description || defaultMeta.description} />
      
      { /* OpenGraph tags */ }
      <meta property="og:type" content={type || defaultMeta.type} />
      <meta property="og:title" content={title || defaultMeta.title} />
      <meta property="og:description" content={description || defaultMeta.description} />
      
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={name || defaultMeta.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultMeta.title} />
      <meta name="twitter:description" content={description || defaultMeta.description} />
    </Helmet>
  )
}
