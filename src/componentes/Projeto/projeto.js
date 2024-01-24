import Head from '../head/Head';
import './projeto.css';
import Texto from '../Texto/texto';
import Voltarhome from '../Voltarhome/Voltahome';
function Projeto(){
    return(
    <div>
<Head titulo="meu projeto"/> 
<div className ="caixa">
<Texto titulo="Grand Theft Auto: San Andreas" para="Grand Theft Auto: San Andreas é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o quinto título principal da série Grand Theft Auto e foi lançado em outubro de 2004 para PlayStation 2 e em junho de 2005 para Xbox e Microsoft Windows. Versões para plataformas móveis foram lançadas inicialmente em 2013, enquanto que uma versão aprimorada, sob o subtítulo The Definitive Edition, foi lançada em 2021. O jogo se passa no estado ficcional de San Andreas, com a história seguindo Carl CJ Johnson em sua luta para lidar com guerras de gangues, confrontos com policiais e as relações com sua família e amigos. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas."/>
<Texto titulo="Bully" para="O jogo é jogado em uma perspectiva em terceira pessoa e seu mundo aberto pode ser explorado a pé, com um skate, motoneta, bicicleta ou um kart. Situado na cidade fictícia de Bullworth, os jogadores controlam o adolescente e delinquente juvenil James Jimmy Hopkins, um estudante involuntariamente matriculado no internato Bullworth Academy, que reúne esforços para ser respeitado subindo na hierarquia do sistema escolar e pondo fim ao bullying."/>
<Texto titulo="Red Dead Redemption" para="Se passando em um ambiente amplo e aberto com partes ocidentais do interior americano e áreas do norte do México, Redemption é apresentado através de uma perspectiva de terceira pessoa. A maior parte da história do jogo se passa em 1911 e segue o protagonista John Marston, um ex-fora-da-lei, que é forçado a caçar seus ex-associados por agentes corruptos do governo."/>

</div>
<Voltarhome></Voltarhome>
</div>
    )      
}

export default Projeto;