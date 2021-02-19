import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Games from '../games/Games';
import Contact from '../contact/Contact';
import GameDetail from '../games/gameDetail/GameDetail';
import Favorite from '../favorite/Favorite';
import { GamesProvider } from '../GamesContext';
import Footer from './Footer';

function Layout() {
	return (
		<GamesProvider>
			<Router>
				<Navbar bg='dark' variant='dark' expand='lg'>
					<NavLink to='/' exact>
						<Navbar.Brand>GameSearch</Navbar.Brand>
					</NavLink>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<NavLink to='/' exact className='nav-link'>
								Games
							</NavLink>
							<NavLink to='/contact' className='nav-link'>
								Contact
							</NavLink>
							<NavLink to='/favorite' className='nav-link'>
								Favorites
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Switch>
					<Route path='/' exact component={Games} />
					<Route path='/contact' component={Contact} />
					<Route path='/game/:id' component={GameDetail} />
					<Route path='/favorite' component={Favorite} />
				</Switch>
			</Router>
			<Footer />
		</GamesProvider>
	);
}

export default Layout;
