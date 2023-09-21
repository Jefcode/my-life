import PanelHeading from '../../components/ui/PanelHeading';
import Row from '../../components/ui/Row';
import Article from '../../features/media/components/Article';

import articles from '../../data/articles';
import { ArticleIcon } from '../../assets/icons';

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
          {articles.map((article, idx) => (
            <div key={idx} className='w-full md:w-1/2 xl:w-1/3 p-3'>
              <Article data={article} />
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ArticlesPage;
