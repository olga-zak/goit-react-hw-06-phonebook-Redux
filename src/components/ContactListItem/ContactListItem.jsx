import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

import { ListItem } from './ContactListItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactListItem = ({ name, number, id }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
