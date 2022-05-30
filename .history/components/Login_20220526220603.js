import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="/shareme_LogoFull.png"
        width={350}
        height={150}
        objectFit="contain"
        alt=""
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <button
              className="relative px-6 py-3 font-bold text-white rounded-lg group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen">
                Đăng nhập bằng {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
