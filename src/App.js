import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import LoaderSpinner from 'components/Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';

// Динамические импорты
const HomeView = lazy(() =>
    import('views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
    import('views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
    import('views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
    import('views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

// Статические импорты
// import HomeView from 'views/HomeView';
// import RegisterView from 'views/RegisterView';
// import LoginView from 'views/LoginView';
// import ContactsView from 'views/ContactsView';

const App = () => {
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(
        authSelectors.getIsFetchingCurrentUser,
    );

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <ToastContainer />

            {isFetchingCurrentUser ? (
                <h1>Show React Skeleton</h1>
            ) : (
                <>
                    <AppBar />

                    <Switch>
                        <Suspense fallback={<LoaderSpinner />}>
                            <PublicRoute exact path="/">
                                <HomeView />
                            </PublicRoute>

                            <PublicRoute
                                path="/register"
                                restricted
                                redirectTo="/contacts"
                            >
                                <RegisterView />
                            </PublicRoute>

                            <PublicRoute
                                path="/login"
                                restricted
                                redirectTo="/contacts"
                            >
                                <LoginView />
                            </PublicRoute>

                            <PrivateRoute path="/contacts" redirectTo="/login">
                                <ContactsView />
                            </PrivateRoute>
                        </Suspense>
                    </Switch>
                </>
            )}
        </Container>
    );
};

export default App;
