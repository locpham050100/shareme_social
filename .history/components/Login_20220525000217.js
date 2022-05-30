import React from 'react'
import Image from 'next/image';
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="">
        <Image
        src="/shareme_LogoFull.png"
        width={150}
        height={150}
        objectFit="contain"
        alt=""
      />
    </div>
  )
}

export default Login