import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recomended from '../../Components/Recomended/Recomended';
import './Video.css';

const Video = () => {
    return (
        <div className='play-container'>
            <PlayVideo></PlayVideo>
            <Recomended></Recomended>
            
        </div>
    );
};

export default Video;