import { signIn } from "next-auth/react";
import Image from "next/image";


function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="/shareme_LogoFull.png"
        width={150}
        height={150}
        objectFit="contain"
        alt=""
      />

      <div>
        
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Login;
