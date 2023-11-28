import React from 'react'
import bgImg from "../../img/bg-img.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <div className="buttons">
                    <img src="" alt="" />
                    <Link to='/login' className="try">Try it !</Link>
                </div>
                <div className="our-specialities">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam.
                    </p>
                </div>
                <div className="our-slogan">
                    {/* Put this image as background image of our-slogan div and over that the slogan should be visible . If want you can decrease the opaacity of the image. */}
                    {/* <img src={bgImg} alt="" /> */}
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni minima necessitatibus inventore alias unde. Maiores.
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Home