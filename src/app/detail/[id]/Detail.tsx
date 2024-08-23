"use client";
import { useState } from "react";
import axios from 'axios';
import SpinnerButton from "../../components/spinnerButton";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { saveAs } from 'file-saver';
import Image from "next/image";

const Detail = (response:any) => {
    console.log(response)
    const [spinBtn, setSpinBtn] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [values, setvalues] = useState({
        text1: "",
        text2: "",
    })
    const [gen, setgen] = useState<any>(null);
    const submitData = async () => {
        const validationErrors: any = {};
        if (!values.text1.trim()) {
            validationErrors.text1 = "Please Enter text 1"
        }
        if (!values.text2.trim()) {
            validationErrors.text2 = "Please Enter text 2"
        }
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            setSpinBtn(true)
            const URL = axios.post(`https://api.imgflip.com/caption_image?template_id=${response.response[0].id}&username=hasnain321&password=hasnain123&text0=${values.text1}&text1=${values.text2}`);
            try {
                const response = await URL;
                const data = await response.data;
                setgen(data);
                setSpinBtn(false)
            } catch (error) {
                console.error(error);
            }
        }
    }
    const DownloadImg = () => {
        const confirm =  window.confirm('Are You Downloading This Image')
        { confirm == true ? saveAs(gen.data.url, `Meme-Savage${gen.data.url.slice(23)}`) : null }
    }

    return (
        <div className="max-w-[80%] mx-auto h-screen relative py-0 sm:py-20">
            {!gen ? (
                <>
                <Link href={'/'} className='px-3 py-2 rounded-[30px] bg-[green] text-white absolute left-10 top-10'>Back</Link>
                <div className="w-[90%] sm:w-[40%] mx-auto flex flex-col justify-center items-center gap-3">
                <img className="w-[600px] h-[600px] shadow-2xl " src={response.response[0].url} alt="Meme" />
                <div className="w-[80%]">
                <input className={`p-3 bg-[#e5e5e5] rounded-[5px] w-full border-[1px] ${errors.text1 ? 'border-[red]' : 'border-[green]'}`} placeholder="Write Text 1" onChange={(e: any) => setvalues({ ...values, text1: e.target.value })} value={values.text1} />
                {errors.text1 && <span className='text-[14px] text-[red]'>{errors.text1}</span>}
                </div>
                <div className="w-[80%]">
                <input className={`p-3 bg-[#e5e5e5] rounded-[5px] w-full border-[1px] ${errors.text2 ? 'border-[red]' : 'border-[green]'}`} placeholder="Write Text 2" onChange={(e: any) => setvalues({ ...values, text2: e.target.value })} value={values.text2}/>
                {errors.text2 && <span className='text-[14px] text-[red]'>{errors.text2}</span>}
                </div>
                { values.text1.length > 0 || values.text2.length > 0 ?  
                    <SpinnerButton Loading={spinBtn} onClick={submitData} className='bg-[green] px-4 py-3 rounded-[30px] text-white flex items-center w-[200px] justify-center' title="Generate Meme"/>
                    :
                    <SpinnerButton Loading={spinBtn} onClick={submitData} className='bg-[#b2b2b2] px-4 py-3 rounded-[30px] text-white flex items-center w-[200px] justify-center' disabled title="Generate Meme"/>
                }
                </div>
                </>
            ):(
                <div className="w-full mx-auto flex flex-col justify-center items-center relative h-full">
                    <img className="w-[600px] h-[600px]" src={gen.data.url} alt="Meme"/>
                    <a onClick={DownloadImg} className="absolute bottom-0 bg-[green] hover:bg-[#40a5e4] text-white text-[26px] duration-150 p-3 rounded-[30px] cursor-pointer"><MdDownload /></a>
                </div>
            )}
        </div>
    );
}
export default Detail