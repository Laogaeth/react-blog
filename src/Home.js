import React from 'react'
import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () =>{
//data: xyz means we are giving it a name
  const {data: blogs,isLoading,error} = useFetch("http://localhost:8000/blogs");

  return (
    
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {/* renders the blogs list once we have data, not rendering otherwise*/}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      
    </div>
  );

}
export default Home;