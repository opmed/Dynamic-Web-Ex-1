import React from 'react';
import ArticleData from "../Component/Data";

function ArticleCard({article}) {
	return (
	<article className="ArticleCard">

	  <div className="ArticleCard_image">
        <img src={article.image.url} alt={article.image.alt}/>
    </div>

      <div className="ArticleCard_text">
       <h2>{article.title}</h2>
       <p>date</p>
       <p>{article.blurb}</p>
       <a href={'article/${article.id}'}>Read More</a>
      </div>

  </article>
)}

export default ArticleCard; 