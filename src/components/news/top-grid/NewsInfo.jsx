import { formatDate } from "../../../utils/date-utils";

/* eslint-disable react/prop-types */
export default function NewsInfo({ info }) {
  const { title, description, publishedAt } = info;

  const formattedDate = formatDate(publishedAt);

  return (
    <div className="col-span-12 lg:col-span-4">
      <a href="#">
        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
      </a>
      <p className="text-base text-[#5C5955]">{description}</p>
      <p className="mt-5 text-base text-[#5C5955]">{formattedDate}</p>
    </div>
  );
}
