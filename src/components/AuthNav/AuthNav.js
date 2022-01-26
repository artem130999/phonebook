import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const AuthNav = () => {
    const classes = useStyles();

    return (
        <div>
            <Button color="primary" variant="outlined" className={classes.link}>
                <NavLink
                    to="/register"
                    className={s.link}
                    activeClassName={s.activeLink}
                >
                    Sign up
                </NavLink>
            </Button>

            <Button color="primary" variant="outlined" className={classes.link}>
                <NavLink
                    to="/login"
                    className={s.link}
                    activeClassName={s.activeLink}
                >
                    Login
                </NavLink>
            </Button>
        </div>
    );
};

export default AuthNav;
