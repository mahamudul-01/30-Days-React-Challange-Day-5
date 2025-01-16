import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {

  const [bookmarks,setBookmarks] = useState([])

  const [readingTime,setReadingTime] = useState(0)  

  const handleReadingTime = (time) => {
    const timeInt = parseInt(time)
    const newReadingTime = readingTime + timeInt
    setReadingTime(newReadingTime)
    
  }

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks,blog]  
    setBookmarks(newBookmarks)
  }


  

  return (
    <div>
      <Header></Header>
      <div className="md:flex justify-between px-10 gap-10">
        <div className="md:w-[65%]">
        <Blogs handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Blogs>
        </div >
        <div className="md:w-[30%]">
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
