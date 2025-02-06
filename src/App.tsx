import React, { useEffect } from 'react';
import './App.css';
import NewsFeed from './NewsFeed/NewsFeed';
import hillHubLogo from "./assets/HillHub.png";
import TopNavigation from './TopNavigation/TopNavigation';
import BillsComponent from './BillsComponent/BillsComponent';

//https://rss.app/explore/search?feed=tUyqHsnAOvKKzkHS&title=Politics
function App() {
  const [selectedMenuOption, setSelectedMenuOption] = React.useState('Bills');
  useEffect(() => {
  }, [])
  console.log('App mode: ', process.env.NODE_ENV);
  return (
    <div className="App">
      <div className="App-header"><span>HILL</span>
        <img src={hillHubLogo} alt='HillHub Logo' />
        <span>HUB</span>
      </div>
      <div className='app-body'>
        <div className='left-sidebar'></div>
        <div className='main-content'>
          <TopNavigation />
          {selectedMenuOption === 'Bills'? <BillsComponent /> : null}
          {selectedMenuOption === 'News'? <NewsFeed /> : null}
        </div>
        <div className='right-sidebar'></div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
