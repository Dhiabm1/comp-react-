import './App.css';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
function App() {
  return (
    <div className="App">
      <div className="card-container">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      
      </div>
    </div>
  );
}

export default App;