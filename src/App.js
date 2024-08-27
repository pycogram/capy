import logo from './logo.svg';
import './App.css';
import { Page } from './Page';

const objIcon = {
  tg: require('./icon/tg.png'),
  x: require('./icon/twitter.png'),
  ray: require('./icon/sunpump.jpeg'),
  dext: require('./icon/dext.png'),
  dexs: require('./icon/dexs.png')
}
const objImg = {
  logo1: require('./pic/cb0.jpg'),
  logo2: require('./pic/cb3.jpg'),
  logo3: require('./pic/cb9.jpg')
}
const objGif = {
  gif1: require('./pic/cb2.jpg'),
  gif2: require('./pic/cb4.jpg'),
  gif3: require('./pic/cb7.jpg'),
  gif4: require('./pic/cb1.jpg'),
  gif5: require('./pic/cb9.jpg'),
  gif6: require('./pic/cb6.jpg'),
  gif7: require('./pic/cb5.jpg')
}

const testImg = require('./icon/dexs.png');

function App() {
  return (
    <div className="App" >
      < Page objIconPro = {objIcon} objImgPro = {objImg} objGifPro = {objGif} />
    </div>
  );
}

export default App;
