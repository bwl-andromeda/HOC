import Video from "../Video/Video";
import Article from "../Article/Article";
import "./List.css";
import withLabel from "../hoc/hocElement";
import { listAtrVid } from "../Props/Props";


/**
 * метод возвращающий разметку видео и даты
 * @param { ItemElement[] } список видео и даты
 * @returns {JSX.Element} список видео
 */
function List(): JSX.Element {
    const ArticleWithLabel = withLabel(Article);
    const VideoWithLabel = withLabel(Video);
    return (
        <div className="container">
            {listAtrVid.map((item, index) => {
                if (item.type === 'video') {
                    return <VideoWithLabel key={index} {...item} />;
                } else if (item.type === 'article') {
                    return <ArticleWithLabel key={index} {...item} />;
                }
                return null;
            })}
        </div>
    )
}

export default List;
