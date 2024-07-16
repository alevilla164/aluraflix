import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <h2>Opps no encontramos lo que busca!</h2>
      <p>
        <Link to="/">Regresar</Link>
      </p>
    </div>
  );
}
