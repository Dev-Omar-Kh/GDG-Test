import React from 'react';

import mainImg from '../../assets/Images/Illustration.png';
import compaine1 from '../../assets/Images/Atlassian Icon.svg';
import compaine2 from '../../assets/Images/Behance Icon.svg';
import compaine3 from '../../assets/Images/Bing Icon.svg';
import compaine4 from '../../assets/Images/Bitbucket Icon.svg';
import compaine5 from '../../assets/Images/Dropbox Icon.svg';
import compaine6 from '../../assets/Images/Twitch Icon.svg';
import compaine7 from '../../assets/Images/Twitter Icon.svg';

import homeCSS from './home.module.css';
import { Link } from 'react-router-dom';

export default function Main() {

    const compaines = [

        {name: 'compaine1' , img: compaine1},
        {name: 'compaine2' , img: compaine2},
        {name: 'compaine3' , img: compaine3},
        {name: 'compaine4' , img: compaine4},
        {name: 'compaine5' , img: compaine5},
        {name: 'compaine6' , img: compaine6},
        {name: 'compaine7' , img: compaine7},

    ];

    const stopForm = (e) => {

        e.preventDefault();

    }

    return <React.Fragment>

        <div className={`padding_inline ${homeCSS.container}`}>

            <div className={homeCSS.content_side}>

                <div className={homeCSS.slogan}>
                    <p>We are now allowing early-access for user.</p>
                    <Link>LearnMore</Link>
                </div>

                <h3>Build A highly engaged community with now effort</h3>

                <p className={homeCSS.explain}>
                    Lorem ipsum dolor, 
                    sit amet consectetur adipisicing elit. 
                    Aliquam ut delectus facilis voluptatibus modi vel quos consequuntur voluptates incidunt officia.
                    Aliquam ut delectus facilis voluptatibus modi vel quos consequuntur voluptates incidunt officia.
                </p>

                <form onSubmit={stopForm} className={homeCSS.form}>

                    <input type="text" placeholder='Enter Your Email Address' />
                    <button type="submit">Join Waitlist</button>

                </form>

                <div className={homeCSS.compaines}>

                    <p>Used by this compaines :</p>

                    <div className={homeCSS.imgs}>
                        {compaines.map((comp , idx) => <img key={idx} src={comp.img} alt={comp.name} />)}
                    </div>

                </div>

            </div>

            <div className={homeCSS.img_side}>
                <img src={mainImg} alt="main image" />
            </div>

        </div>

    </React.Fragment>

}