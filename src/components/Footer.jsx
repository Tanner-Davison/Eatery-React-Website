import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h5>Hit us up on our socials!</h5>
        <div className={"iconWrapper"}>
          <div className={"icon"}>
            <a href="https://www.devmountain.com">
              <ImFacebook size="1.5em" className={"iconHover"} />
            </a>
          </div>
          <div className={"icon"}>
            <a href="https://www.devmountain.com">
              <ImInstagram size="1.5em" className={"iconHover"} />
            </a>
          </div>
          <div className={"icon"}>
            <a href="https://www.devmountain.com">
              <ImTwitter size="1.5em" className={"iconHover"} />
            </a>
          </div>
          <div className={"icon"}>
            <a href="https://www.devmountain.com">
              <ImGithub size="1.5em" className={"iconHover"} />
            </a>
          </div>
        </div>
      </div>
      <svg
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" stroke-width="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 70%;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: #404040;
  h5 {
    font-family: "Varela Round", sans-serif;
    font-size: larger;
    color: white;
  }
  .iconWrapper {
    display: flex;
    flex-direction: row;
  }

  .icon {
    height: 50px;
    width: 50px;
  }
  .icon:hover .iconHover {
    color: black;
  }
  .icon:hover {
    background-color: whitesmoke;
    border-radius: 50%;
  }
  .iconHover {
    color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
