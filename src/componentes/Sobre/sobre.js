import './sobre.css';
import Logo from '../../imagens/logo.png';
import Head from '../head/Head';
import Voltarhome from '../Voltarhome/Voltahome';

function sobre(){
          return(
          <div className='sou'>
                   <Head titulo="sobre mim"/> 
                     <div><h2>olá sou vitor pretendo ser um desenvolvedor full stack para isso estou fazendo curso no senac,aqui temos melhores professores e aprendemos todos os dias sobre linguagem de programação,temos aula de javascript,html,banco de dados,css, essa sera a segunda aula do da uc9 estou desenvolvendor essa pagina criada no react. </h2></div> 
         <Voltarhome></Voltarhome>
          </div>
          )
}

export default sobre;