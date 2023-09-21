import PanelHeading from '../../components/ui/PanelHeading';
import Row from '../../components/ui/Row';

import videos from '../../data/videos';
import { VideoActiveIcon } from '../../assets/icons';
import Video from '../../features/media/components/Video';

const VideosPage = () => {
  return (
    <div>
      {/* Heading */}
      <div className='mt-7 mb-5'>
        <PanelHeading
          icon={VideoActiveIcon}
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
