import styled from 'styled-components';
import steak from "../../assets/steak.jpg"

const RecipeCard = () => {
    return (
			<RecipeCardStyled>
				<h1>Flaming J'on</h1>
				<img
					src={`${steak}`}
                alt={'nice juicy steak'}
                style={{width:'200px',height:'200px'}}
            />
            <button>See More</button>
			</RecipeCardStyled>
		);
}

export default RecipeCard;

const RecipeCardStyled = styled.div`
position: relative;
	display: flex;
	flex-direction: column;
	font-family: "Poppins", sans-serif;
	align-items: center;
	justify-content: center;
	width:200px;
	height:300px;
	border-bottom:10px inset black;
	img{
		border-radius:25px;
		border: 4px solid black
	}
	h1 {
		font-family: "Poppins", sans-serif;
        font-size: 25px;
        
	}
	button {
		font-family: "Varela Round", sans-serif;
		background-color: transparent;
		border: 2px solid black;
		border-radius: 15px;
		color: black;
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