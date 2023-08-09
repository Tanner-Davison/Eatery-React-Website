import styled from 'styled-components';
import steaks from '../../assets/steaks.jpeg'
import martini from "../../assets/martini.jpg";
import cake from "../../assets/cake.jpg";

const RecipeCard = () => {
	return (
		<RecipeWrapper>
			<RecipeCardStyled>
				<img
					src={`${cake}`}
					alt={"excellent chocalate cake"}
					style={{ width: "250px", height: "250px" }}
				/>
				<h2>Chocolate Cake</h2>
				<button>See More</button>
			</RecipeCardStyled>
			<RecipeCardStyled>
				<img
					src={`${steaks}`}
					alt={"nice juicy steak"}
					style={{ width: "250px", height: "250px" }}
				/>
				<h2>Filet mignon</h2>
				<button>See More</button>
			</RecipeCardStyled>
			<RecipeCardStyled>
				<img
					src={`${martini}`}
					alt={"crisp dirty martini"}
					style={{ width: "250px", height: "250px" }}
				/>
				<h2>Dirty Martini</h2>
				<button>See More</button>
			</RecipeCardStyled>
		</RecipeWrapper>
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
	width: 250px;
	height: 350px;
	margin:20px;
	gap:4px;
	

	img {
		border-radius: 5px;
	}
	h2 {
		font-family: "Poppins", sans-serif;
		font-size: 25px;
		
	}
	button {
		font-family: "Varela Round", sans-serif;
		background-color: darkcyan;
		border: 2px solid black;
		border-radius: 6px;
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
		width: 65%;
		will-change: transform;
	}

	button:disabled {
		pointer-events: none;
	}

	button:hover {
		color: #fff;
		background-color: #49796b;
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-2px);
	}

	button:active {
		box-shadow: none;
		transform: translateY(0);
	}
`;
const RecipeWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	
	justify-content: center;
	height: 450px;

	gap: 8%;
	overflow: scroll;
	scroll-behavior: smooth;
	overflow-y:scroll;
`;