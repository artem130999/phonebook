import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

import s from './Filter.module.css';
import { contactsActions, contactsSelectors } from 'redux/contacts';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
    },
}));

const Filter = () => {
    const value = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <div className={s.wrapper}>
                    <SearchTwoToneIcon color="action" fontSize="large" />
                    <Typography component="h1" variant="h5">
                        Find contacts by name
                    </Typography>
                </div>

                <form className={classes.form} autoComplete="off">
                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        value={value}
                        onChange={event =>
                            dispatch(
                                contactsActions.changeFilter(
                                    event.target.value,
                                ),
                            )
                        }
                        autoComplete="off"
                    />
                </form>
            </div>
        </Container>
    );
};

export default Filter;

// Компонент InputBase (библиотека material-ui)

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles(theme => ({
//     root: {
//         padding: '2px 4px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 400,
//     },
//     input: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
//     iconButton: {
//         padding: 10,
//     },
// }));

// export default function CustomizedInputBase() {
//     const classes = useStyles();

//     return (
//         <Paper component="form" className={classes.root}>
//             <InputBase
//                 className={classes.input}
//                 placeholder="Search Google Maps"
//                 inputProps={{ 'aria-label': 'search google maps' }}
//             />
//             <IconButton
//                 type="submit"
//                 className={classes.iconButton}
//                 aria-label="search"
//             >
//                 <SearchIcon />
//             </IconButton>
//         </Paper>
//     );
// }
