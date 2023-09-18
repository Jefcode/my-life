import Button from '../../components/common/Button';
import PageTitle from '../../components/common/PageTitle';
import PanelHeading from '../../components/common/PanelHeading';
import Row from '../../components/common/Row';
import videos from '../../data/videos';
import { FilterActiveIcon, VideoActiveIcon } from '../../icons';
import Video from '../hub/components/Video';

const MyMediaPage = () => {
  return (
    <>
      <PageTitle
        title='My Media'
        breadcrumb={[
          { title: 'My Profile', href: '/profile' },
          { title: 'My Media' },
        ]}
      />

      {/* Content */}
      <div>
        {/* Filter buttons Flex Container */}
        <div className='flex flex-col md:flex-row flex-wrap gap-3 justify-between mb-5'>
          <div className='flex items-center flex-wrap gap-3'>
            <Button variant='primary'>All</Button>
            <Button>Insights</Button>
            <Button>Support</Button>
            <Button>Relapse</Button>
            <Button>Public Health</Button>
          </div>

          <div className='md:ml-auto'>
            <Button icon={FilterActiveIcon}>Filter</Button>
          </div>
        </div>

        {/* Heading */}
        <div className='mt-7 mb-5'>
          <PanelHeading
            icon={VideoActiveIcon}
            className='text-stone-800'
            title='My Records'
          />
        </div>

        <div className='w-full h-[660px] overflow-x-hidden overflow-y-auto pr-3 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-300'>
          <Row>
            {videos.map((video, idx) => (
              <div key={idx} className='w-full md:w-1/2 xl:w-1/3 p-3'>
                <Video data={video} />
              </div>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default MyMediaPage;
