import { Link, Outlet } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';

import { useState } from 'react';
import { motion } from 'framer-motion';

import PageTitle from '../../components/common/PageTitle';
import Button from '../../components/common/Button';
import { ReactComponent as FilterIcon } from '../../icons/filter-active.svg';

const HubLayout = () => {
  const [tab, setTab] = useState<string>('videos');

  return (
    <>
      <PageTitle
        title='The Hub'
        breadcrumb={[
          { title: 'The Hub', href: '/hub' },
          { title: 'Videos', href: '/hub/videos' },
        ]}
      />

      <div>
        {/* Tab Flex Container */}
        <Tabs.Root className='mb-5' value={tab} onValueChange={setTab}>
          <Button
            variant='primary'
            className='ml-auto text-sm !px-10 !rounded-lg mb-2 w-full xs:w-auto md:-mb-5'
          >
            New Post
          </Button>

          <div className='flex items-end justify-between border-b border-stone-200'>
            <Tabs.List className='flex items-center gap-14 text-stone-600 max-w-sm'>
              <Tabs.Trigger
                className='relative py-2 cursor-pointer  transition font-medium data-[state=active]:text-primary'
                value='videos'
              >
                <Link to='videos'>Videos</Link>

                {tab === 'videos' && (
                  <motion.div
                    layoutId='active-border'
                    className='bg-primary h-1 w-full absolute bottom-0 left-0 -mb-0.5'
                    style={{ borderRadius: '99999px' }}
                  ></motion.div>
                )}
              </Tabs.Trigger>
              <Tabs.Trigger
                className='relative py-2 cursor-pointer  transition font-medium data-[state=active]:text-primary'
                value='podcasts'
              >
                <Link to='podcasts'>Podcasts</Link>
                {tab === 'podcasts' && (
                  <motion.div
                    layoutId='active-border'
                    className='bg-primary h-1 w-full absolute bottom-0 left-0 -mb-0.5'
                    style={{ borderRadius: '99999px' }}
                  ></motion.div>
                )}
              </Tabs.Trigger>
              <Tabs.Trigger
                className='relative py-2 cursor-pointer  transition font-medium data-[state=active]:text-primary'
                value='articles'
              >
                <Link to='articles'>Articles</Link>
                {tab === 'articles' && (
                  <motion.div
                    layoutId='active-border'
                    className='bg-primary h-1 w-full absolute bottom-0 left-0 -mb-0.5'
                    style={{ borderRadius: '99999px' }}
                  ></motion.div>
                )}
              </Tabs.Trigger>
            </Tabs.List>
          </div>
        </Tabs.Root>

        {/* Filter Buttons Flex Container */}
        <div className='flex flex-col md:flex-row flex-wrap gap-3 justify-between mb-5'>
          <div className='flex items-center flex-wrap gap-3'>
            <Button variant='primary'>All</Button>
            <Button>Insights</Button>
            <Button>Support</Button>
            <Button>Relapse</Button>
            <Button>Public Health</Button>
          </div>

          <div className='md:ml-auto'>
            <Button icon={FilterIcon}>Filter</Button>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default HubLayout;
