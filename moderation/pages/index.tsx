import React from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import main from '../public/main.jpg';

type HomeProps = { val: string }
const Home: NextPage<HomeProps> = ({ val }) => {
  return (
   <div>
      <h2>This is moderation app</h2>
      <br />
      <h3>{val}</h3>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ width: 700, height: 300, position: 'relative' }}>
          <Image src={main} layout='fill' />
        </div>
      </div>
      <ul>
        <li>
          <a href="/">Navigate to client</a>
        </li>
        <li>
          <a href="/moderation/test">Navigate to moderation test page</a>
        </li>
      </ul>
   </div>
  )
}

Home.getInitialProps = async (ctx) => {
  await new Promise(r => setTimeout(r, 1000));
  return {
    val: 'This is server side text, but from moderation app XD',
  }
}

export default Home
