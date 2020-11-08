import React from 'react'
import '../../../style/background.css'
import BackNarrow from '../../utils/BackNarrow'
//import CardDrop from '../../utils/CardDrop'
import ModalCard from '../../utils/ModalCard'
import './style.css'
import StyledFoto from '../../images/styled foto.png'
import Gulp from '../../images/gulp.jpg'
import tdd from '../../images/tdd.jpg'
import side from '../../images/side.png'
function drops() {

   
        return(
            <div className="containerDrops">
                <BackNarrow></BackNarrow>
                <h1 className='titleDrop'>Drops</h1>
                <p className='paragraph'>Postagens rápidas sobre dicas e truques de código, práticas recomendadas, ferramentas e muito mais:</p>
                <div className="ContainerModalCard">
                
                <ModalCard  title='styled component?' data='05 ago, 2020¨ 1min read' IsOpen={true}
                ModalTitle='Styled Component' ModalSubtitule='De que forma esta biblioteca pode nos ajudar?'
                ModalContent='styled-components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. 
                Abaixo, é um exemplo básico do que eles se parecem:'
                img={StyledFoto}
                ModalContent2='Eles são escritos em uma mistura de JavaScript com CSS.
                Se você ainda não está familiarizado com styled-components, dê uma olhada no website oficial para ter uma idéia.'
                href='https://styled-components.com/docs'
                flag='JavaScript'

                />
                
                <ModalCard  title='Como funciona o Gulp?' data='11 ago, 2020¨ 1min read' IsOpen={true}
                ModalTitle='Como funciona o Gulp?' ModalSubtitule='Vantagens de usar o Gulp'
                ModalContent='O Gulp foi criado na metade de 2013 por Eric Schoffstall com o objetivo de simplificar e agilizar o processo, utilizando streams. A informação é transmitida através das tarefas usando o método de pipeline, o que reduz o número de operações I/O.'
                img={Gulp} ModalContent2='De acordo com os dados do NPM, o Gulp continua crescendo e já está inclusive com um número maior de contribuidores no core'
                flag='JavaScript'
                />
                
                <ModalCard  title='Por que usar TDD?' data='16 ago, 2020¨ 1min read' IsOpen={true}
                ModalTitle='Test-Driven Development' ModalSubtitule='Agilidade com TDD'
                ModalContent='A prática de TDD agrega muitos benefícios ao processo de desenvolvimento. O primeiro deles, e mais claro, são os benefícios na qualidade externa do produto. Todos já sofremos os problemas de uma nova versão do produto que traz novas funcionalidades, mas faz as anteriores pararem de funcionar'
                img={tdd}
                ModalContent2='Utilizando TDD o programador praticamente obriga-se a olhar seu código de outra forma normalmente jamais vista antes. Aí é que está a parte legal da coisa toda.'
                flag='TOOLS'
                />
                
                <ModalCard className='moving'  title='Diferença client/server?' data='22 july, 2020¨ 1min read' IsOpen={true}
                ModalTitle='Server/Client Side' ModalSubtitule='Principais diferenças'
                ModalContent='As linguagens server-side são linguagens que o SERVIDOR entende. Isso quer dizer que vai escrever um código onde o servidor vai processá-lo e então vai mandar para o seu navegador a resposta.'
                img={side}
                ModalContent2='As linguagens client-side são linguagens onde apenas o seu NAVEGADOR vai entender. Quem vai processar essa linguagem não é o servidor, mas o seu browser.
                '
                flag='TOOLS'

                />
                
                </div>
                
            </div>
            
        )
}

export default drops