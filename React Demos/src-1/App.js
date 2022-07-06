import logo from './logo.svg';
import './App.css';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import BodyContent from './BodyContent';
//import FirstComponent from './FirstComponent';

function App() {
  return  (
        <div>
          <AppHeader title="Welcome to React Training in CDAC"/>
          <BodyContent/>
          <AppFooter company ="CDAC India Inc." year="2023"/>  
        </div>  
  )
}

export default App;
