import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import DATA from "../Component/Data";

function Article() {
  const [article, setArticle] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let dataArray = DATA.filter(article => article.id === id)
    setArticle(dataArray[0]);
  }, [id]);


  return (
  <div>
    <header
      className="articleheader"
      style = {{
        backgrounndImage: `url(${article.image ? article.image.url: ""})`
      }}>

      <div className="articleHeaderWrapper">
           <h1>{article.title}</h1>
           <p>(article.publishDate)</p>
           <p>(article.blurb)</p>
      </div>
    </header>
    <main className="articleContent">
       <div className="articleContentWrapper">
          {article.articleText && article.articleText.map((text, i) => (
            <p key={i}>{text.data}</p>
          ))}
       </div>
    </main>
  </div>
  )
}

export default Article;