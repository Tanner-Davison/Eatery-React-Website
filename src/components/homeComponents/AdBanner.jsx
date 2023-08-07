import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import RecipeCard from "./RecipeCard";

const AdBanner = () => {
  return (
		<>
			<AdBannerContent
				style={{
					background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)),
          url(${salmon})`,
					backgroundSize: "cover",
					backgroundPosition: "center auto",
					backgroundRepeat: "no-repeat",
				}}>
				<div className={"banner-content-wrapper"}>
					<h3>New Recipe</h3>
					<h1>Pineapple Salmon</h1>
					<h3>
						This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
						brown sugar rub, baked for 25 minutes on a bed of pineapple, and
						garnished in butter, garlic, and chives. You won’t want to miss it!
					</h3>
					<Link to='/recipe/3'>
						<button className='blue-btn'>Check it out</button>
					</Link>
				</div>
			</AdBannerContent>
			<RecipeCard />
		</>
	);
};

export default AdBanner;

const AdBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
  font-family: "Poppins", sans-serif;
  color: white;

  .banner-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-top: 25px;
  }
  h1 {
    font-size: 50px;
    color: #f66f00;
    font-family: "Poppins", sans-serif;
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60%;
  }
  button {
    font-family: "Varela Round", sans-serif;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;
    font-size: 17px;
    font-weight: 600;
    line-height: center;
    margin: 0;
    min-height: 20px;
    max-height: 45px;
    outline: none;
    padding: 16px;
    text-align: center;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;