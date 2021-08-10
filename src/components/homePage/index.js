import { useState } from 'react';
import Landing from '../landing';
import About from '../about';
import Socials from '../socials';
import Article from '../articles';
import Navbar from '../navbar';
import Footer from '../footer';
import Meta from '../meta';
import Resume from '../resume';

const HomePage = props => {
  const [currentNavItem, setCurrentNavItem] = useState('Home');
  const { profile } = props;
  // console.log(props);
  const intro = profile.intro[0].content;
  const imageUrl = profile?.assets.filter(asset => asset.type === 'primary')[0]?.url;
  const resumeAssetsLength = profile?.assets.filter(asset => asset.type === 'resume').length;
  const resumeUrl = profile?.assets.filter(asset => asset.type === 'resume')[resumeAssetsLength - 1]
    ?.url;
  const name = `${profile.first_name} ${profile.last_name}`;
  const { socials, skills, coursework, experience, leadership, education, articles } = profile;
  const renderAbout = !!education.length || !!leadership.length || !!experience.length;
  const rederSkillsCoursework = !!skills.length || !!coursework.length;
  // console.log(intro, imageUrl, socials);
  const navbarProps = {
    resumeUrl,
    articles,
    rederSkillsCoursework,
    renderAbout,
  };
  const landingPageProps = {
    name,
    intro,
    imageUrl,
    socials,
    skills,
    coursework,
  };
  const AboutProps = {
    experience,
    leadership,
    education,
  };
  const ArticlesProps = {
    articles,
  };
  const metaProps = {
    imageUrl,
    name,
    intro,
    keywords: `${name}, personal website, portfolio`,
  };
  const resumeProps = {
    url: resumeUrl,
  };

  // const intro = props.intr
  return (
    <>
      <Meta {...metaProps} />
      <Navbar {...navbarProps} setNavItem={setCurrentNavItem} />
      <Socials {...landingPageProps} currenNav={currentNavItem} />
      {currentNavItem === 'Home' && (
      <Landing {...landingPageProps} />)}
      {currentNavItem === 'About' && renderAbout && <About {...AboutProps} />}
      {currentNavItem === 'Articles' && !!articles.length && <Article {...ArticlesProps} />}
      {currentNavItem === 'Resume' && <Resume {...resumeProps} />}
      <Footer />
    </>
  );
};

export default HomePage;
