import React from "react";

import ArticleCard from "../Component/ArticleCard";
/*import Article from "./src/Pages/Article";*/
import ArticleListing from "../Pages/ArticleListing";


import Data from "../Component/Data";


function articlee(i) {
	console.log("data", Data);
return (
	<div>

	   <header>
         <h1>Article</h1>
	   </header>
	   
       <main>
	   {Data.map((articlee, i))} => (
        	<ArticleCard key={i} articleData={articlee} />
        )}
	   </main>


	</div>
 )
}

export default ArticleListing;
