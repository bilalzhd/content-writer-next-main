'use client';
import { useRouter } from 'next/router'
import React from 'react'
import useSWR  from 'swr';

function Success() {
    const {query: {session_id}} = useRouter(); 

  return (
    <div>Successfully paid </div>
  )
}

export default Success