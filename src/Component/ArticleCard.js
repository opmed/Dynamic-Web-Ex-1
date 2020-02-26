import React from 'react';

function ArticleCard({articleData}) {
	return (
	
	<article className="ArticleCard">

	  <div className="articleCard_image">
        <img src={articleData.image.url} alt={articleData.image.alt} />
    </div>

      <div className="articleCard_text">
       <h2>{articleData.title}</h2>
       <p>date</p>
       <p>{articleData.blurb}</p>
       <a href="">Read More</a>
      </div>

  </article>
)}

export default ArticleCard; 