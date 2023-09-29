import React from 'react'
import ReactDOM from 'react-dom/client';
// import { restaurants } from './constants/mock.js';
import { MainPage } from './pages/main/component.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
/* root.render(
  <div>
    <h2><b><u>{restaurants[0].name}</u></b></h2>
    <h3><b>Menu:</b></h3>
    <li>{restaurants[0].menu[0].name}</li>
    <br />
    <li>{restaurants[0].menu[1].name}</li>
    <br />
    <li>{restaurants[0].menu[2].name}</li>
    <h3><b>Reviews:</b></h3>
    <li>{restaurants[0].reviews[0].text}</li>
    <br />
    <li>{restaurants[0].reviews[1].text}</li>
    <br />
    <h2><b><u>{restaurants[1].name}</u></b></h2>
    <h3><b>Menu:</b></h3>
    <li>{restaurants[1].menu[0].name}</li>
    <br />
    <li>{restaurants[1].menu[1].name}</li>
    <h3><b>Reviews:</b></h3>
    <li>{restaurants[1].reviews[0].text}</li>
    <br />
    <li>{restaurants[1].reviews[1].text}</li>
    <br />
    <li>{restaurants[1].reviews[2].text}</li>
    <br />
    <h2><b><u>{restaurants[2].name}</u></b></h2>
    <h3><b>Menu:</b></h3>
    <li>{restaurants[2].menu[0].name}</li>
    <br />
    <li>{restaurants[2].menu[1].name}</li>
    <br />
    <li>{restaurants[2].menu[2].name}</li>
    <h3><b>Reviews:</b></h3>
    <li>{restaurants[2].reviews[0].text}</li>
    <br />
    <h2><b><u>{restaurants[3].name}</u></b></h2>
    <h3><b>Menu:</b></h3>
    <li>{restaurants[3].menu[0].name}</li>
    <br />
    <li>{restaurants[3].menu[1].name}</li>
    <h3><b>Reviews:</b></h3>
    <li>{restaurants[3].reviews[0].text}</li>
    <br />
    <li>{restaurants[3].reviews[1].text}</li>
  </div>
); */

root.render(<MainPage />);