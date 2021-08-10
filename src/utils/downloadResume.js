import axios from 'axios';
import FileDownload from 'js-file-download';

// eslint-disable-next-line consistent-return
const downloadResume = async (url, toDowload) => {
  const getResume = axios.create({
    baseURL: url,
    method: 'GET',
    responseType: 'blob',
  });
  try {
    const response = await getResume.get();
    const { data } = response;
    const file = new Blob([data], { type: 'application/pdf' });
    const fileUrl = URL.createObjectURL(file);
    if (toDowload) return FileDownload(data, 'Resume.pdf');
    return fileUrl;
    // window.open(fileUrl);
  } catch (e) {
    // eslint-disable-next-line no-alert
    window.alert('Please upload new Resume');
  }
};

export default downloadResume;
