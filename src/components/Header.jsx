import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const Header = () => {
  return (
		<StyledHeader>
			<h2>DevMountain Eatery</h2>
			<nav>
				<Link to='' className={'link'}>
					<button >Home</button>
				</Link>
				<Link to='/newRecipe' className={'link'}>
					<button >Add Recipe</button>
				</Link>
			</nav>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	flex-wrap: hidden;
	gap: 10px;
	font-size: 40px;
	align-items: center;
	background-color: darkorange;
	font-family: "Poppins", sans-serif;

	.link {
		text-decoration: none;
	}
	h2 {
		position: absolute;
		padding-right: 300px;
		padding-left: 20px;
		height: 60px;
		color: white;
	}
	nav {
		position: absolute;
		display: flex;
		width: 76%;
		height: 100%;
		gap: 20px;
		justify-content: flex-end;
		right: 40px;
		text-decoration: hidden;
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
		background-color: #f5f5dc;
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-2px);
    color:black;
	}

	button:active {
		box-shadow: none;
		transform: translateY(0);
	}
`;



