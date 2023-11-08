import '../Styles/Home.css';
import '../Components/DownBar'
import DownBar from '../Components/DownBar';
import TopBar from '../Components/TopBar';
import Cards from '../Components/Cards';

function Home() {
  return (
    <div className='home-container'>
      <TopBar></TopBar>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <DownBar></DownBar>
    </div>

  );
}

export default Home;
