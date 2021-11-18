import { Link } from "react-router-dom";
function Navigator() {
  return (
    <div class="navContaner">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigator;
