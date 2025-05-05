import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header2 } from '../components-jogini/Header2';
import { Intro2 } from '../components-jogini/Intro2';
import { Img } from '../components-jogini/Img';


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header2 />
    <Intro2 />
    <Img src="https://github.com/Czechitas-podklady-WEB/cviceni-jogini/blob/master/img/yoga-pose.jpg?raw=true" />
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
