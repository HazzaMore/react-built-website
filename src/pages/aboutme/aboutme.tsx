import "../../App.css";
import styled from "styled-components";
import { useContext } from "react";
import { MenuContext } from "../../App";
import { AppCodeExperience } from "../../components/common/app-code-experience";
import JobContainer from "./job-container";
import {
  jlr_video,
  photo_editing_video,
} from "../../components/videos/videoslist";
import {
  Kubrick_description,
  Twofrontteeth_description,
  Unique_Team_Building_description,
} from "./company_description";
import {
  profile_image,
  unique_tb_banner,
} from "../../components/images/mainimages";
import ToTopBtn from "../../components/common/to-top-btn";

const AboutMe = () => {
  const { menuactive } = useContext(MenuContext);

  return (
    <AboutmeWrapper menuactive={menuactive}>
      <div className="background TransformRight" />
      <div className="button_placement TransformRight">
        <ToTopBtn />
      </div>
      <div className="aboutme TransformRight">
        <section
          className="name_profession"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <h2>Harry Moore</h2>
          <h1>
            Cloud Engineer <br /> based in London.
          </h1>
        </section>
        <section className="aboutmerow">
          <img className="aboutme-left" src={profile_image} />
          <div className="aboutme-right">
            <h3>About Me</h3>
            <p>
              A highly driven and enthusiastic individual with a zeal for
              automation, design and innovation in the Engineering and Software
              Industries. Taking great pride in my strong motivation to develop
              as an all-rounded individual as well as my excellent interpersonal
              and communication skills. This extends to outside the software and
              engineering industry, having worked with a number of Youtubers and
              Streamers on various projects.
              <br /> <br /> My coding and software experience includes (hover
              for name):
            </p>
            <AppCodeExperience />
          </div>
        </section>
        <section>
          <JobContainer
            year="2022-2024"
            company="Kubrick Group, London"
            role="Cloud Engineering Consultant"
            media={{ src: jlr_video }}
            content={<Kubrick_description />}
          />
          <JobContainer
            year="2020-2021"
            company="Unique Team Building, Australia"
            role="Project Design Engineer"
            media={{ src: unique_tb_banner }}
            content={<Unique_Team_Building_description />}
          />
          <JobContainer
            year="2014-2019"
            company="Two Front Teeth Photography, Cheltenham"
            role="Photo Editor & Framer"
            media={{ src: photo_editing_video }}
            content={<Twofrontteeth_description />}
          />
        </section>
        <div></div>
      </div>
    </AboutmeWrapper>
  );
};

export default AboutMe;

const AboutmeWrapper = styled.div<{ menuactive: boolean }>`
  .TransformRight {
    transform: translateX(${(props) => (props.menuactive ? `300px` : "0")});
    transition: 0.3s ease;
  }

  .button_placement {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }

  .aboutme {
    padding: 50px;
    overflow-x: hidden;
  }

  .aboutme,
  .name_profession {
    margin-top: 200px;
  }

  .aboutmerow {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 6rem;
    grid-auto-rows: minmax(50px, auto);
    margin-top: 15%;
    align-items: center;
  }

  .aboutme-left {
    border-radius: 50%;
    width: 400px;
  }

  .aboutme-right text {
    text-align: justify;
  }

  .aboutme-right::after {
    content: "";
    display: inline-block;
    width: 100%;
  }

  .apps_row img {
    width: 40px;
    height: 40px;
    align-items: center;
  }

  h1 {
    font-size: 5em;
    font-weight: 800;
    color: #fff;
    line-height: 1.3em;
    text-transform: none;
    transition: var(--default-transition);
  }
  h2 {
    font-size: 2em;
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    text-transform: none;
    transition: var(--default-transition);
  }
  h3 {
    font-size: 4em;
    color: #fff;
  }
  p {
    font-size: 1.4em;
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    transition: var(--default-transition);
  }
  p2 {
    color: black;
  }

  @media screen and (max-width: 1300px) {
    .aboutmerow {
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(0px, auto);
      margin-top: 80%;
    }

    .aboutme-left,
    .aboutme-right {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 1.8em;
    }
    h3 {
      font-size: 3.5em;
    }
    p {
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 900px) {

  .aboutme {
    margin-top: 0px;
  }

    .aboutme-left {
      width: 300px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .aboutme-right p {
      font-size: 1.2rem;
    }
    .apps_row img {
      width: 30px;
      margin: -5px;
    }
    .aboutme p2,
    .bulletlist li {
      font-size: 1em;
    }

    .right_column {
      display: none;
    }

    h1 {
      font-size: 2.8em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 2.5rem;
      margin-top: -60px; /* Add this line to reduce the gap */
    }
  }
`;
