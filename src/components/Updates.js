import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Updates() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=parkinson%27s%20disease&apiKey=52fefc64fd0b41c3b852000d20eec1b0');
                const data = await response.json();
                
                // Filter out articles with the title "[Removed]"
                const filteredNews = data.articles.filter(article => article.title !== "[Removed]");

                // Replace missing images with a placeholder image
                const newsWithImages = filteredNews.map(article => ({
                    ...article,
                    urlToImage: article.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot2rV5Gj-f3l1OqSc7u7NCUMW3Fr3moB9-w&s'
                }));

                setNews(newsWithImages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-gray-200 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">Parkinson's Disease News Updates</h1>
                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {news.map((article, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:shadow-xl hover:-translate-y-1 relative"
                                >
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-60 object-cover object-center transition duration-300 transform hover:scale-105"
                                    />
                                    <div className="absolute inset-0 "></div>
                                    <div className="p-4 relative z-10 bg-gradient-to-t from-transparent to-gray-300 opacity-90">
                                        <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                                        <p className="text-gray-700">{article.description}</p>
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 mt-2 block hover:underline"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Updates;
