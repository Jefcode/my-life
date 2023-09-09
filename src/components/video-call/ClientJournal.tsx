import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as JournalIcon } from '../../icons/journal.svg';

import classNames from '../../utils/classNames';

type TabsName = 'story' | 'notes' | 'info';

const ClientJournal = () => {
  const [tab, setTab] = useState<TabsName>('story');

  return (
    <div>
      {/* Header */}
      <div className='flex items-center gap-3 mb-5'>
        <JournalIcon />
        <span className='font-semibold text-stone-800 text-xl'>
          Client Journal
        </span>
      </div>

      {/* Panels items */}
      <div className='flex items-center justify-between border-b border-stone-200'>
        <Tab
          title='Client Story'
          id='story'
          activeTab={tab}
          onClick={() => setTab('story')}
        />
        <Tab
          title='Client Notes'
          id='notes'
          activeTab={tab}
          onClick={() => setTab('notes')}
        />
        <Tab
          title='Other Information'
          id='info'
          activeTab={tab}
          onClick={() => setTab('info')}
        />
      </div>

      {/* Panels Data */}
      <div className='mt-8'>
        {/* Client Story */}
        <div className='text-stone-500 space-y-5'>
          <p>
            MyLife believes that unhealthy, repeated patterns of behaviour often
            stem from emotional loss and pain. The addiction process often
            begins as an attempt to soothe or numb that pain, only doing so
            temporarily. Obsessive preoccupation, secrecy, feelings of nagging
            emptiness, craving and impaired control then follow, frequently
            ruining relationships and one's own self-esteem. Financial losses
            and employment problems can quickly follow.
          </p>
          <p>
            By no means does everybody understand where this 'root cause' pain
            arises from. Through a combination of speaking to trained
            specialists and the features that the app offers to help you stay on
            track, we believe we can help.
          </p>
        </div>
      </div>
    </div>
  );
};

interface TabProps {
  title: string;
  id: string;
  activeTab: TabsName;
  onClick: () => void;
}

const Tab = ({ title, id, activeTab, onClick }: TabProps) => {
  return (
    <div
      className={classNames(
        'relative py-2 cursor-pointer  transition font-medium',
        activeTab === id
          ? 'text-primary'
          : 'text-stone-600 hover:text-stone-800'
      )}
      onClick={onClick}
    >
      {title}
      {/* Active panel has this */}
      {activeTab === id && (
        <motion.div
          layoutId='active-border'
          className='bg-primary h-1 w-full absolute bottom-0 left-0 -mb-0.5'
          style={{ borderRadius: '99999px' }}
        ></motion.div>
      )}
    </div>
  );
};

export default ClientJournal;
