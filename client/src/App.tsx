import { PostCreate } from './PostCreate'
import { PostList } from './PostList'

function App() {
  return (
    <div className='container mx-auto px-4 my-2.5'>
      <h1>Create Post</h1>
      <PostCreate/>
      <h1>Posts</h1>
      <PostList/>
    </div>
  )
}

export default App
