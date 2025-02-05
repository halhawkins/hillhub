import { FC, useEffect, useState } from "react";
import { fetchAndParseRSS } from "../APIs/NewsFeedAPI";
import placeholder from "../assets/hillhub-placeholder.png"
import './NewsFeed.css';
interface IArticle {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
    category: string; 
    // Add more properties as needed🐈🍕🐁🐈
}
const NewsFeed: FC = () => {
    const [articles, setArticles] = useState<IArticle[] | null>(null);
    const corsProxy = process.env.REACT_APP_CORS_PROXY || '';

    useEffect(() => {
        // Fetch news articles from an API
        const fetchNews = async () => {
            // const data = await fetchAndParseRSS('https://www.realclearpolitics.com/index.xml');
            const data = await fetchAndParseRSS(process.env.NODE_ENV === 'development' ? "https://cors-anywhere.herokuapp.com/https://rss.politico.com/politics-news.xml":`https://rss.politico.com/politics-news.xml`);

            console.log(data);
            if (data) {
                const articlesWithCategory = data.map(article => ({
                    ...article,
                    category: 'Politics', // Default category
                    title: article.title || '',
                    link: article.link || '',
                    description: article.description || '',
                }));
                setArticles(articlesWithCategory);
                console.log(articlesWithCategory);
            }
        }

        fetchNews();
        // Clean up the effect when the component unmounts
        return () => {
            // Cleanup code here
        }
    }, []);

    const openStory = (url: string) => {
        // Open the article in a new tab or window
        window.open(url, '_blank');
    }

    return (
        <div className="news-feed">
            {articles && articles.map((article, index) => (
                <div className="news-item" key={index}>
                    <div className="thumbnail-container">
                        {article.thumbnail === 'No image' ? 
                        <img src={placeholder} style={{width: "250px", height: "167px", opacity: "0.5"}} alt="thumbnail"/> : 
                        <img style={{height: "167px"}} src={article.thumbnail} alt={article.title} />}
                    </div>
                    <div className="content-container" onClick={() => openStory(article.link)}>
                        <h3 className="article-title">{article.title}</h3>
                        {/* <a href={article.link}> */}
                        {article.description.length > 170 ? article.description.substring(0, 170) + '...' : article.description}
                        {/* </a> */}
                        {/* <p>Category: {article.category}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
}


export default NewsFeed;