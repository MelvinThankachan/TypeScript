const ImageHeader = () => {
  return (
    <div className="flex items-center mb-8">
      <img
        className="w-28 h-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="image-logo"
      />{" "}
      <span className="mx-4 text-3xl">+</span>
      <img
        className="w-28 h-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        alt="image-logo"
      />
    </div>
  );
};

export default ImageHeader;
