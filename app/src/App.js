import style from './styles/App.module.css';
import Introduction from './components/Introduction';
import Head from "./components/Head";

function App() {
  return (
    <div className={style.App}>
      <Introduction/>
      <Head/>
    </div>
  );
}

export default App;
