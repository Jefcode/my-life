import { Link } from 'react-router-dom';
import { LogoIcon, LogoTextIcon } from '../assets/icons';

function NotFoundPage() {
  return (
    <div className='py-32'>
      <div className='max-w-md mx-auto px-5 flex flex-col space-y-10 items-center text-center'>
        {/* Icon */}
        <div className='flex items-center gap-5 text-primary'>
          <LogoIcon className='w-16 h-16' />
          <LogoTextIcon className='w-32 h-20' />
        </div>

        {/* Title */}
        <h1 className='text-5xl font-heading font-bold font-jakarta text-primary '>
          404
        </h1>

        <p>
          Sorry! The page your are looking for was not found. This can be due to
          typing mistake or because the page has been removed.
        </p>

        {/* Go Back to Home Page */}
        <Link
          to='/dashboard'
          className='bg-primary text-white px-14 py-4 hover:bg-danger transition'
        >
          Go back to dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
