import React, { useEffect } from 'react'
import './main.scss'

import img from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location: "New zealand",
    grade: 'Cultural RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Machu Picchu',
    location: "peru",
    grade: 'Cultural relax',
    fees:'$600',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'greate Barrier Reef',
    location: "Australia",
    grade: 'Cultural relax',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Cappadocia',
    location: "Turkey",
    grade: 'Cultural relax',
    fees:'$800',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Guanajuato',
    location: "Mexico",
    grade: 'Cultural relax',
    fees:'$1100',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Cinque Terre',
    location: "Italy",
    grade: 'Cultural relax',
    fees:'$800',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Angkor wat',
    location: "Cambodia",
    grade: 'Cultural relax',
    fees:'$750',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'Bali Island',
    location: "Indonesia",
    grade: 'Cultural relax',
    fees:'$800',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'Taj Mahal',
    location: "india",
    grade: 'Cultural relax',
    fees:'$800',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations on the place is known for its luxrtious stays and adventurous activities'
  },
]

const Main = () => {

  //lets create a react hooks to add a scroll animation
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return (
              <div data-aos="fade-up" key={id} className='singleDestination'>
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className='cardInfo'>
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className='continent flex'><HiOutlineLocationMarker className='icon'/>
                    <span className="name">
                      {location}
                    </span>
                  </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className='flex btn'>
                      DETAILS <HiOutlineClipboardCheck className="icon" />

                    </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main