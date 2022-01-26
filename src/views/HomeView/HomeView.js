import s from './HomeView.module.css';
import phoneBookHome from 'images/phone-book.jpg';

const HomeView = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Phone book</h1>
            <img
                src={phoneBookHome}
                alt="Home page of our service"
                width="550"
            />
        </div>
    );
};

export default HomeView;
