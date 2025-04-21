import React from 'react';
import '../index.css';

const Certificates: React.FC = () => {
  return (
    <section className="certificates" id="certificates">
      <h2 className="title">My <span>Certificates</span></h2>
      <div className="certificates-gallery">
        {/* Código de incorporação do Certificado */}
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="85d2c830-c567-4604-9b85-9ec39957970e"
          data-share-badge-host="https://www.credly.com"
        />
        <script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        ></script>

        {/* Adicione outros certificados da mesma forma, usando o código de incorporação deles */}
      </div>
    </section>
  );
};

export default Certificates;
