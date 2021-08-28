import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  function sendData() {
    localStorage.setItem("title", "myData");
  }
  function sendObj() {
    let obj = {
      name: "asd",
    };
    localStorage.setItem("obj", JSON.stringify(obj));
  }
  function getData() {
    let a = localStorage.getItem("title");
    console.log(a);
  }
  function getObj() {
    let a = localStorage.getItem("obj");
    console.log(JSON.parse(a));
  }
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Serviced</Link>
        </li>
      </ul>
      <button onClick={sendData}>Send</button>
      <button onClick={getData}>Get</button>
      <button onClick={sendObj}>Send Object</button>
      <button onClick={getObj}>get Object</button>
    </div>
  );
}
export default Home;
