import React from "react";

import ArticleCard from "../Component/ArticleCard";
/*import Article from "./src/Pages/Article";*/

import Data from "../Component/Data";


function ArticleListing() {
return (
	<div className="ArticleListing">

	   <header>
         <h1>Articles</h1>
	   </header>
	   
       <main>
		   {Data.map((article, i) => (
	        	<ArticleCard key={i} article={article} />
	        ))}
	   </main>
	</div>
 )
}

export default ArticleListing;
