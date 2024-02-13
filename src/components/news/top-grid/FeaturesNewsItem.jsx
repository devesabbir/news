/* eslint-disable react/prop-types */
import NewsInfo from "./NewsInfo";
import Newsthumb from "./Newsthumb";

export default function FeaturesNewsItem({ item }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      {/* info */}
      <NewsInfo info={item} />
      {/* thumb */}
      <Newsthumb item={item} />
    </div>
  );
}
