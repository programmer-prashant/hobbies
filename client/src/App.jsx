import React, { useState, useEffect } from 'react';
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Box,
} from '@material-ui/core';
import useStyles from './styles';
import logo from './images/logo.JPG';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<>
			<Box pb={3}>
				<AppBar className={classes.appBar} position='static' color='inherit'>
					<Typography className={classes.heading} variant='h2' align='center'>
						Hobbies
					</Typography>
					<img className={classes.image} src={logo} alt='logo' height='60' />
				</AppBar>
			</Box>
			<Container maxWidth='lg'>
				<Grow in>
					<Container>
						<Grid
							container
							justify='space-between'
							alignItems='stretch'
							className={classes.mainContainer}
							spacing={3}
						>
							<Grid item xs={12} sm={7}>
								<Posts setCurrentId={setCurrentId} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form currentId={currentId} setCurrentId={setCurrentId} />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</>
	);
};

export default App;
