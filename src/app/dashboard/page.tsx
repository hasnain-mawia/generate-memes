import axios from 'axios'
import Link from 'next/link';

async function page() {
   const res = await axios.get('https://api.imgflip.com/get_memes');
    const products:any = await res.data.data.memes;
    console.log(products);
  
  return (
    <div className='max-w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-5'>
       {products && products.map((item:any)=>{
        return(
        <Link key={item.id} href={`/detail/${item.id}`}>
        <div className='w-full bg-[#ececec] flex flex-col justify-center items-center cursor-pointer'>
        <img className='w-[300px] h-[250px]' src={item.url} alt=""/>
        <div className='p-3'>
        <h3 className='font-bold'>{item.name}</h3>
        </div>
        </div> 
        </Link>)
        })
    } 
    </div>
  )
}

export default page
