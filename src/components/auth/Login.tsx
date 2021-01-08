import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SetEmail, SetPassword, LoginUser } from '../store/actions/Actions';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const email = useSelector((state: any) => state.auth.email);
  const password = useSelector((state: any) => state.auth.password);
  const history = useHistory();
  const loggedIn = useSelector((state: any) => state.auth.loggedIn);
  const autherror = useSelector((state: any) => state.auth.autherror);

  useEffect(() => {
    if (loggedIn) {
      history.push('/main');
    }
  }, [loggedIn]);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const crediential = {
      email,
      password,
    };
    dispatch(LoginUser(crediential));
  };

  // const counter = useSelector((state) => state);
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >

          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="mt-10" method="POST">
            <label className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="e-mail address"
              onChange={(e) => dispatch(SetEmail(e.target.value))}
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => dispatch(SetPassword(e.target.value))}
              placeholder="password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Login
            </button>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              {autherror && autherror ? autherror : null}
            </div>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="forgot-password" className="flex-2 underline">
                Forgot password?
              </a>

              <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
              </p>

              <a href="register" onClick={() => history.push('/register')} className=" btn p-0 underline">
                Create an Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
