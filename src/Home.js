import {useState,useEffect} from "react";
import React from 'react'
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs, setBlogs] = useState([
      {
        title: "My new blog",
        body: "lorem ipsum dolor sit amet",
        author: "Lavonne",
        id: "1",
      },
      {
        title: "New house plant!",
        body: "lorem ipsum dolor sit amet",
        author: "Mikel",
        id: "2",
      },
      {
        title: "Plant aftercare?",
        body: "lorem ipsum dolor sit amet",
        author: "Annamae",
        id: "3",
      }
    ]);
    const [name, setName] = useState("MAURICE");

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs (newBlogs);

    }
    useEffect(()=> {
        console.log("use effect just ran bruh")
        
    },[])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <p>{name}</p>
    </div>
  );

}
export default Home;