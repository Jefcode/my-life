import PanelHeading from '../../components/common/PanelHeading';
import Row from '../../components/common/Row';
import Podcast from './components/Podcast';

import podcasts from '../../data/podcasts';
import { PodcastIcon } from '../../icons';

const PodcastsPage = () => {
  return (
    <div>
      {/* Heading */}
      <div className='mt-7 mb-5'>
        <PanelHeading
          icon={PodcastIcon}
          className='text-stone-700'
          title='Podcast'
        />
      </div>

      {/* Videos Flex Container */}
      <div className='w-full h-[660px] overflow-x-hidden overflow-y-auto pr-3 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-primary'>
        <Row>
          {podcasts.map((podcast, idx) => (
            <div key={idx} className='w-full md:w-1/2 xl:w-1/3 p-3'>
              <Podcast data={podcast} />
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PodcastsPage;
