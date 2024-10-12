import { useState } from "react";

const Home = () => {
  const [username,Setusername] = useState('')
  console.log(username)
  return (
    <div className="home">
      <label>
        Text input: <input name="myInput" onChange={e=>Setusername(e.target.value)} />
      </label>
    </div>
  );
};

export default Home;
