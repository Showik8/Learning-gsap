import React from "react";
import { navLinks } from "../constants/index.js";
import gsap from "gsap";

const Navbar = () => {
    const navTween = gsap.timeline({
        scrollTrigger:{
            trigger: 'nav',
            start: "bottom top",
        }
    })

    navTween.fromTo("nav",{backgroundColor:"transparent"},{
         backgroundColor:"00000050",
         backgroundFilter:"blur(10px)",
         duration:1,
         ease:"power1.inOut",

    })
  return (
    <nav id="nav">
      <div>
        <a href="#hero" className="flex items-center gap-2">
            <img width="52px"  height="52px  logo" src="/images/logo.jpg" alt="logo"/>
          <p>Relax</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
