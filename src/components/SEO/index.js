import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Puedes agregar más metadatos aquí si es necesario */}
    </Helmet>
  );
};

export default SEO;