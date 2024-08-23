import axios from 'axios';
import React from 'react'
import Detail from './Detail';

async function page({params}:any) {
  const res = await axios.get('https://api.imgflip.com/get_memes');
  const meme = await res.data.data;
  const response = meme.memes.filter((e:any)=> e.id === params.id);

  return <Detail response={response}/>
}

export default page
