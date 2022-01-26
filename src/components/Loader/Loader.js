import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function LoaderSpinner() {
    return (
        <Loader
            type="ThreeDots"
            color="rgba(0, 0, 0, 0.26)"
            height={50}
            width={50}
            className={s.loader}
        />
    );
}
