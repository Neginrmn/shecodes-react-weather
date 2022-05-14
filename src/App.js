
import './App.css';
import './Weather.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Paris"/>
      <footer>
  This project is coded by Negin.{" "}Find it on{" "}<a href='https://github.com/Neginrmn/shecodes-react-weather' target='_blank' rel="noreferrer">Github</a>
  </footer>
    </div>
  );
}
//colors #347e8f - #0f5069 - #09394c - #00364b
// https://app.netlify.com/sites/reactweatherapp4shecodes/settings/domain