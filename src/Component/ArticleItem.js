import React from "react";

function ArticleItem({data, type}) {
	switch(type){
		case "p":
		return <p>{data}</p>;
		case "h2":
		return <h2>{data}</h2>;
		default:
		return <p>{data}</p>;
	}
}

export default ArticleItem;