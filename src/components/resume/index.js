import { useState, useEffect } from 'react';
import { createImageUrl, downloadResume } from '../../utils';

const Resume = (props) => {
  const [resumeUrl, setUrl] = useState('');
  const { url } = props;
  const Url = createImageUrl(url);
  useEffect(async () => {
    const resume = await downloadResume(Url, false);
    setUrl(resume);
  }, []);
  // console.log(resumeUrl);
  return (
    <div className="resumeConatiner" style={{ display: 'flex', justifyContent: 'center' }}>
      {!!resumeUrl && <iframe width="80%" height="800px" title="Resume" src={resumeUrl} />}
    </div>
  );
};

export default Resume;
