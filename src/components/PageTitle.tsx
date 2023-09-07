/**
 * The title on page (NOT the browser title)
 * This should be used on every page;
 */

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className='flex items-center gap-3 mb-10'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
    </div>
  );
}

export default PageTitle;
