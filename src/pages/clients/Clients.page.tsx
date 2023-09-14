import Button from '../../components/common/Button';
import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';
import PanelHeading from '../../components/common/PanelHeading';
import Table from '../../components/common/Table';
import { FilterIcon } from '../../icons';

const ClientsPage = () => {
  return (
    <>
      <PageTitle title='My Clients' breadcrumb={[{ title: 'My Clients' }]} />

      <Panel className='mb-5'>
        <Panel.Header>
          <PanelHeading title='Regular Clients' />
        </Panel.Header>

        <Table>
          <Table.Head>
            <Table.HeadColumn>Client</Table.HeadColumn>
            <Table.HeadColumn>Last appointment</Table.HeadColumn>
            <Table.HeadColumn>Next Call Date</Table.HeadColumn>
            <Table.HeadColumn></Table.HeadColumn>
          </Table.Head>
          <Table.Body>
            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-1.png'
                      className='w-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary'>Join Call</Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>

            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-2.jpg'
                      className='w-full h-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary'>Join Call</Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>
            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-3.jpg'
                      className='w-full h-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary' disabled>
                    Join Call
                  </Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>
            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-2.jpg'
                      className='w-full h-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary' disabled>
                    Join Call
                  </Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>

      <Panel>
        <Panel.Header>
          <PanelHeading title='All Clients' />

          <Button icon={FilterIcon}>Filter</Button>
        </Panel.Header>

        <Table>
          <Table.Head>
            <Table.HeadColumn>Client</Table.HeadColumn>
            <Table.HeadColumn>Last appointment</Table.HeadColumn>
            <Table.HeadColumn>Next Call Date</Table.HeadColumn>
            <Table.HeadColumn></Table.HeadColumn>
          </Table.Head>
          <Table.Body>
            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-1.png'
                      className='w-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary'>Join Call</Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>

            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-2.jpg'
                      className='w-full h-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary'>Join Call</Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>
            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-3.jpg'
                      className='w-full h-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary' disabled>
                    Join Call
                  </Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>
            <Table.Row className='text-stone-400'>
              <Table.BodyColumn>
                <div className='flex items-center gap-3'>
                  <div className='hidden sm:flex w-12 h-12 items-center'>
                    <img
                      src='/imgs/user-2.jpg'
                      className='w-full h-full rounded-full object-cover object-center'
                      alt="Client's image"
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-semibold text-lg leading-tight text-stone-700'>
                      Roya Simonetti
                    </p>
                    <span className='text-primary'>Drugs</span>
                  </div>
                </div>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>2 Days ago</span>
              </Table.BodyColumn>

              <Table.BodyColumn>
                <span>May 17</span> <span>(12:00 - 13:30)</span>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <div className='flex items-center gap-2 justify-end'>
                  <Button variant='tertiary'>View Profile</Button>
                  <Button variant='primary' disabled>
                    Join Call
                  </Button>
                </div>
              </Table.BodyColumn>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
    </>
  );
};

export default ClientsPage;
