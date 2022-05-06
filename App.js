import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import News from "./components/News";
import Home from "./components/Home";
//import KeyEvent from './components/KeyEvent';
//import RenderIf from './components/RenderIf';
// import ReactForm from "./components/ReactForm";
//import ChangeFn from "./components/ChangeFn";
//import Parent from './components/Parent';
//import Lifecycle from "./components/Lifecycle";
// import HomeIndex from "./components/HomeIndex";
//import HomeAxios from "./components/HomeAxios";
//import FetchJsonp from './components/FetchJsonp';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content";
function App() {
  let dataList = {
    title:"新闻列表",
    list:[
      {
        name:"111111111111111"
      },
      {
        name:"222222222222"
      },
      {
        name:"3333333333333333"
      }
    ]
  }
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <Link to="/">首页</Link>
              <Link to="/news">新闻</Link>
              <Routes>
                  {/* <Route exact path="/" element={<Home/>} /> */}
                  <Route path="/news" element={<News/>} />
                  <Route path="/content/:aid" element={<Content/>} />
              </Routes>
          </BrowserRouter>




          {/*<HomeAxios/>*/}
{/*<FetchJsonp/>*/}
        {/*<HomeIndex/>*/}
        {/*<Lifecycle title={dataList.title}/>*/}
        {/*<Parent/>*/}
        {/*<ChangeFn/>*/}
        {/*<Home msg={"sssssssssssssssssssss"}/>*/}
        {/*<ReactForm/>*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<RenderIf/>
         <Home/>
        <News datalist={dataList} />
        <KeyEvent/>*/}
        {/*<img src={require('./assets/img/logo.svg').default} alt=""/>*/}
       {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
