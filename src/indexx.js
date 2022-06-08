export const getImagePath = (images) => {
    // uploads/2022-06-05T16:29:18.470Zadidas2.webp
    const removeUpStr = images.replace('uploads/', '');
    return `http://shoes.hungvu.net/${removeUpStr}`;
  }; 