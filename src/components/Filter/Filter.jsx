//import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';

import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';

//  const saveFilteredValue = event => {
//    setFilter(event.target.value);
//  };

//  const filterContacts = () => {
//    const optimizedString = filter.toLowerCase();

//    return contacts.filter(({ name }) =>
//      name.toLowerCase().includes(optimizedString)
//    );
//  };

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const text = event.target.value.toLowerCase();
    dispatch(filterContacts(text));
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

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   findContact: PropTypes.func.isRequired,
// };
