import Button from '../../../components/ui/Button';
import Table from '../../../components/ui/Table';

const ClientsTable = () => {
  return (
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
              <Button variant='tertiary' href='/clients/roya-simonetti'>
                View Profile
              </Button>
              <Button variant='primary' href='/dashboard/call/roya'>
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
  );
};

export default ClientsTable;
