/* eslint-disable react/prop-types */
export default function Newsthumb({ item }) {
  const { urlToImage, author } = item;

  return (
    <div className="col-span-12 lg:col-span-8">
      {urlToImage ? (
        <img className="w-full" src={urlToImage} alt="thumb" />
      ) : (
        <img className="w-full" src="./assets/no-image.jpg" alt="thumb" />
      )}
      {author && urlToImage && (
        <p className="mt-5 text-base text-[#5C5955]">Illustration: {author}</p>
      )}
    </div>
  );
}
