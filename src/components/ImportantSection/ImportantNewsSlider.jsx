import {HiChevronRight,HiChevronLeft} from "react-icons/hi2"
import { Link } from "react-router-dom";
import {RxDotFilled, RxDot} from "react-icons/rx"

const ImportantNewSlider = ({setCurrentIndex, currentIndex, data, handleNextClick, handlePrevClick}) => {
    console.log(data)

    return (
    <a src="#" className="pr-10 w-8/12 cursor-pointer group">
        {data&&
            data.map((slide, index) => (
        <>
            <div className={index === currentIndex 
                ? `block w-[855px] h-[465px] mb-5 pr-10 bg-clip-content transition duration-40 ease-in-out opacity` : 
                `hidden w-[855px] h-[465px] mb-5 pr-10 bg-clip-content transition duration-40 ease-in-out opacity`}
            >   
            <Link to={`/card/${slide.id}`} target="_blank" rel="noopener noreferrer">
                <img
                    src={slide.image_url}
                    // src="https://avatars.dzeninfra.ru/get-zen_doc/5175112/pub_611a79aa3633e2616f1b1c39_611a7aa5c846e836cba77d37/scale_1200"
                    className="max-w-full w-full h-[465px] z-55" alt="image"
                />
            </Link>
                <button className="hidden group-hover:block absolute top-[55%] z-50 duration-500 -translate-x-80 right-[14%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <HiChevronRight
                            onClick={handleNextClick}
                        />
                </button>
                <button className="hidden group-hover:block absolute top-[55%] z-50 duration-500 -translate-x-0 left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <HiChevronLeft
                            onClick={handlePrevClick}
                        />
                </button>
                <div className="hidden group-hover:flex absolute top-[85%] z-50 left-[25%] justify-center py-2">
                    {data.map((slide, index) => (
                        <div 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="bg-transparent"
                        >
                            {currentIndex === index ? 
                             <RxDot 
                                size={40}
                                style={{color:"white"}}
                            />:
                             <RxDotFilled 
                                size={40}
                                style={{color:"white"}}
                             />}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* <div className="absolute w-[855px] h-[465px] top-0 pr-10 z-10">

            </div> */}
            <div 
                className="absolute w-[855px] h-full top-0 pr-10 z-60"
                style={{background: 'linear-gradient(180deg, rgba(73, 73, 73, 0) 34.38%, #050505 100%)'}}
            >
            </div>
            <Link to={`/card/${slide.id}`} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col bg-clip-content top-0 justify-start translate-y-64 pr-20 pb-1 pl-5 gap-5 w-[855px] absolute text-base-100 z-20">
                    <h3 className="flex justify-center items-center w-20 py-1 border-2 border-color-150 leading-none">
                    {slide.tag_article}
                {/* ВАЖНОЕ */}
                    </h3>
                    <p 
                    className={index === currentIndex 
                        ? "block text-4xl font-semibold mt-28" :
                        "hidden text-4xl font-semibold mt-28"}
                    >
                        {slide.title}
                    </p>
                </div>
            </Link>
        </>
))}
    </a>
    )
}

export default ImportantNewSlider


// 


// {data.length > 0 && ( 
//     <> 
//         <div className='w-[855px] h-[465px] mb-5 pr-10 bg-clip-content duration-700 relative'>   
//             <img
//                 src={data[currentIndex].image_url}
//                 // src="https://avatars.dzeninfra.ru/get-zen_doc/5175112/pub_611a79aa3633e2616f1b1c39_611a7aa5c846e836cba77d37/scale_1200"
//                 className="duration-500 max-w-full w-full h-[465px]" alt="image" 
//             />
//             <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//                 <HiChevronRight
//                     onClick={handleNextClick}
//                 />
//             </div>
//             <div className="hidden group-hover:block absolute top-[50%] -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//                 <HiChevronLeft
//                     onClick={handlePrevClick}
//                 />
//             </div>
//         </div>
//         <div className="absolute w-[855px] h-[465px] top-0 pr-10 z-10">
//         </div>
//         <div 
//             className="flex flex-col bg-clip-content top-0 justify-start translate-y-64 pr-20 pb-1 pl-5 gap-5 w-[855px] absolute text-base-100 z-20">
//             <h3 
//             className="flex justify-center items-center w-20 py-1 border-2 border-color-150 leading-none"
//             >
//             {data[currentIndex].tag_article}
//         {/* ВАЖНОЕ */}
//             </h3>
//             <p 
//             className="text-4xl font-semibold"
//             >
//             {data[currentIndex].title}
//             </p>
//         </div>
        
//     </>
// )}