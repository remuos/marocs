import {Injectable } from '@angular/core';

import { Article } from './article';
//import { ARTICLES } from './mock-articles';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RacingDataService{

	constructor(private http : Http){}

	getArticles(){
		return this.http.get('http://localhost/yii/advanced2/backend/web/index.php?r=article/list-article&key=ef32927ac29584c2a3250028c2c456d7&page=2')
		.map(response => <Article[]> response.json()) ;
	}


}