import React from 'react'

function signIn({ providers }) {
    return (
      <>
        {" "}
        {providers &&
          !!Object.keys(providers).length &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {" "}
              <button onClick={() => SignIntoProvider(provider.id)}>
                {" "}
                Sign in with {provider.name}{" "}
              </button>{" "}
            </div>
          ))}{" "}
      </>
    );
  }

export default SignIn