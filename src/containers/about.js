import { Link, useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  console.log(history.location.state);
  return (
    <>
      {" "}
      <h1>About {history.location.state.name}</h1>
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
    </>
  );
}
export default About;
