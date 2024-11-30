import React from 'react';
import { useSelector } from 'react-redux';

const AboutPage = () => {
    const aboutTitle = useSelector(state => state.aboutTitle)
  return (
    <div>
        <h1>{aboutTitle}</h1>
    </div>
  );
};

export default AboutPage;