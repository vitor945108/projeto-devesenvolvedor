import './main.css';
import Logo from '../../imagens/logo.png';
import {Link} from 'react-router-dom';
function Main(){
          return(
                    <div>
<main>
<div className='ola'>
<h1>ola,me chamo <div className='name'>vitor!</div>
</h1>
<h3>sou desenvolvedor full stark</h3>
</div>    
 <img src={Logo} alt="LOGO" />

</main>
 <div className='barra'>
 {/* <a href="">sobre mim</a>
 <a href="">meus projetos</a>
 <a href="">habilidades</a>
 <a href="">contatos</a> */}
<Link to="sobremim">sobremim</Link>
<Link to="meuprojeto">meu projeto</Link>
<Link to="habilidades">habilidades</Link>
<Link to="contatos">contatos</Link>
 </div>
 </div>
          )
}

export default Main;