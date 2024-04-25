import React from 'react';

const ContentLayout = ({ children }) => {
  return (
    <main className="section">
      <div className="container">{children}</div>
    </main>
  );
};

export default ContentLayout;
