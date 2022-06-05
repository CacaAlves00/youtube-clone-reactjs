import Header from './components/Header';
import SideBar from './components/SideBar';
import RecommendedVideos from './components/RecommendedVideos';

import './App.css';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <SideBar />

        <RecommendedVideos />
      </main>

    </div>
  );
}

export default App;
