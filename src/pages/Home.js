import React from 'react';
import Header from '../components/Header/Header';
import ContentLayout from '../components/ContentLayout/ContentLayout';

const Home = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Hard Skills</h2>
            <p>
              HTML, CSS, JavaScript, React.js(Hooks, React Router), Redux, NPM, Git, TailwindCSS,
              Next.js, TypeScript
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Soft Skills</h2>
            <p>
              Problem-solving, Attention to detail, Continuous learning, Teamwork, Communication
            </p>
          </li>
        </ul>
      </ContentLayout>
    </>
  );
};

export default Home;
