import { Link, useParams } from "react-router-dom";

function Services() {
  const perams = useParams();
  console.log(perams.id);
  return (
    <>
      {" "}
      <h1>Services/{perams.id}</h1>
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
export default Services;
