import Head from '../head/Head';
import './habilidades.css';
import react from '../../imagens/react-2.png';
import js from '../../imagens/JavaScript_Logo.png';
import css from '../../imagens/css3.png';
import html from '../../imagens/html.png';
import db from '../../imagens/db.png';
import node from '../../imagens/nodejs-logo.png'
import Figura from '../Figura/figura';
import Voltarhome from '../Voltarhome/Voltahome';
import {Link} from 'react-router-dom';
function Habilidades(){

return( 
<div>
<Head titulo="habilidades"/> 
<div className='fig'>
<Link to="/react"><Figura titulo="reactjs" img={react}/></Link>
<Link to="/jav"><Figura titulo="javascript" img={js}/></Link>
<Link to="/cs"><Figura titulo="css" img={css}/></Link>
<Link><Figura titulo="html5" img={html}/></Link>
<Link><Figura titulo="dbrelacional " img={db}/></Link>
<Link to="/node"><Figura titulo="node js" img={node}/></Link>
</div>
<Voltarhome></Voltarhome>
</div>
)

}

export default Habilidades;