import btoa from 'btoa';

const createImageUrl = key => {
  const imageRequest = JSON.stringify({
    bucket: 'cf-simple-s3-origin-cloudfrontfors3-273116933489',
    key,
  });
  return `https://d1kk667yopfgms.cloudfront.net/${btoa(imageRequest)}`;
};
export default createImageUrl;
