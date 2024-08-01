import './VideoList.css';
import Video from '../Video/Video';
import { VideoItem } from '../VideoProps/VideoProps';


/**
 * @interface VideoListProps
 */
interface VideoListProps {
    list: VideoItem[]
}

/**
 * метод возвращающий разметку видео и даты
 * @param {{ list: VideoItem[] }} list - передаём список видео и даты
 * @returns {JSX.Element} список видео
 */
function VideoList({ list }: VideoListProps): JSX.Element {
    return (
        <div className="container">
            <div className="list-container">
                {list.map((item, index) => (
                    <Video key={index} url={item.url} date={item.date} />
                ))} 
            </div>
        </div>
    )
}

export default VideoList;

// return 