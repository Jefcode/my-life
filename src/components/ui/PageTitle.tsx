/**
 * The title on page (NOT the browser title)
 * This should be used on every page;
 */

import { Link } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  breadcrumb?: breadcrumb[];
}

interface breadcrumb {
  title: string;
  href?: string;
}

function PageTitle({ title, breadcrumb = [] }: PageTitleProps) {
  return (
    <div className='flex flex-col gap-2 mb-5'>
      <h1 className='text-2xl font-semibold leading-tight'>{title}</h1>

      {/* Breadcrumb */}
      <div className='flex items-center text-sm flex-wrap max-w-[300px] xs:max-w-none whitespace-nowrap gap-2 text-stone-500 '>
        {breadcrumb.length > 0 && (
          <div className='flex items-center gap-1 after:font-icon after:content-["\e904"] last:after:hidden'>
            <Link to='/'>Dashboard</Link>
          </div>
        )}

        {breadcrumb.map((item, idx) => (
          <div
            key={idx}
            className='flex items-center gap-1 after:font-icon after:content-["\e904"] last:after:hidden'
          >
            {item.href ? (
              <Link to={item.href}>{item.title}</Link>
            ) : (
              <span>{item.title}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageTitle;
