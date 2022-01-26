import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import s from './ContactItem.module.css';
import { contactsOperations } from 'redux/contacts';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <Container component="main" maxWidth="xs">
            <ListItem className={s.listItem}>
                <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" className={s.avatar} />
                </ListItemAvatar>
                <ListItemText>
                    <span className={s.nameNumber}>{name}</span>
                    <span className={s.phoneNumber}>{number}</span>
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() =>
                            dispatch(contactsOperations.deleteContact(id))
                        }
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Container>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
