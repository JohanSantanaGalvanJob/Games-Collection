import '../Styles/Home.scss';
import '../Components/DownBar'
import DownBar from '../Components/DownBar';
import TopBar from '../Components/TopBar';
import Cards from '../Components/Cards';
import DesktopTopBar from '../Components/DesktopTopBar';

function Home() {
  return (
    <div className='home-container'>
      <TopBar ></TopBar>
      <DesktopTopBar></DesktopTopBar>
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
