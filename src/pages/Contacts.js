import React from 'react';

const Contacts = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Aarhus, Denmark</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+4571362814">+45 713-62-814</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:tnestere@gmail.com">tnestere@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
