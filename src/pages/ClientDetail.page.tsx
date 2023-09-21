import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';
import Panel from '../components/ui/Panel';
import PanelHeading from '../components/ui/PanelHeading';
import ClientJournal from '../features/clients/components/ClientJournal';
import Badge from '../features/clients/components/Badge';
import Modal from '../components/ui/Modal';
import AchievementsModal from '../features/clients/components/AchievementsModal';
import {
  AchievementsIcon,
  EditIcon,
  FilterActiveIcon,
  JournalIcon,
} from '../assets/icons';

function ClientDetailPage() {
  return (
    <>
      <PageTitle
        title='My Clients'
        breadcrumb={[{ title: 'My Clients' }, { title: 'Roya Simonetti' }]}
      />

      <div className='flex flex-wrap items-stretch gap-5 mb-5'>
        <div className='w-full xl:flex-[3]'>
          <Panel className='h-full'>
            <div className='w-full h-full flex flex-col sm:flex-row text-center sm:text-left gap-3 items-stretch'>
              <div className='flex flex-col items-center sm:flex-row gap-4'>
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
              <div className='sm:ml-auto border-x border-stone-200 divide-x divide-stone-200 flex'>
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

        {/* Achievements */}
        <div className='w-full xl:flex-[2]'>
          <Panel>
            <Panel.Header>
              <PanelHeading
                title='Client Achievements'
                icon={AchievementsIcon}
              />

              <Modal>
                <Modal.Button asChild>
                  <Button>View More</Button>
                </Modal.Button>

                <Modal.Content>
                  <Modal.Header
                    title='Client Achievements'
                    icon={AchievementsIcon}
                  />

                  {/* Content */}
                  <AchievementsModal />
                </Modal.Content>
              </Modal>
            </Panel.Header>

            {/* Flex Continer */}
            <div className='flex flex-col sm:flex-row sm:items-center gap-4 mt-4'>
              <div className='w-24 flex justify-center'>
                <Badge
                  className='w-20'
                  gradientColor1='#117DC1'
                  gradientColor2='#10A4DB'
                  gradientColor3='#AACB98'
                >
                  <Badge.Top className=''>
                    <Badge.Number className='text-lg'>10</Badge.Number>
                    <Badge.Title className='!text-[6px]'>Journals</Badge.Title>
                  </Badge.Top>
                  <Badge.Icon>
                    <EditIcon className='w-3 h-3' />
                  </Badge.Icon>
                </Badge>
              </div>

              <div>
                <p className='uppercase'>10 Journals</p>
                <p className='text-stone-400 text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscingt, sed do
                  eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit
                  amet, consectetur adipiscing.
                </p>
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Client Journal Panel */}
      <Panel>
        <Panel.Header>
          <PanelHeading title='Client Journal' icon={JournalIcon} />
          <Button icon={FilterActiveIcon}>Filter</Button>
        </Panel.Header>

        <ClientJournal />
      </Panel>
    </>
  );
}

export default ClientDetailPage;
