
import './App.css';
import React from 'react'
import Pokemon from './components/Pokemon';
import { Route, Link } from 'react-router-dom';
import Description from './components/Description';
import { connect } from 'react-redux';


class App extends React.Component {
state = {
	prevPage: '/',
} 

changePrevPage = (page) => {
	this.setState({
		prevPage: page
	});
}


  render() {
	
    return (
    <div className="App">
      <header className="App-header">
						<nav>
							<img className="pokeheader" src={"https://tcgplayerpro-www.s1.umbraco.io/media/2483/pokemon_play_pokemon_banner-02-2x.jpg"} />
									<Link to="/">
											<span>All</span>
									</Link>
											{
											this.props.typeSelection.map( type => {
												return <Link to={"/type/" + type.toLocaleLowerCase()}><span> {type} </span></Link>
											})
										}
						</nav>
						<div>
							
						</div>
						<table>
								<tbody>
										< Route exact path="/">
														{
															this.props.pokemons.map( pokemon => {
																return  <Pokemon 
																key={pokemon.id} 
																name={pokemon.name} 
																image={pokemon.img} 
																type={pokemon.types}/>
															})
														}
										</Route>

										< Route exact path="/type/Normal">
											{
												
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Normal') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Fire">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Fire') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Water">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Water') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Electric">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Electric') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Grass">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Grass') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Ice">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Ice') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Fighting">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Fighting') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Poison">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Poison') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Ground">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Ground') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Flying">
											{
												
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Flying') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Bug">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Bug') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Rock">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Rock') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Ghost">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Ghost') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Dark">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Dark') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Steel">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Steel') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										< Route exact path="/type/Fairy">
											{
												this.props.pokemons.filter( (pokemon) => {
													return pokemon.types.indexOf('Fairy') !== -1
												})  
												.map( pokemon => {
													return  <Pokemon
													key={pokemon.id} 
													name={pokemon.name} 
													image={pokemon.img} 
													type={pokemon.types}/>
												})
											}
										</Route>

										
										</tbody>
						</table>
						<div className="descriptionContainer">
							{
											this.props.pokemons.map( pokemon => <Route path={"/"+pokemon.name}>
												<Description  prevPage={this.state.prevPage} pokemon={pokemon} full={true} />
											</Route>)
										}
						</div>
										
  		</header>
      

    </div>
  );
  }
  
}

const mapStateToProps = store => {
	return{
		pokemons: store.pokemons,
		typeSelection: store.typeSelection
	}
}

export default connect(mapStateToProps) (App);
