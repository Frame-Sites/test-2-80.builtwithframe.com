import { useState } from 'react';
import styles from './styles.module.scss';
import { downloadResume, createImageUrl } from '../../utils';

const Navbar = ({ resumeUrl, articles, renderAbout, setNavItem }) => {
  // console.log(setNavItem);
  const resume = createImageUrl(resumeUrl);
  const [navState, setNavState] = useState('close');
  const changeNavState = (data) => {
    const state = navState === 'close' ? 'open' : 'close';
    setNavState(state);
    if (data) {
      setNavItemSelected(data.toLowerCase());
      setNavItem(data);
    }
  };
  const [navItemSeclected, setNavItemSelected] = useState('home');
  const changeNavItemState = (data) => {
    setNavItemSelected(data);
  };
  // console.log(resumeUrl);
  return (
    /*eslint-disable*/
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        {/* <img src="/images/frame-logo.svg" alt="Logo" /> */}
        <div
          className={styles.tempImage}
          onClick={() => window.scroller.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
      <div className={styles.navMiddle}>
        <ul className={styles.navItems}>
          <li
            className={`${navItemSeclected === 'home' ? styles.activeLink : ''}`}
            onClick={() => {
              changeNavItemState('home');
              setNavItem('Home');
            }}
          >
            Home
          </li>
          {renderAbout && (
            <li
              className={`${navItemSeclected === 'about' ? styles.activeLink : ''}`}
              onClick={() => {
                changeNavItemState('about');
                setNavItem('About');
              }}
            >
              About
            </li>
          )}
          {!!articles.length && (
            <li
              className={`${navItemSeclected === 'articles' ? styles.activeLink : ''}`}
              onClick={() => {
                changeNavItemState('articles');
                setNavItem('Articles');
              }}
            >
              Articles
            </li>
          )}
          <li
            className={`${navItemSeclected === 'skills' ? styles.activeLink : ''}`}
            onClick={() => {
              changeNavItemState('skills');
              setNavItem('Resume');
            }}
          >
            Resume
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <button
          onClick={() => downloadResume(resume, true)}
          type="button"
          className={styles.navButtom}
        >
          Resume
        </button>
      </div>
      <div
        className={`${styles.navRightMobile} ${navState}`}
        onClick={() => changeNavState()}
        // onKeyDown={() => changeNavState()}
        // role="button"
        // tabIndex={-1}
      >
        <div className={`bar1 ${navState}`} />
        <div className={`bar2 ${navState}`} />
        <div className={`bar3 ${navState}`} />
      </div>
      <div className={`${styles.navMobile} ${navState === 'close' ? styles.close : styles.open}`}>
        <ul className={styles.navItemsMobile}>
          <li
            className={`${navItemSeclected === 'home' ? styles.activeMobileLink : ''}`}
            onClick={() => changeNavState('Home')}
          >
            Home
          </li>
          {renderAbout && (
            <li
              className={`${navItemSeclected === 'about' ? styles.activeMobileLink : ''}`}
              onClick={() => changeNavState('About')}
            >
              About
            </li>
          )}
          {!!articles.length && (
            <li
              className={`${navItemSeclected === 'articles' ? styles.activeMobileLink : ''}`}
              onClick={() => changeNavState('Articles')}
            >
              Articles
            </li>
          )}
          <button
            onClick={() => downloadResume(resume, true)}
            type="button"
            className={styles.navMobileButtom}
          >
            Resume
          </button>
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
