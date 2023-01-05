import { FilterField } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';

import { useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/filter/filter-actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const text = event.target.value.toLowerCase();
    dispatch(getFilterValue(text));
  };
  return (
    <FilterField>
      Find contact by name:
      <Input
        type="text"
        name="filter"
        //value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </FilterField>
  );
};
