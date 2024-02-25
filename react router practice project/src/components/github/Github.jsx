import axios from "axios"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";


function Github() {
    // const [data, setData] = useState({});
    const data = useLoaderData();

    return (
        <div className=" w-2/3 bg-gray-900 flex items-center flex-col mt-20 text-white m-auto rounded-md">
            <div className=" size-48 mt-5 aspect-square rounded-full flex items-center ring-2 overflow-hidden ring-blue-600 justify-center">
                <img className=" object-contain" src={data.avatar_url} alt="" />
            </div>
            <div className=" text-center">
                <h2 className=" mt-1 mb-5 text-xl" >{data.name}</h2>
                <p id="bio">
                    {data.bio}
                </p>
            </div>
            <div className="flex gap-5 mt-5 mb-5">
                <p
                    className=" border border-spacing-1 px-4 py-2 rounded-sm border-white hover:bg-white hover:text-black transition-all duration-200 ease-linear "
                >Followers: <b>{data.followers}</b></p>
                <p
                    className=" border border-spacing-1 px-4 py-2 rounded-sm border-white hover:bg-white hover:text-black transition-all duration-200 ease-linear "
                >Following: <b>{data.following}</b></p>
            </div>
        </div>
    )
}


export default Github;