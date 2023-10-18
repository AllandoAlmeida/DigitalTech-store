"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Home() {
  const {data} = useSession();
  return (
    <div className='p-7'>{data?.user?.name}</div>
  )
}
