import PanelHeading from '../../components/common/PanelHeading';
import Row from '../../components/common/Row';
import Article from './components/Article';

import { ReactComponent as ArticleIcon } from '../../icons/article.svg';
import articles from '../../data/articles';

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