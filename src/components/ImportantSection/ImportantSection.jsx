import React, {useState,useEffect, useRef} from 'react'
import { fetcher}  from "../tools/fetcher";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ImportantNewSlider from './ImportantNewsSlider';
import ImportantNewsFive from './ImportantNewsFive';


const ImportantSection = () => {
  const [importantNewsSlider, setImportantNewsSlider] = useState([])
  const [importantNewsFive, setImportantNewsFive] = useState([])
  const slideRef = useRef()
  
  useEffect(() => {
    const getData = async () => {
        axios
        .get('http://localhost:3000/data?tag_article=Важное', {
          params: {
            _page: 1,
            _limit: 10
          }
        })
      .then(res => {
        setImportantNewsSlider(res.data.splice(0,5))
        setImportantNewsFive(res.data)
              // console.log(res.headers['x-total-count'])
      })
    }
    getData()
  },[])

  // useEffect(() => {
  //   const getData = async () => {
  //     await axios('http://localhost:3000/data?_page=1&_limit=1')
  //     .then((res) => res.headers["x-total-count"]);
  //     setImportantNews(getData)
  //   }
  //   getData()
  // },[])

  const [currentIndex, setCurrentIndex] = useState(0)

  
  
  const handlePrevClick = () => {
    setCurrentIndex(currentIndex < 1 ? importantNewsSlider.length - 1 : currentIndex - 1)
    slideRef.current.classList.add("fade-anim")
  }
  const handleNextClick = () => {
    setCurrentIndex(currentIndex === importantNewsSlider.length - 1 ? 0 : currentIndex + 1)
    slideRef.current.classList.add("fade-anim")
  }

  // console.log(importantNewsSlider)
  // console.log(importantNewsFive)
  let slideInterval
  useEffect(() => {
    let pauseSlider = () => {
      clearInterval(slideInterval)
    }
    slideInterval = setInterval(() => {
      // setCurrentIndex(currentIndex === importantNewsSlider.length - 1 ? 0
      // : currentIndex + 1)
      // slideRef.current.classList.add("fade-anim")
      handleNextClick()
    }, 5000)
    slideRef.current.addEventListener("mouseenter", pauseSlider)
    slideRef.current.addEventListener("mouseleave", handleNextClick)
    return () => clearInterval(slideInterval)
  },[currentIndex])
  
  return (
    <section className="flex px-8 mb-8 main_block">
      <div className="flex flex-col pr-10 w-8/12 important_news" ref={slideRef}>
          <ImportantNewSlider 
            data={importantNewsSlider}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <ImportantNewsFive 
            data={importantNewsFive}
          />
      </div>
      <div class="w-4/12 popular_news">
            <div
              className="flex justify-center items-center min-h-[192px] bg-base-500 text-white text-3xl mb-4"
            >
              РЕКЛАМА
            </div>

            <div className="">
              <img src="./img/hot_news.png" class="min-w-full" alt="hot_news" />
            </div>
      </div>
    </section>
  )
}

export default ImportantSection