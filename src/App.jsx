import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  

  return (
    <div>
      <Header></Header>
      <div className="md:flex justify-between px-10 items-center">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
