import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import UserAvatar from 'images/user-avatar.svg';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import s from './UserMenu.module.css';
import { authOperations } from 'redux/auth';

const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={s.container}>
            <img src={UserAvatar} alt="Аватар" className={s.avatar} />
            <span className={s.name}>Welcome to Phonebook, {userName}</span>
            <Button
                type="button"
                color="primary"
                variant="outlined"
                className={classes.link}
                onClick={() => dispatch(authOperations.logOut())}
            >
                Log out
            </Button>
        </div>
    );
};

export default UserMenu;
