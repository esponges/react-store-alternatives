import logo from './logo.svg';
import './App.css';
import { ReduxToolKit } from './components/ReduxToolKit';
import { store } from './stores/redux-tool-kit/store';
import { Provider } from 'react-redux';
import { Zustand } from './components/Zustand';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store}>
          <ReduxToolKit />
        </Provider>
        <Zustand />
      </header>
    </div>
  );
}

export default App;
