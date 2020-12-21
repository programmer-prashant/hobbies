import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#130f40',
	},
	heading: {
		color: '#c7ecee',
	},
	image: {
		marginLeft: '15px',
		borderRadius: 15,
	},
	[theme.breakpoints.down('sm')]: {
		mainContainer: {
			flexDirection: 'column-reverse',
		},
	},
}));
