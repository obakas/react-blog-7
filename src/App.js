import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/" element={<Missing />} />
        </Routes>
      </Router>
      <Footer/>
    </div>  
  );
}


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Nav/>
//       <Routes>
//         <Route path="/">
//           <Home/>
//         </Route>
//         <Route path="/post">
//           <NewPost/>
//         </Route>
//         <Route path="/post/:id">
//           <PostPage/>
//         </Route>
//         <Route path="/about" component={About}/>
//         <Route path="*" component={Missing}/>
//       </Routes>
//       <Footer/>
      
      
//     </div>
//   );
// }

export default App;
