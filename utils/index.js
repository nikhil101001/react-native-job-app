export const checkImageUrl = (url) => {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(jpg|jpeg|png|gif|bmp|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
