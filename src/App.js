import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';
import {format} from 'date-fns';


function App() {
  const[posts, setPosts] = useState([{
    id: 1,
    title: "Introduction to Full-Stack Development",
    datetime: "2024-01-15T09:00:00Z",
    body: "Full-stack development involves working on both the front-end and back-end parts of an application. This article covers the basics you need to get started."
  },
  {
    id: 2,
    title: "Understanding JavaScript Promises",
    datetime: "2024-02-20T14:30:00Z",
    body: "JavaScript promises are a powerful tool for handling asynchronous operations. This article explains how promises work and provides examples."
  },
  {
    id: 3,
    title: "Getting Started with React",
    datetime: "2024-03-10T11:00:00Z",
    body: "React is a popular JavaScript library for building user interfaces. Learn how to set up a React project and create your first component."
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    datetime: "2024-04-05T08:00:00Z",
    body: "Node.js allows you to build scalable network applications using JavaScript. This article shows you how to create a RESTful API with Node.js and Express."
  },
  {
    id: 5,
    title: "Deploying Applications on AWS",
    datetime: "2024-05-22T13:00:00Z",
    body: "AWS offers a variety of services for deploying and managing applications in the cloud. Learn the basics of deploying a web application on AWS."
  }])

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    Navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    Navigate('/');
  }

  return (
    <div className="App">
      <Header title="React Blog 5"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} setPosts={setPosts}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer/>
    </div>  
  );
}

export default App;
