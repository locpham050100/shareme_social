import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className=" flex flex-col items-center space-y-20 pt-48">
      <div className=" relative w-full h-full">
        <video
          src="/sharemeVideo.mp4"
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <Image
            src="/sharemeLogoFull.png"
            width={350}
            height={100}
            objectFit="contain"
            alt=""
            className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-light-gray"
          />

          <div>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                {/* https://devdojo.com/tailwindcss/buttons#_ */}
                <button
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#e600e6] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Đăng nhập bằng {provider.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
