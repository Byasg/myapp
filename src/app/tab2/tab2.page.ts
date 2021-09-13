import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  slides = [
    {
      titulo: 'Como eu era antes de você',
      imagem: 'assets/images/como-eu-era-antes-de-voce.jfif',
      descricao:
        // eslint-disable-next-line max-len
        'Resumo: O filme conta a história de Will Traynor, interpretado pelo ator Sam Clafin, é rico bem-sucedido e vive sua vida plenamente até que um dia, é atropelado por uma moto e fica gravemente ferido.',
    },
    {
      titulo: 'Interestelar',
      imagem: 'assets/images/interestelar.jfif',
      descricao:
        // eslint-disable-next-line max-len
        'Resumo: Interestelar (no original Interstellar ), lançado em 2014, é um filme de ficção científica dirigido por Christopher Nolan, escrito em parceria com o irmão Jonathan Nolan. O longa-metragem conta a complexa história de Cooper, um piloto da NASA que tem a difícil tarefa de salvar a espécie humana da extinção.',
    },
    {
      titulo: 'O vendedor de sonhos',
      imagem: 'assets/images/o-vendedor-de-sonhos.jfif',
      descricao:
        // eslint-disable-next-line max-len
        ' Resumo: O filme conta a história de um renomado psicólogo que, desiludido com a vida, está prestes a cometer suicídio saltando de um prédio quando é resgatado pelas palavras e atitude do mais improvável dos seres: um mendigo, conhecido como “mestre”. Apresentando-se como um vendedor desonhos, o Mestre oferece a Júlio César um dos seus mais preciosos bens - o sonho de recomeçar.',
    },
  ];

  constructor() {}
}
