import { useState } from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';

import PageTitle from '../ui/PageTitle';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { FilterActiveIcon } from '../../assets/icons';
import CreateMediaModal from '../../features/media/components/CreateMediaModal';

const HubLayout = () => {
  const podcastMatch = useMatch('/hub/podcasts');
  const articlesMatch = useMatch('/hub/articles');

  const [tab, setTab] = useState<string>(() => {
    // Setting the value of the tab based on url
    if (podcastMatch) return 'podcasts';
    else if (articlesMatch) return 'articles';
    else return 'videos';
  });

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
          <Modal>
            <Modal.Button asChild>
              <Button
                variant='primary'
                className='ml-auto text-sm !px-10 !rounded-lg mb-2 w-full xs:w-auto md:translate-y-5'
              >
                New Post
              </Button>
            </Modal.Button>

            <CreateMediaModal />
          </Modal>

          <div className='flex items-end justify-between border-b border-stone-200'>
            <Tabs.List className='flex items-center gap-14 text-stone-600 max-w-sm'>
              <Tabs.Trigger
                className='relative cursor-pointer  transition font-medium data-[state=active]:text-primary'
                value='videos'
              >
                <Link className='inline-block h-full py-2' to='videos'>
                  Videos
                </Link>

                {tab === 'videos' && (
                  <motion.div
                    layoutId='active-border'
                    className='bg-primary h-1 w-full absolute bottom-0 left-0 -mb-0.5'
                    style={{ borderRadius: '99999px' }}
                  ></motion.div>
                )}
              </Tabs.Trigger>
              <Tabs.Trigger
                className='relative cursor-pointer  transition font-medium data-[state=active]:text-primary'
                value='podcasts'
              >
                <Link className='inline-block h-full py-2' to='podcasts'>
                  Podcasts
                </Link>
                {tab === 'podcasts' && (
                  <motion.div
                    layoutId='active-border'
                    className='bg-primary h-1 w-full absolute bottom-0 left-0 -mb-0.5'
                    style={{ borderRadius: '99999px' }}
                  ></motion.div>
                )}
              </Tabs.Trigger>
              <Tabs.Trigger
                className='relative cursor-pointer  transition font-medium data-[state=active]:text-primary'
                value='articles'
              >
                <Link className='inline-block h-full py-2' to='articles'>
                  Articles
                </Link>
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
            <Button icon={FilterActiveIcon}>Filter</Button>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default HubLayout;
