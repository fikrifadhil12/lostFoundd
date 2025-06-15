import Header from "../components/Header";
import MainMenu from "../components/MainMenu";

const Home = ({ onNavigate }) => {
  return (
    <div>
      <Header />
      <MainMenu onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
