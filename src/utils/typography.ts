import Typography from 'typography';

const typography = new Typography({
  headerFontFamily: [`Raleway`, `sans-serif`],
  bodyFontFamily: [`open-sans`, `serif`],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
