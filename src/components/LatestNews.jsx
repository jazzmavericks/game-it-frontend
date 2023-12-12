import '../components/LatestNews.css';

function LatestNews() {
    return (
        <div className="news-container">
            <div className="news-card">
            <div className="news-content">
                <div className="left-column">
                <h2>GAMECHANGER NEWS UPDATE</h2>
                <h6>January 1, 2023 by John Doe</h6>
                <p>
              Exciting revelations in the gaming world reshape industry standards, promising an unprecedented future for gamers worldwide.
            </p>
                <button className="read-more-btn">Read More</button>
                </div>
                <div className="right-column">
                <img src="https://i.ytimg.com/vi/YqDtflTL9JY/maxresdefault.jpg" alt="Story 1" />
                </div>
            </div>
            </div>

            <div className="news-card">
            <div className="news-content">
                <div className="left-column">
                <h2>BETHESDA MAKING WAVES ONLINE</h2>
                <h6>January 1, 2023 by John Doe</h6>
                <p>
              Bethesda's latest online endeavors captivate gaming communities, hinting at a groundbreaking shift in interactive experiences.
            </p>
                <button className="read-more-btn">Read More</button>
                </div>
                <div className="right-column">
                <img src="https://i.ytimg.com/vi/e85YQwZZb_w/sddefault.jpg" alt="Story 1" />
                </div>
            </div>
            </div>

            <div className="news-card">
            <div className="news-content">
                <div className="left-column">
                <h2>STAR WARS OUTLAWS TRAILER DROPS</h2>
                <h6>January 1, 2023 by John Doe</h6>
                <p>
              The latest Star Wars Outlaws trailer ignites fan excitement, teasing an epic saga that promises to redefine the franchise.
            </p>
                <button className="read-more-btn">Read More</button>
                </div>
                <div className="right-column">
                <img src="https://images.immediate.co.uk/production/volatile/sites/3/2023/06/Star-Wars-Outlaws-release-date-48d7396.jpg?quality=90&fit=700,466" alt="Story 1" />
                </div>
            </div>
            </div>

            <div className="news-card">
            <div className="news-content">
                <div className="left-column">
                <h2>THE RETRO VIDEO GAMES MAKING A COMEBACK</h2>
                <h6>January 1, 2023 by John Doe</h6>
                <p>
              Retro video games surge back into the spotlight, rekindling nostalgia and introducing classic gaming to a new generation.
            </p>
                <button className="read-more-btn">Read More</button>
                </div>
                <div className="right-column">
                <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article7214078.ece/ALTERNATES/s615/retro-games-comp.jpg" alt="Story 1" />
                </div>
            </div>
            </div>

        </div>
    );
  }

export default LatestNews;