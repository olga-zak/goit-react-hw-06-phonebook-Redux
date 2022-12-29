import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
