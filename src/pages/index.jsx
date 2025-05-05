import { render } from '@czechitas/render';
import '../global.css';
import './index2.css';

import { Header2 } from '../components-jogini/Header2';
import { Intro2 } from '../components-jogini/Intro2';
import { Img2 } from '../components-jogini/Img2';

import { Flight } from '../components-letenky/Flight';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header2 />
    <Intro2 />
    <Img2 src="https://github.com/Czechitas-podklady-WEB/cviceni-jogini/blob/master/img/yoga-pose.jpg?raw=true" />
    
    <Flight
      cityFrom="Praha"
      cityTo="Londýn"
      timeFrom="3. srpna 2022, 13:30"
      timeTo="3. srpna 2022, 14:00"
    />
    <Flight
      cityFrom="Praha"
      cityTo="Helsinky"
      timeFrom="4. srpna 2022, 8:00"
      timeTo="4. srpna 2022, 10:00"
    />
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
