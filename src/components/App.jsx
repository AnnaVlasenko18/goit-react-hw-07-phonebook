import { useEffect } from 'react';
import { GlobalStyle } from '../components/GlogalStyle';
import { Wrapper, Container, Title, TitleContact } from './AppStyled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContact>Contacts</TitleContact>
        <Filter />
        <ContactList />
        <GlobalStyle />
      </Container>
    </Wrapper>
  );
};
