import { useSelector } from 'react-redux';
import s from './AppBar.module.css';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;
