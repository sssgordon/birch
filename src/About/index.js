import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <main>
        <article>
          <div className="about-content">
            <h1>Plants for your adventurous soul.</h1>
            <p>Birch helps you discover the best plants for your space.</p>
          </div>
          <img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </article>
        <article className="reverse">
          <div className="about-content">
            <h1>Build your own extreme eco-space.</h1>
            <p>
              For rich people homes who can afford a private garden because
              oxygen...
            </p>
          </div>
          <img src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </article>
        <article>
          <div className="about-content">
            <h1>Plants from around the globe.</h1>
            <p>
              A selection of exotic plants from exotic places so rich people
              will choke on this volume of hipster plants because they have
              nothing better to do hahahahahahahahahaha...
            </p>
          </div>
          <img src="https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </article>
      </main>
    </div>
  );
}
