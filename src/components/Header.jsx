import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const Header = () => {
  return (
		<StyledHeader>
			<h2>Devmountain Eatery</h2>
			<nav>
				<Link to=''>
					<button role='button'>Home</button>
				</Link>
				<Link to='/newRecipe'>
					<button role='button'>Add Recipe</button>
				</Link>
			</nav>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	gap: 10px;
	font-size: 45px;
	align-items: center;
	font-family: "Nova Round", cursive;

	nav {
		display: flex;
		gap: 10px;
		padding-left: 60px;
	}
	button {
		font-family: "Varela Round", sans-serif;
		background-color: transparent;
		border: 2px solid #1a1a1a;
		border-radius: 15px;
		box-sizing: border-box;
		color: #3b3b3b;
		cursor: pointer;
		display: inline-block;
		font-size: 16px;
		font-weight: 600;
		line-height: normal;
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



