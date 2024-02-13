import { formatDate } from "../../utils/date-utils";

/* eslint-disable react/prop-types */
const SideBarNewsInfo = ({ item }) => {
  const { title, content, publishedAt } = item;
  const formattedDate = formatDate(publishedAt);
  return (
    <div className="col-span-12 md:col-span-8">
      {/* info */}
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{content}</p>
        <p className="mt-5 text-base text-[#94908C]">{formattedDate}</p>
      </div>
    </div>
  );
};

export default SideBarNewsInfo;
