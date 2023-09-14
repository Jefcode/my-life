import PanelHeading from '../../components/common/PanelHeading';
import Row from '../../components/common/Row';
import Video from './components/Video';

import videos from '../../data/videos';
import { VideoIcon } from '../../icons';

const VideosPage = () => {
  return (
    <div>
      {/* Heading */}
      <div className='mt-7 mb-5'>
        <PanelHeading
          icon={VideoIcon}
          className='text-stone-800'
          title='Videos'
        />
      </div>

      {/* Videos Flex Container */}
      <div className='w-full h-[660px] overflow-x-hidden overflow-y-auto pr-3 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-primary'>
        <Row>
          {videos.map((video, idx) => (
            <div key={idx} className='w-full md:w-1/2 xl:w-1/3 p-3'>
              <Video data={video} />
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default VideosPage;
