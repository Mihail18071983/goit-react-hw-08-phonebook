import { useAuth } from 'shared/hooks/useAuth';
import { MainMassage } from './Home.styled';
import { AdditionalText } from './Home.styled';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <SmartphoneIcon
        style={{
          display:'block',
          color: '#006400',
          fontSize: '150px',
          marginTop: '150px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {isLoggedIn ? (
        <MainMassage>
          Create a personal PhoneBook
          <br /> and manage your contacts
        </MainMassage>
      ) : (
        <>
          <MainMassage>Welcome in PhoneBook application!</MainMassage>
          <AdditionalText>
            In order to get started, create a new account or log in to the app
          </AdditionalText>
        </>
      )}
    </>
  );
};

export default Home;
