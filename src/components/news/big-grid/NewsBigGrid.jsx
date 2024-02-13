/* eslint-disable react/prop-types */

import { formatDate } from "../../../utils/date-utils";

export default function NewsBigGrid({ item }) {
  const { title, description, urlToImage, publishedAt } = item;
  const formattedDate = formatDate(publishedAt);
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      {/* info */}
      <div className="col-span-12 md:col-span-6">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{description}</p>
        <p className="mt-5 text-base text-[#5C5955]">{formattedDate}</p>
      </div>
      {/* thumb */}
      <div className="col-span-12 md:col-span-6">
        {urlToImage ? (
          <img className="w-full" src={urlToImage} alt="thumb" />
        ) : (
          <img className="w-full" src="./assets/no-image.jpg" alt="thumb" />
        )}
      </div>
    </div>
  );
}
