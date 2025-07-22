import React from 'react';
const QrCodeMenu = () => {
  return (
    <section>
      <div className="ad-menu-qr-code">
        <div className="ad-menu-qr-code-container">
          <p>
            Scan the QR Code
            <br className="d-none d-lg-block" />
            to View Full Menu
          </p>
          <img src="/img/aida-images/menu-qr-code.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default QrCodeMenu;
