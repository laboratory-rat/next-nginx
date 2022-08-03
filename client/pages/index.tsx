import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import main from '../public/main.jpeg';

type HomeProps = { val: string }
const Home: NextPage<HomeProps> = ({ val }) => {
  return (
    <div>
      <h2>This is client app</h2>
      <br />
      <h3>{val}</h3>
      <br />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ width: 400, height: 700, position: 'relative' }}>
          <Image src={main} layout='fill' />
        </div>
      </div>
      <ul>
        <li>
          <a href="/account">Navigate to account page</a>
        </li>
        <li>
          <a href="/moderation/">Navigate to moderation</a>
        </li>
      </ul>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  await new Promise(r => setTimeout(r, 1000));
  return {
    val: 'This is server side text',
  }
}

export default Home
