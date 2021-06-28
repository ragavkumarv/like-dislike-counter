import { useState } from "react";
import "./styles.css";

// jsx - js extended
// App component
export default function App() {
  const [likes, setLikes] = useState(0); // React hook
  const [dislikes, setDislikes] = useState(0);
  // const likeStyles =  {fontSize: "25px", fontWeight:'bold', color:'green'};
  // const dislikeStyles = {fontSize: "25px", fontWeight:'bold', color:'crimson'};
  // state - data - likes
  return (
    <div className="App" style={{ backgroundColor: "green" }}>
      <h4>Show your support</h4>

      <button
        style={{ fontSize: "25px", fontWeight: "bold", color: "green" }}
        onClick={() => setLikes(likes + 1)}
      >
        👍 {likes}
      </button>

      <button
        style={{ fontSize: "25px", fontWeight: "bold", color: "crimson" }}
        onClick={() => setDislikes(dislikes + 1)}
      >
        👎 {dislikes}
      </button>
    </div>
  );
}

// Task
// BackgroundColor app should be green if same or more number of likes are present,
// If more dislikes then backgroundColor of app is red

// React - (document. dont use)
// document.querySelector()
// jsx - will be converted in to JS by React
// className - class in keyword
