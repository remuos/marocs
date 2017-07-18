import {Injectable } from '@angular/core';

import { Article } from './article';
import { ARTICLES } from './mock-articles';


@Injectable()

export class ArticleService{


	getArticles(): Promise<Article[]> {
		return Promise.resolve(ARTICLES) ;
	}

	/*getArticlesSlowly():Promise<Article[]>{
		return new Promise(resolve =>{
			setTimeout(()=>resolve(this.getArticles()),2000))

		});
	}*/
}