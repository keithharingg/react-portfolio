import React from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';

const Contacts = () => {
  return (
    <>
      <ContentLayout>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Aarhus, Denmark</p>
          </li>
          <ContactLink linkText="+45 71 36 28 14" link="tel:+4571362814">
            Contact phone
          </ContactLink>
          <ContactLink
            linkText="Send a  message..."
            link="https://api.whatsapp.com/send?phone=380996706498">
            WhatsApp
          </ContactLink>
          <ContactLink linkText="Send an email..." link="mailto:taras.react.dev@gmail.com">
            Email
          </ContactLink>
        </ul>
      </ContentLayout>
    </>
  );
};

export default Contacts;

const ContactLink = ({ children, link, linkText }) => {
  return (
    <li className="content-list__item">
      <h2 className="title-2">{children}</h2>
      <p>
        <a target="_blank" rel="noreferrer" href={link}>
          {linkText}
        </a>
      </p>
    </li>
  );
};
