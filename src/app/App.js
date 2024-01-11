import 'bootstrap/dist/css/bootstrap.min.css';

import AppHelper from './AppHelper';
import './App.css';
const App = () => {
  console.log('app render');

  return (
    <div className="App">
      <AppHelper />
    </div>
  );
};

export default App;
