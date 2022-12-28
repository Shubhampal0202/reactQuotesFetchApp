import './App.css';
import {Provider} from 'react-redux';
import {store} from './redux/store'
import QuoteContainer from './components/QuoteContainer'
function App() {
  return (
    <div>
      <Provider store={store}>
        <QuoteContainer></QuoteContainer>
      </Provider>
    </div>
  );
}

export default App;
