// При сабмите формы в компоненте ContactForm необходимо отправить экшен создания нового контакта,
// передав ему значение введенное пользователем в текстовые поля.

// Для того чтобы оповестить стор о том, что в интерфейсе произошло какое - то событие, необходимо отправить экшен.
// Для этого в библиотеке React Redux есть хук useDispatch(), который возвращает ссылку на функцию отправки экшенов
// dispatch из объекта созданного нами ранее стора Redux.
// Импортируем хук
import { useDispatch } from 'react-redux';
// Импортируем генератор экшена
import { addContact } from 'redux/actions';

import { Form, FormLabel, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button>Add contact</Button>
      </Form>
    </>
  );
};
