import Button from '../../components/common/Button';
import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';
import { ReactComponent as AchievementsIcon } from '../../icons/achievements.svg';
import { ReactComponent as JournalIcon } from '../../icons/journal.svg';
import { ReactComponent as FilterIcon } from '../../icons/filter-active.svg';
import PanelHeading from '../../components/common/PanelHeading';
import ClientJournal from '../../features/client/ClientJournal';
import BadgeWrapper from '../../components/badge/Badge';

function ClientDetailPage() {
  return (
    <>
      <PageTitle
        title='My Clients'
        breadcrumb={[{ title: 'My Clients' }, { title: 'Roya Simonetti' }]}
      />

      <div className='flex items-stretch gap-5 mb-5'>
        <div className='flex-[3]'>
          <Panel>
            <div className='flex items-center'>
              <div className='flex items-center gap-4'>
                <img
                  src='/imgs/user-1.png'
                  alt='Client Photo'
                  className='w-24 h-24 rounded-full object-cover'
                />

                <div className='flex flex-col gap-1'>
                  <span className='font-medium text-xl'>Roya Simonetti</span>
                  <span className='text-primary'>Drugs</span>
                </div>
              </div>
              {/* Track/Achievement Box */}
              <div className='ml-auto border-x border-stone-200 divide-x divide-stone-200 flex'>
                {/* Track */}
                <div className='w-1/2 h-full flex flex-col justify-center items-center p-4'>
                  <span className='text-primary font-semibold text-2xl'>
                    48
                  </span>
                  <span className='text-sm'>Days on Track</span>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center items-center p-4'>
                  <span className='text-primary font-semibold text-2xl'>4</span>
                  <span className='text-sm'>Achievements</span>
                </div>
              </div>
            </div>
          </Panel>
        </div>
        <div className='flex-[2]'>
          <Panel>
            <Panel.Header>
              <PanelHeading
                title='Client Achievements'
                icon={AchievementsIcon}
              />
              <Button>View More</Button>
            </Panel.Header>

            <BadgeWrapper />
          </Panel>
        </div>
      </div>

      {/* Client Journal Panel */}
      <Panel>
        <Panel.Header>
          <PanelHeading title='Client Journal' icon={JournalIcon} />
          <Button icon={FilterIcon}>Filter</Button>
        </Panel.Header>

        <ClientJournal />
      </Panel>
    </>
  );
}

export default ClientDetailPage;
