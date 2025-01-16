import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="w-full">
      <div className="border-2 border-blue-600 px-4 py-2 bg-blue-100 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-600">
          Spent Time On Read {readingTime} Minutes
        </h3>
      </div>
      <div className="p-8 bg-gray-200 mt-6 rounded-lg ">
        <h1 className="mb-10 text-4xl">Bookmarks:{bookmarks.length} </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime:PropTypes.number.isRequired
};

export default Bookmarks;
