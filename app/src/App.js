import logo from './logo.svg';
import style from './styles/App.module.css';
import Introduction from './components/Introduction';
import Description from './components/Description';

function App() {
  return (
    <div className={style.App}>
      <Introduction/>
      <Description/>
    </div>
  );
}

export default App;
