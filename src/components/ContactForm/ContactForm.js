import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    field: {
        marginRight: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactsNames = useSelector(contactsSelectors.getContactsNames);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (contactsNames.includes(name.toLowerCase())) {
            toast.error(`${name} is already in contacts`);
            return;
        }

        // 2-ой вариант поиска существующего имени
        // if (
        //     contacts.find(
        //         contact => contact.name.toLowerCase() === name.toLowerCase(),
        //     )
        // ) {
        //     alert(`${name} is already in contacts`);
        //     return;
        // }
        const contact = { name, number };
        dispatch(contactsOperations.addContact(contact));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h2">
                    Phone book
                </Typography>

                <form
                    onSubmit={handleSubmit}
                    className={classes.form}
                    autoComplete="off"
                >
                    <TextField
                        variant="standard"
                        type="text"
                        id="name"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className={classes.field}
                    />
                    <TextField
                        variant="standard"
                        type="tel"
                        id="number"
                        label="Number"
                        name="number"
                        value={number}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={name === '' || number === ''}
                    >
                        Add contact
                    </Button>
                </form>
            </div>
        </Container>
    );
}
