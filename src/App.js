
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './components/homeComponents/HomeScreen';
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailsScreen from './components/detailComponents/DetailScreen';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
function App() {
	return (
		
			<APP>
				<Header />
				<Routes>
					<Route
						index
						element={<HomeScreen />}
					/>
					<Route
						path='newRecipe'
						element={<NewRecipeScreen />}
					/>
					<Route
						path='recipe/:id'
						element={<DetailsScreen />}
					/>
				</Routes>
			<Footer />
			</APP>
		
	);
}

export default App;

const APP = styled.div`
position: relative;

min-height:100vh;


`
