import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { createContext, useContext, useState } from 'react';
import classNames from '../../utils/classNames';

interface ITabContext {
  tab: string;
}
const TabContext = createContext<ITabContext>({ tab: '' });

const MyTabs = ({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: string;
}) => {
  const [tab, setTab] = useState<string>(defaultValue);

  return (
    <TabContext.Provider value={{ tab }}>
      <Tabs.Root value={tab} onValueChange={setTab}>
        {children}
      </Tabs.Root>
    </TabContext.Provider>
  );
};

function TabsList({
  children,
  fullBorder = false,
}: {
  children: React.ReactNode;
  fullBorder?: boolean;
}) {
  return (
    <Tabs.List
      className={classNames(
        'border-b border-stone-200 ',
        fullBorder ? '-mx-10 px-10' : ''
      )}
    >
      <div className='flex flex-col sm:flex-row items-center justify-between max-w-lg'>
        {children}
      </div>
    </Tabs.List>
  );
}

function TabsTrigger({ value, text }: { value: string; text: string }) {
  const { tab } = useContext(TabContext);

  return (
    <Tabs.Trigger
      className='relative py-2 cursor-pointer  transition font-medium data-[state=active]:text-primary'
      value={value}
    >
      {text}
      {tab === value && (
        <motion.div
          layoutId='active-border'
          className='bg-primary hidden sm:block h-1 w-full absolute bottom-0 left-0 -mb-0.5'
          style={{ borderRadius: '99999px' }}
        ></motion.div>
      )}
    </Tabs.Trigger>
  );
}

MyTabs.List = TabsList;
MyTabs.Trigger = TabsTrigger;
MyTabs.Content = Tabs.Content;

export default MyTabs;
