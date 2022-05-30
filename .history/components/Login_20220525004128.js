import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login({providers}) {
  return (
    <div className="">
      <Image
        src="/shareme_LogoFull.png"
        width={250}
        height={250}
        objectFit="contain"
        alt=""
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
