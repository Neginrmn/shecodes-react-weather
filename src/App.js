
import './App.css';
import './Weather.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <Weather defaultCity='London'/>
      <footer>
  This project is coded by Negin{" "}<a href='https://app.netlify.com/sites/reactweatherapp4shecodes/settings/domain' target='_blank' rel="noreferrer">find it on Github</a>
  </footer>
    </div>
  );
}
//colors #347e8f - #0f5069 - #09394c - #00364b

