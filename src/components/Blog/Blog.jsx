import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleBookmark,handleReadingTime}) => {
    const {title,author_img, cover,reading_time, hashtags, author_name} = blog;
    return (
        <div>
            <img className='rounded-md mb-5 w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-between '>
                    <img className='w-16 rounded-full mr-4' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author_name}</h3>
                        <p>###</p>
                    </div>
                </div>
                <div className='flex justify-between gap-6 items-center'>
                    <p>{reading_time} time read</p>
                    <button onClick={() => handleBookmark(blog)}
                    className='font-bold hover:scale-110 transform transition duration-300 ease-in-out hover:text-blue-600 text-xl'>
                    <  CiBookmark />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl my-6 font-bold'>{title}</h2>
            {
                hashtags.map((hashtag,idx) => <span key={idx} className='text-gray-500 bg-blue-100 px-2 py-1 rounded-full mr-2 my-4'>#{hashtag}</span>)
            }
            <button onClick={()=>handleReadingTime(reading_time)} className='text-sm text-blue-700 underline mb-10 mt-4'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}

export default Blog;