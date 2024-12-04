const getImagePath = (imageName) => {
  // Get the public URL from package.json homepage or default to ''
  const publicURL = process.env.PUBLIC_URL || '';
  return `${publicURL}/images/${imageName}`;
};

export default getImagePath;
