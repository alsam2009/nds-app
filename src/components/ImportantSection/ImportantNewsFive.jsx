import React from "react"
import { Link } from "react-router-dom";

const ImportantNewsFive = ({data}) => {
        return (
            <div className="flex pr-10 w-[855px] justify-between gap-x-2">
                {data&&
                    data.map((piece_of_news) => (
                    <Link 
                        to={`/card/${piece_of_news.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col w-[198px] h-[240px] bg-base-200 shadow-md cursor-pointer"
                    >
                        <img
                            className=" h-[147px] mb-1.5 object-cover" 
                            src={piece_of_news.image_url} alt="image" />
                        <p 
                            className="text-sm px-1 pb-1 underline">
                            {piece_of_news.title}
                        </p>
                    </Link>
                ))}
            </div>
        )
}

export default ImportantNewsFive