import { FormatDate } from "../../utils/Date.formatter";
import { TruncateTextNews } from "../../utils/TextFormatter";

export const NewsCard = ({ date, image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row hover:bg-white cursor-pointer bg-[#f7f3f3] rounded-lg shadow-sm mb-6 overflow-hidden hover:shadow-md transition-shadow py-3">
      <div className="flex-shrink-0 p-4 md:w-24 flex flex-col items-center justify-center border-r border-gray-100 ">
        <div className="text-red-600 font-bold text-2xl">
          <FormatDate dateString={date} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-grow">
        <div className="md:w-80 flex-shrink-0">
          <img
            src={`https://www.isouzbekistan.uz/api${image}`}
            alt={title}
            className="h-40 w-full object-cover rounded"
            loading="lazy"
          />
        </div>

        <div className="p-4 flex flex-col space-y-2">
          <h3 className="text-blue-600 font-medium text-lg">{title}</h3>
          <TruncateTextNews text={description} maxLength={200} />
        </div>
      </div>
    </div>
  );
};
