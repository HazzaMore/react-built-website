import "../../App.css"
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";


const Contact = () => {

  const { menuActive} = useContext(MenuContext);

  return (
    
    <ContactWrapper menuActive={menuActive}>
      <div className="background TransformRight"/>
      <section className="text TransformRight" data-aos="fade">
        <h1>
          Contact Me
          <br/>
          Sorry this page is under construction
        </h1>
      </section>

    </ContactWrapper>
  )
}

export default Contact;

  const ContactWrapper = styled.div<{ menuActive: boolean}>`

  .TransformRight {
    transform: translateX(${ props => props.menuActive ? `300px` : '0'});
    transition: 0.3s ease;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  .text {
    vertical-align: middle;
    z-index: 10;
    padding-top: 40vh;
    padding-left: 10%;
  }
`;