import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main className='Home'>
        <h1>
            {posts.length ? (
              <Feed posts={posts} />
            ):(
              <p style={{marginTop: "2rem"}}>
                Sorry, No post to show.
              </p>
            )}
        </h1>
    </main>
  )
}

export default Home