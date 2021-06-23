
import './App.css';
import React from 'react'
import AnimeList from './components/AnimeList';
import { Route, Link, Redirect } from 'react-router-dom';
import Description from './components/Description';
import NavBar from './components/NavBar';
import AddAnimeForm from './components/AddAnimeForm';
import Review from './components/Review';
import AddReviewForm from './components/AddReviewForm';
import EditAnimeForm from './components/EditAnimeForm';
import EditReview from './components/EditReview';
import Updates from './components/Updates';
import CarouselNav from './components/CarouselNav';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Table} from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
import FooterComponent from './components/FooterComponent';
import LogInForm from './components/LogInForm';
import RegisterForm from './components/RegisterForm'
import {connect} from 'react-redux';

const App = (props) => {

	// const [login, setLogin] = useState(props.user)
	const [animes, setAnimes] = useState([]);
	const [editAnime, setEditAnime] = useState({});
	const [getReview, setGetReview] = useState([])
	const [editReview, setEditReview] = useState({})

	useEffect((_id) => {
		axios('http://localhost:8000/anime')
		.then(res => {
		  setAnimes(res.data)
		});
	  }, [animes]);

	useEffect((_id) => {
		axios('http://localhost:8000/reviews')
		.then(res => {
			setGetReview(res.data)
		})
	}, [getReview])

const deleteAnime = (_id) => {
	let updatedAnime = animes.filter(anime => anime._id !== _id);
	setAnimes(updatedAnime);
};

const deleteReview = (_id) => {
	let updatedReview = getReview.filter(review => review._id !== _id);
	setGetReview(updatedReview);
};

const addAnime = (newAnime) => {
	setAnimes([
		...animes,
		newAnime
	])
}

const addReview = (newReview) => {
	setGetReview([
		...getReview,
		newReview
	])
}

const editAnimeBtnClickHandler = (anime) => {
	setEditAnime(anime)
	// console.log(anime)
}

const editReviewBtnClickHandler = (anime) => {
	setEditReview(anime)
	// console.log(anime)
}

// const checker = () => {
// 	console.log(props.user)
// }


	
    return (
    <div className="App">
		<img className="pokeheader" src={"https://i.imgur.com/uVek9Zz.jpg"} />
		{/* <h1 className='Up'>Anime Bakari</h1> */}
      <header className="App-header">
		<NavBar />
		{/* <Route exact path='/'>
			{props.user && <Redirect to="/anime" />}
			<LogInForm />
		</Route>
		<Route exact path='/register'>
		{props.user && <Redirect to="/anime" />}
			<RegisterForm />
		</Route> */}
		<Route exact path='/'>
			<CarouselNav />
		</Route>	
		<Route exact path={'/addanime'}>
			<AddAnimeForm addAnime={addAnime} />
		</Route>
				
		<Route path={'/edit/anime'}>
			<EditAnimeForm editAnime={editAnime} editAnimeBtnClickHandler={editAnimeBtnClickHandler}/>
		</Route>	
		<Route path={'/edit/review'}>
			<EditReview editReview={editReview} editReviewBtnClickHandler={editReviewBtnClickHandler}/>
		</Route>
		<Route path={'/addreview'}>
			<AddReviewForm addReview={addReview}/>
		</Route>	
		<Route exact path='/updates'>
			<Updates />
		</Route>
		{/* <button onClick={checker}>
			adsfsd
		</button> */}
						<div className="descriptionContainer">
							{
							getReview.map( rev  => 
								<Route exact path={"/review/"}>
									<Review  key={rev._id}  deleteReview={deleteReview} review={rev} full={true} /> 
								</Route>)
							}
						</div>
						<div className="descriptionContainer">
							{
							animes.map( anime => 
								<Route path={"/"+anime.title}>
									<Description key={anime._id} anime={anime} full={true} />
								</Route>)
							}
						</div>

						<div className="descriptionContainer">
							{
							getReview.map( review => 
								<Route path={"/review/"+review.title}>
									<Post key={review._id} review={review} full={true} editReviewBtnClickHandler={editReviewBtnClickHandler} />
								</Route>)
							}
						</div>
						<Route path='/anime/'>
							<div className="tableContainer" width="80%">
								<Table striped bordered variant="dark">
								<thead>
									<th>Image</th>
									<th>Details</th>
									<th>Rating</th>
								</thead>
								
								
								<tbody>
									<Route exact path="/anime/all">
										{
										animes.map(anime => {
											return <AnimeList 
											key={anime._id}
											anime={anime}
											deleteAnime={deleteAnime}
											editAnimeBtnClickHandler={editAnimeBtnClickHandler}
											/>
											})
											
										}	
									</Route>
									< Route exact path="/anime/action">
											{
												
												animes.filter( (anime) => {
													return anime.category.indexOf('Action') !== -1
												})  
												.map( anime => {
													return <AnimeList 
														key={anime._id}
														anime={anime}
														deleteAnime={deleteAnime}
														editAnimeBtnClickHandler={editAnimeBtnClickHandler}
														/>
												})
											}
											</Route>

									< Route exact path="/anime/drama">
										{
												
										animes.filter( (anime) => {
											return anime.category.indexOf('Drama') !== -1
											})  
											.map( anime => {
												return <AnimeList 
													key={anime._id}
													anime={anime}
													deleteAnime={deleteAnime}
													editAnimeBtnClickHandler={editAnimeBtnClickHandler}
													/>
												})
											}
										</Route>

										< Route exact path="/anime/comedy">
											{
												
												animes.filter( (anime) => {
													return anime.category.indexOf('Comedy') !== -1
												})  
												.map( anime => {
													return <AnimeList 
														key={anime._id}
														anime={anime}
														deleteAnime={deleteAnime}
														editAnimeBtnClickHandler={editAnimeBtnClickHandler}
														/>
												})
											}
										</Route>
										< Route exact path="/anime/horror.gore">
											{
												
												animes.filter( (anime) => {
													return anime.category.indexOf('Horror/Gore') !== -1
												})  
												.map( anime => {
													return <AnimeList 
														key={anime._id}
														anime={anime}
														deleteAnime={deleteAnime}
														editAnimeBtnClickHandler={editAnimeBtnClickHandler}
														/>
												})
											}
										</Route>
										
										</tbody>
						</Table>
							</div>
							
						</Route>
						
							
  		</header>
		<FooterComponent />
    </div>
  );
  }
  
 
const mapStateToProps = state => {
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(App);
