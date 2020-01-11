import React from "react";
import "./about.css";

export default function About() {
    return (
        <div className="about">
            <main>
                <article>
                    <div className="about-content">
                        <h1>Plants for your adventurous soul.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec quis elementum ex. Vivamus id eleifend
                            enim. Donec a libero blandit purus dignissim
                            volutpat. Pellentesque commodo arcu in velit
                            fermentum placerat. Nam feugiat arcu quis porttitor
                            mollis. Morbi sagittis est et neque lobortis
                            vestibulum vel et neque. Nunc posuere massa mauris,
                            id varius lectus porta sed.
                        </p>
                        <p>
                            Ut quis tellus consectetur orci dictum mattis ac in
                            lectus. Proin fermentum velit non nulla lacinia,
                            quis efficitur lacus feugiat. Phasellus tristique,
                            odio mollis ullamcorper sodales, metus odio finibus
                            leo, sed gravida lectus sapien ut nisl.
                        </p>
                    </div>
                    <img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </article>
                <article className="reverse">
                    <div className="about-content">
                        <h1>Build your own extreme eco-space.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam iaculis dolor non ante posuere, vitae
                            ultricies quam commodo. Mauris sit amet sapien sed
                            odio tristique accumsan. Mauris viverra dui eget
                            justo laoreet, gravida ultrices magna condimentum.
                            Suspendisse condimentum ligula id nisl venenatis, at
                            varius enim blandit. Nulla feugiat lobortis orci nec
                            laoreet. Donec mollis velit ac pellentesque dictum.
                            In hac habitasse platea dictumst.
                        </p>
                    </div>
                    <img src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </article>
                <article>
                    <div className="about-content">
                        <h1>Plants from around the globe.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut consectetur quam id mi viverra ullamcorper
                            ac ac neque. Integer ut pellentesque mi. Vivamus
                            lobortis, mi vel scelerisque gravida, dolor sem
                            ultrices nulla, eget aliquet arcu diam eu lacus.
                            Nulla rhoncus leo id leo vulputate commodo. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla libero ipsum, vehicula id eros nec, mollis
                            dictum neque. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>
                    <img src="https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </article>
            </main>
        </div>
    );
}
