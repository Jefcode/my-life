import PanelHeading from '../../components/common/PanelHeading';
import Row from '../../components/common/Row';
import Article from './components/Article';

import { ReactComponent as ArticleIcon } from '../../icons/article.svg';

const ArticlesPage = () => {
  return (
    <div>
      {/* Heading */}
      <div className='mt-7 mb-5'>
        <PanelHeading
          icon={ArticleIcon}
          className='text-stone-700'
          title='Articles'
        />
      </div>

      {/* Videos Flex Container */}
      <div className='w-full h-[660px] overflow-x-hidden overflow-y-auto pr-3 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-primary'>
        <Row>
          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <Article
              image='/imgs/pod-thumb-1.jpg'
              title='Breathing technique for Anxiety'
              author='Dr. Shanice McDonald'
            />
          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <Article
              image='/imgs/vid-thumb-2.jpg'
              title='10 Ways to Manage Stress'
              live
              date='May 2, 2023'
            />
          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <Article
              image='/imgs/vid-thumb-3.jpg'
              title='10 Ways to Manage Stress'
              author='Dr. Shanice McDonald'
            />
          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <Article
              image='/imgs/vid-thumb-3.jpg'
              title='10 Ways to Manage Stress'
              author='Dr. Shanice McDonald'
            />
          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <Article
              image='/imgs/pod-thumb-1.jpg'
              title='10 Ways to Manage Stress'
              live
              date='May 2, 2023'
            />
          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <Article
              image='/imgs/vid-thumb-1.jpg'
              title='Breathing technique for Anxiety'
              author='Dr. Shanice McDonald'
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ArticlesPage;
