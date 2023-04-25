import React from 'react'
import img from "../assets/Img/c4310000-0aff-0242-2935-08d9f6d3adbd_cx0_cy12_cw0_w1200_r1.png";
import img2 from "../assets/Img/commodore-funcionando.jpg"
import img3 from "../assets/Img/download.png";
import img4 from "../assets/Img/download (1).png";
import img5 from "../assets/Img/html-5--v1.png";
import img6 from "../assets/Img/CSS3_logo_and_wordmark.svg.png";
import img7 from "../assets/Img/images (1).jpeg";
import Pay from '../Pay/Pay';
import { Link } from 'react-router-dom';


function Library() {
    return (
        <section id='Library' className='library'>
            <br />
            <h2 className='Library-wl'>Library</h2>
            <div className="product-list">
                <div className="product">
                    <img src={img} alt="Product Image" />
                    <h2>Crypto Money</h2>
                    <p>Book In Spanish</p>
                    <p>$15 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
                <div className="product">
                    <img src={img2} alt="Product Image" />
                    <h2>Computers Day 0</h2>
                    <p>Book In English</p>
                    <p>$10 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
                <div className="product">
                    <img src={img3} alt="Product Image" />
                    <h2>Programming Concepts</h2>
                    <p>Book In English</p>
                    <p>$12 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
                <div className="product">
                    <img src={img4} alt="Product Image" />
                    <h2>Javascript</h2>
                    <p>Book In English</p>
                    <p>$12 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
                <div className="product">
                    <img src={img5} alt="Product Image" />
                    <h2>HTML</h2>
                    <p>Book In English</p>
                    <p>$7 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
                <div className="product">
                    <img src={img6} alt="Product Image" />
                    <h2>CSS</h2>
                    <p>Book In English</p>
                    <p>$7 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
                <div className="product">
                    <img src={img7} alt="Product Image" />
                    <h2>Phones Evo.</h2>
                    <p>Book In English</p>
                    <p>$10 USD</p>
                    <form action=''>
                        <button id="payA" type="submit">Buy</button>
                    </form>
                </div>
            </div>
            <br />
        </section>
    )
}

export default Library;