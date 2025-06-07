export const savePalette = (palette) => {
  localStorage.setItem('palette', JSON.stringify(palette));
};

export const loadPalette = () => {
  const data = localStorage.getItem('palette');
  return data ? JSON.parse(data) : [];
};