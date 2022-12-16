import { useState } from "react";

const Create = () => {
     const [title,setTitle] = useState("");
     const [body, setBody] = useState("");
    return (
      <div className="create">
        <h2>Add a new blog</h2>
        <form>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog Body:</label>
          <textarea
            required
            value={title}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label>Blog Author:</label>
          <select>
            <option value="Ezequiel">Ezequiel</option>
            <option value="Rosalee">Rosalee</option>
          </select>
          <button>Add Blog</button>
          <h2>Preview:</h2>
          <p>{title}</p>
          <p>{body}</p>
        </form>
      </div>
    );
}
 
export default Create;