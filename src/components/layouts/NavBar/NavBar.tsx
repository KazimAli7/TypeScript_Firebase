/* eslint-disable no-use-before-define */
import React from 'react';

// PACKAGES
import { Link } from 'react-router-dom';

import SignedInLink from '../SignedInLink';
import SignedOutLink from '../SignedOutLink';

function NavBar() {
  return (
    <nav className="bg-white-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="color:red">
            Type_Fire
          </Link>
          <SignedInLink />
          <SignedOutLink />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
