import { Component } from '@angular/core';

//import { ArticleService } from './article-service.service'

import { RacingDataService } from './racing-data.service'

import {Article} from './article';
//import { ARTICLES } from './mock-articles';


@Component({
	selector : 'lists-articles',
	templateUrl : 'articles.component.html',

	providers : [RacingDataService]
})

export class ArticlesComponent {

	articles : Article[] = [
	{
id_art: 132,
titre: "Réunion du Conseil de l’Union africaine des architectes",
contenu: "Face à l’urbanisation galopante que connaît le Maroc, à l’image des autres pays d’Afrique, la réorganisation du métier d’architecte et l’implication des collectivités locales devenaient impératives. En organisant la 56e réunion du Conseil de l’Union africaine des architectes, le Conseil national de l’Ordre des architectes marocains et l’Union des architectes africains ont engagé plusieurs axes de travail, dont «l’amélioration de l’enseignement, l’organisation de l’exercice professionnel, le code d’éthique et la formation professionnelle continue au profit des architectes exerçant sur l’ensemble du continent», a déclaré Amine Turki, secrétaire général de l’Union des architectes d’Afrique. Cette dernière est organisée en sections membres, ordres et organisations d’architecte. Actuellement, il y a 41 membres qui travaillent essentiellement sur le développement de l’exercice professionnel pour la protection du patrimoine architectural «face à une mondialisation féroce qui défigure tout le paysage. L’architecture est le miroir de la civilisation et nous sommes appelés à protéger ce miroir pour ne pas tomber dans le rapidement consommable», poursuit Amine Turki, qui met également l’accent sur la disparité qui caractérise le métier entre les pays d’Afrique : «En l’absence de lois et face à l’invasion d’architectes étrangers et à l’exercice illégal de la profession, c’est tout le patrimoine bâti qui risque d’être défiguré». Azdinne Nekmouch, président du Conseil national de l'Ordre des architectes marocains, a indiqué que l’organisation de cet événement au Maroc s’inscrit dans la politique de consolidation des relations avec les pays africains et le renforcement de la coopération Sud-Sud et dans la régionalisation avancée qui impose «un rééquilibrage de la planification du territoire». Pour Daoudi Mohamed Yassine, vice-président de l’Association marocaine des présidents des conseils communaux, cette réorganisation passe par l’implication des collectivités locales : «Toute planification n’aura de valeur que si l’ensemble des acteurs y est engagé. Il faut qu’il y ait également un transfert des prérogatives vers les collectivités territoriales, des ressources financières et humaines plus conséquentes». Il en veut pour preuve que 65% des objectifs du développement durable, tels que définis par les Nations unies en décembre 2015, impliquent les collectivités locales. Pour rappel, l’Union des architectes d’Afrique collaboration est partenaire de la campagne mondiale de l’urbanisation lancée par l’ONU et organise dans ce cadre, le campus des penseurs urbains dont les prochaines éditions auront lieu en Afrique du Sud, au Sénégal et au Congo tout au long de l’année 2017 après celles organisées au Maroc et en Ouganda",
date_art: "2017-06-30",
publie: 1,
file: "http://localhost/yii/advanced2/backend/web/uploads/ECONOMIE.jpg",
id_user: 1,
count_views: 28
},
{
id_art: 131,
titre: "Morocco Today Forum 2017 ",
contenu: "«Depuis 2009, l’équipe internationale du British Council a implémenté des programmes d’entrepreneuriat social dans plus de 30 pays, tout en s’adaptant au contexte et aux besoins locaux. Au Maroc, le British Council contribue au renforcement de l’écosystème depuis 2014 et souhaite continuer à apporter son soutien pour une économie plus prospère, durable et inclusive», c’est ce qu’a souligné Tifawt Belaïd, Project Manager au British Council dans un entretien accordé au «Matin». Motivé par la volonté d'apporter son aide aux jeunes disposant d’un projet en phase d’implémentation, le British Council, à travers son programme financé par l’ambassade du Royaume-Uni «Social EntrepreNorth», répond efficacement aux défis sociaux, culturels et environnementaux de la région Tanger-Tétouan-Al Hoceïma. «Nos actions au Maroc aident les citoyens et les institutions à contribuer à un monde plus ouvert, inclusif et prospère. Nous nouons des partenariats avec des organisations de la société civile, des ministères gouvernementaux et des institutions au Royaume-Uni, au Maroc et à travers le monde afin d’assurer des programmes de haute qualité. Notre travail se centre sur les jeunes et l’engagement communautaire, l’entrepreneuriat social et la citoyenneté active», apprend-on auprès du British Council. L’idée est aussi de consolider les capacités de formation, d'expertise et de soutien aux entreprises sociales. Le programme, financé par l’ambassade britannique au Maroc, encourage également les étudiants au sein des universités à prendre la voie de l'innovation sociale avec le soutien des acteurs locaux. C’est dans ce cadre que l’Université Abdelmalek Essaadi a bénéficié d’un accompagnement renforcé dans l’incorporation d’activités encourageant l’entrepreneuriat social via la signature d’un partenariat avec une université britannique. Pour réussir ce projet, l’initiateur du programme a procédé au lancement de campagnes de sensibilisation des politiques et preneurs de décisions locaux au concept de l’entrepreneuriat social via l’organisation de conférence, de tables rondes et d’ateliers d’information. De la formation de formateurs pour repérer et enrichir l’expertise locale aux programmes de financement en passant par des ateliers de coaching pour les 10 meilleurs entrepreneurs sociaux, le British Council s’appuie sur l'expertise du Royaume-Uni et opère dans 24 pays et quatre continents. L'objectif final c’est de partager les meilleures pratiques et de créer de véritables opportunités d’emploi et d’insertion professionnelle. ",
date_art: "2017-06-30",
publie: 1,
file: "http://localhost/yii/advanced2/backend/web/uploads/Morocco Today Forum 2017 .jpg",
id_user: 1,
count_views: 28
}] ;

	constructor(private racingDataService : RacingDataService){}

	
ngOnInit(): void{

	this.racingDataService.getArticles().subscribe(articles => this.articles = articles);

}





}