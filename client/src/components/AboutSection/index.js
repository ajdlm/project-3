import React from "react";
import "./style.css";

const AboutSection = () => {
  return (
    <div className="aboutContainer pt-2 pl-3 pr-0 pb-3 mb-0">
      <div className="row mt-2">
        <div className="textColumn col-xl-7 col-lg-6">
          <h2 className="aboutHeading my-3">MEET SUYAO TIAN</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            blandit cursus risus at ultrices mi tempus imperdiet. Amet venenatis
            urna cursus eget nunc scelerisque viverra mauris in.
          </p>

          <p>
            Etiam sit amet nisl purus in mollis nunc sed. Turpis egestas sed
            tempus urna et. Habitasse platea dictumst vestibulum rhoncus est.
            Phasellus egestas tellus rutrum tellus pellentesque. Sit amet justo
            donec enim diam vulputate. Purus viverra accumsan in nisl nisi
            scelerisque eu ultrices. Netus et malesuada fames ac turpis egestas
            sed tempus.
          </p>

          <p>
            Nulla pharetra diam sit amet nisl suscipit. Tempor orci dapibus
            ultrices in iaculis nunc sed augue. Urna et pharetra pharetra massa
            massa ultricies mi quis. Arcu non sodales neque sodales ut etiam.
            Morbi enim nunc faucibus a pellentesque sit. Vitae congue mauris
            rhoncus aenean vel elit scelerisque mauris pellentesque. Integer
            quis auctor elit sed vulputate mi sit amet.
          </p>
        </div>

        <div className="col-xl-5 col-lg-6">
          <img className="aboutPortrait img-fluid my-1" src={require("assets/img/about-portrait.jpeg")} alt="about-portrait" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
