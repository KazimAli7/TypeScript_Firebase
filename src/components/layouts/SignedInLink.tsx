import { NavLink } from 'react-router-dom';

function SignedInLink() {
  return (
    <ul>
      <li>
        <NavLink className="btn btn-blue" to="/">
          Sign Out
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLink;
