export const CertificateCard = ({ title, issuer, imageUrl }) => {
  return (
    <div className="card-certificado">
      <div className="certificado-imagen">
        <img src={imageUrl} alt={`Certificado ${title}`} />
      </div>
      <div className="certificado-info">
        <h4>{title}</h4>
        <p>{issuer}</p>
      </div>
    </div>
  );
};