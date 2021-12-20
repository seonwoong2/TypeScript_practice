const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const theme = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};


export default theme;