import { useState, useRef } from 'react';
import { Link as Scrolllink } from 'react-scroll';
import styles from './styles.module.scss';

const About = ({ experience, leadership, education }) => {
  const [section, setSection] = useState('1');
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  const thirdElement = useRef(null);
  const scrollFunction = () => {
    const firstPos = firstElement?.current ? firstElement.current.getBoundingClientRect() : '';
    const secondPos = secondElement?.current ? secondElement.current.getBoundingClientRect() : '';
    const thirdPos = thirdElement?.current ? thirdElement.current.getBoundingClientRect() : '';
    if (firstPos !== '' && firstPos.top < 200 && firstPos.top > 0) setSection('1');
    if (secondPos !== '' && secondPos.top < 200 && secondPos.top > 0) setSection('2');
    if (thirdPos !== '' && thirdPos.top < 200 && thirdPos.top > 0) setSection('3');
  };
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  /*eslint-disable*/
  const displayDate = (date) =>
    date.includes('Present') || date.includes('Invalid date')
      ? date
      : `${months[date.split('-')[1] - 1]}. ${date.split('-')[0]}`;
  /* eslint-enable */
  return (
    <div id="scroller" className={styles.overLay} onScroll={scrollFunction}>
      <div id="AboutSection" className={styles.mainContainer}>
        {!!experience.length && (
          <div className={styles.content} id="1" ref={firstElement}>
            <h1 className={styles.heading}>Experience</h1>
            {experience.map((item) => (
              <div className={styles.infoCard} key={item.id}>
                <p className={styles.position}>{item.position}</p>
                <div className={styles.cardContent}>
                  <div className={styles.pos}>
                    <p className={styles.title}>COMPANY/ORGANIZATION</p>
                    <p className={styles.value}>{item.company}</p>
                  </div>
                  <div className={styles.dates}>
                    <div className={styles.pos}>
                      <p className={styles.title}>START DATE</p>
                      <p className={styles.value}>{displayDate(item.start_date)}</p>
                    </div>
                    <div className={styles.pos}>
                      <p className={styles.title}>END DATE</p>
                      <p className={styles.value}>{displayDate(item.end_date)}</p>
                    </div>
                  </div>
                  <div className={styles.pos} style={{ width: '200px' }}>
                    <p className={styles.title}>COMPANY URL</p>
                    <p className={styles.value}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.link.slice(0, 30)}
                      </a>
                    </p>
                  </div>
                </div>
                {/* <hr className={styles.breakline} /> */}
              </div>
            ))}
          </div>
        )}
        {!!leadership.length && (
          <div className={styles.content} id="2" ref={secondElement}>
            <h1 className={styles.heading}>Leadership</h1>
            {leadership.map((item) => (
              <div className={styles.infoCard} key={item.id}>
                <p className={styles.position}>{item.position}</p>
                <div className={styles.cardContent}>
                  <div className={styles.pos}>
                    <p className={styles.title}>COMPANY/ORGANIZATION</p>
                    <p className={styles.value}>{item.organization}</p>
                  </div>
                  <div className={styles.dates}>
                    <div className={styles.pos}>
                      <p className={styles.title}>START DATE</p>
                      <p className={styles.value}>{displayDate(item.start_date)}</p>
                    </div>
                    <div className={styles.pos}>
                      <p className={styles.title}>END DATE</p>
                      <p className={styles.value}>{displayDate(item.end_date)}</p>
                    </div>
                  </div>
                  <div className={styles.pos} style={{ width: '200px' }}>
                    <p className={styles.title}>COMPANY URL</p>
                    <p className={styles.value}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.link.slice(0, 30)}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!!education.length && (
          <div className={styles.content} id="3" ref={thirdElement}>
            <h1 className={`${styles.heading} ${styles.eduHeading}`}>Education</h1>
            {education.map((item) => (
              <div className={styles.infoCard} key={item.id}>
                <p className={styles.position}>{item?.degreeSubtype}</p>
                <div className={styles.cardContent}>
                  <div className={styles.pos}>
                    <p className={styles.title}>College Name</p>
                    <p className={styles.value}>{item.university}</p>
                  </div>
                  <div className={styles.pos}>
                    <p className={styles.title}>MAJOR ONE</p>
                    <p className={styles.value}>{item.majorOne}</p>
                  </div>
                  {item?.majorTwo && (
                    <div className={styles.pos} style={{ width: '200px' }}>
                      <p className={styles.title}>MAJOR TWO</p>
                      <p className={styles.value}>{item.majorTwo}</p>
                    </div>
                  )}
                  {/* <div className={styles.pos} style={{ width: '200px' }}>
                    <p className={styles.title}> COllEGE URL</p>
                    <p className={styles.value}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.link.slice(0, 30)}
                      </a>
                      {item?.degreeSubtype}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.rightSide}>
          <div className={styles.rightStatusBar}>
            {!!experience.length && (
              <Scrolllink
                containerId="scroller"
                activeClass="active"
                to="1"
                smooth
                spy
                offset={-340}
                duration={600}
                className={styles.navLink}
              >
                <div
                  className={`${styles.statusCircle} ${section === '1' ? styles.selected : ''}`}
                />
              </Scrolllink>
            )}
            {!!leadership.length && (
              <Scrolllink
                containerId="scroller"
                activeClass="active"
                to="2"
                smooth
                spy
                offset={-100}
                duration={600}
                className={styles.navLink}
              >
                <div
                  className={`${styles.statusCircle} ${section === '2' ? styles.selected : ''}`}
                />
              </Scrolllink>
            )}
            {!!education.length && (
              <Scrolllink
                containerId="scroller"
                activeClass="active"
                to="3"
                smooth
                spy
                offset={-100}
                duration={600}
                className={styles.navLink}
              >
                <div
                  className={`${styles.statusCircle} ${section === '3' ? styles.selected : ''}`}
                />
              </Scrolllink>
            )}
            {/* <div className={styles.statusCircle} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
