import { Link } from "react-router-dom"

export default function Error404() {
  return (
    <div>
      <h1> ERROR 404 </h1> <hr />
      <h2>not found</h2> <hr />
      <Link to="/"> comeback to home </Link>
    </div>
  )
}
