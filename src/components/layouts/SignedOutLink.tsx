import { NavLink } from 'react-router-dom';

function SignedOutLink() {
  return (
    <ul>
      <li>
        <NavLink className="btn btn-blue" to="/">
          Sign In
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLink;
