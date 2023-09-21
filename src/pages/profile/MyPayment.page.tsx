import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Modal from '../../components/ui/Modal';
import PageTitle from '../../components/ui/PageTitle';
import Panel from '../../components/ui/Panel';
import PanelHeading from '../../components/ui/PanelHeading';
import Table from '../../components/ui/Table';
import {
  BankIcon,
  CheckRawIcon,
  CurrencyIcon,
  FilterActiveIcon,
} from '../../assets/icons';

const MyPaymentPage = () => {
  return (
    <>
      <PageTitle
        title='My Payment'
        breadcrumb={[
          { title: 'My Profile', href: '/profile' },
          { title: 'My Payment' },
        ]}
      />

      {/* Grid => 3 top panels */}
      <div className='grid grid-cols-6 gap-5 mb-5'>
        <div className='col-span-full md:col-span-3 2xl:col-span-2'>
          <div className='h-full bg-gradient-to-l from-gradientRed-100 via-primary to-gradientRed-200 rounded-2xl p-4 md:p-7 flex-1 text-white flex flex-col justify-between'>
            <div className='flex items-center gap-3 mb-12'>
              <div className='rounded-full flex items-center justify-center bg-white/30 w-10 h-10'>
                <CurrencyIcon className='w-4 h-4' />
              </div>
              <span className='text-xl'>Balance</span>
            </div>

            <div className='flex items-center justify-between gap-2 flex-wrap'>
              <div className='font-medium text-2xl'>
                <span className=''>£</span>
                <span>7,457</span>
              </div>
              <div className='font-normal text-sm'>
                <span>Process date: </span>
                <span>May 30/03/2023</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-full md:col-span-3 2xl:col-span-2'>
          <div className='h-full bg-gradient-to-l from-gradientBlue-100 via-gradientBlue-200 to-gradientBlue-300 rounded-2xl p-4 md:p-7 flex-1 text-white flex flex-col justify-between'>
            <div className='flex items-center gap-3 mb-12'>
              <div className='rounded-full flex items-center justify-center bg-white/30 w-10 h-10'>
                <CheckRawIcon className='w-4 h-4' />
              </div>
              <span className='text-xl'>Balance</span>
            </div>

            <div className='flex items-center justify-between gap-2 flex-wrap'>
              <div className='font-medium text-2xl'>
                <span className=''>£</span>
                <span>7,457</span>
              </div>
              <div className='font-normal text-sm'>
                <span>Process date: </span>
                <span>May 30/03/2023</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-6 2xl:col-span-2'>
          <div className='h-full bg-white rounded-2xl p-6 flex-1 flex flex-col justify-between'>
            <div className='flex flex-col xs:flex-row xs:items-center gap-2 mb-4 justify-between'>
              <PanelHeading
                icon={BankIcon}
                title='Bank accounts'
                subtitle='Default'
              />

              <Modal>
                <Modal.Button asChild>
                  <Button className='text-sm'>New Account</Button>
                </Modal.Button>

                <Modal.Content size='xs'>
                  <Modal.Header title='Add new bank account' icon={BankIcon} />

                  <form className='flex flex-col mt-7'>
                    <div className='mb-10'>
                      <Input label='Sort Code' value='000 000 000 0000' />
                    </div>
                    <div className='mb-8'>
                      <Input label='Account number' value='000 000 000 0000' />
                    </div>

                    <div className='flex items-center flex-col xs:flex-row justify-between gap-3'>
                      <Button full>Cancel</Button>
                      <Button variant='primary' full>
                        Save
                      </Button>
                    </div>
                  </form>
                </Modal.Content>
              </Modal>
            </div>
            <div className='text-stone-400 font-light uppercase'>
              <span>royal bank of scotland -</span> <span>xxxxxxx1234</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment history */}
      <Panel>
        <Panel.Header>
          <PanelHeading title='Payment history' />
          <Button icon={FilterActiveIcon}>Filter</Button>
        </Panel.Header>

        {/* Table */}
        <div className='mt-2 xl:max-h-[calc(100vh-440px)] overflow-y-auto scrollbar-thin scrollbar-track-stone-50 pr-3 scrollbar-thumb-stone-100'>
          <Table>
            <Table.Head>
              <Table.HeadColumn>Client</Table.HeadColumn>
              <Table.HeadColumn>Date</Table.HeadColumn>
              <Table.HeadColumn>Time</Table.HeadColumn>
              <Table.HeadColumn>Charge</Table.HeadColumn>
              <Table.HeadColumn>Type of call</Table.HeadColumn>
              <Table.HeadColumn>Duration</Table.HeadColumn>
              <Table.HeadColumn></Table.HeadColumn>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <Table.BodyColumn>
                  <div className='flex items-center gap-3'>
                    <div className='hidden sm:flex w-12 h-12 items-center'>
                      <img
                        src='/imgs/user-1.png'
                        className='w-full h-full rounded-full object-cover object-center'
                        alt="Client's image"
                      />
                    </div>
                    <div className='flex-1'>
                      <p className='font-semibold text-lg leading-tight text-stone-700'>
                        Martin Gott
                      </p>
                      <span className='text-primary'>Drugs</span>
                    </div>
                  </div>
                </Table.BodyColumn>
                <Table.BodyColumn>30/03/2023</Table.BodyColumn>
                <Table.BodyColumn>12:45</Table.BodyColumn>
                <Table.BodyColumn>
                  <span>£</span>70.00
                </Table.BodyColumn>
                <Table.BodyColumn>Appointment</Table.BodyColumn>
                <Table.BodyColumn>1 hour</Table.BodyColumn>
                <Table.BodyColumn>
                  <div className='flex items-center justify-end'>
                    <div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
                      <CheckRawIcon className='w-3 h-3' />
                    </div>
                  </div>
                </Table.BodyColumn>
              </Table.Row>
              <Table.Row>
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
                <Table.BodyColumn>30/03/2023</Table.BodyColumn>
                <Table.BodyColumn>12:45</Table.BodyColumn>
                <Table.BodyColumn>
                  <span>£</span>70.00
                </Table.BodyColumn>
                <Table.BodyColumn>Speak now</Table.BodyColumn>
                <Table.BodyColumn>1 hour</Table.BodyColumn>
                <Table.BodyColumn>
                  <div className='flex items-center justify-end'>
                    <div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
                      <CheckRawIcon className='w-3 h-3' />
                    </div>
                  </div>
                </Table.BodyColumn>
              </Table.Row>

              <Table.Row>
                <Table.BodyColumn>
                  <div className='flex items-center gap-3'>
                    <div className='hidden sm:flex w-12 h-12 items-center'>
                      <img
                        src='/imgs/user-1.png'
                        className='w-full h-full rounded-full object-cover object-center'
                        alt="Client's image"
                      />
                    </div>
                    <div className='flex-1'>
                      <p className='font-semibold text-lg leading-tight text-stone-700'>
                        Martin Gott
                      </p>
                      <span className='text-primary'>Drugs</span>
                    </div>
                  </div>
                </Table.BodyColumn>
                <Table.BodyColumn>30/03/2023</Table.BodyColumn>
                <Table.BodyColumn>12:45</Table.BodyColumn>
                <Table.BodyColumn>
                  <span>£</span>70.00
                </Table.BodyColumn>
                <Table.BodyColumn>Appointment</Table.BodyColumn>
                <Table.BodyColumn>1 hour</Table.BodyColumn>
                <Table.BodyColumn>
                  <div className='flex items-center justify-end'>
                    <div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
                      <CheckRawIcon className='w-3 h-3' />
                    </div>
                  </div>
                </Table.BodyColumn>
              </Table.Row>

              <Table.Row>
                <Table.BodyColumn>
                  <div className='flex items-center gap-3'>
                    <div className='hidden sm:flex w-12 h-12 items-center'>
                      <img
                        src='/imgs/user-1.png'
                        className='w-full h-full rounded-full object-cover object-center'
                        alt="Client's image"
                      />
                    </div>
                    <div className='flex-1'>
                      <p className='font-semibold text-lg leading-tight text-stone-700'>
                        Martin Gott
                      </p>
                      <span className='text-primary'>Drugs</span>
                    </div>
                  </div>
                </Table.BodyColumn>
                <Table.BodyColumn>30/03/2023</Table.BodyColumn>
                <Table.BodyColumn>12:45</Table.BodyColumn>
                <Table.BodyColumn>
                  <span>£</span>70.00
                </Table.BodyColumn>
                <Table.BodyColumn>Appointment</Table.BodyColumn>
                <Table.BodyColumn>1 hour</Table.BodyColumn>
                <Table.BodyColumn>
                  <div className='flex items-center justify-end'>
                    <div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
                      <CheckRawIcon className='w-3 h-3' />
                    </div>
                  </div>
                </Table.BodyColumn>
              </Table.Row>
              <Table.Row>
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
                <Table.BodyColumn>30/03/2023</Table.BodyColumn>
                <Table.BodyColumn>12:45</Table.BodyColumn>
                <Table.BodyColumn>
                  <span>£</span>70.00
                </Table.BodyColumn>
                <Table.BodyColumn>Speak now</Table.BodyColumn>
                <Table.BodyColumn>1 hour</Table.BodyColumn>
                <Table.BodyColumn>
                  <div className='flex items-center justify-end'>
                    <div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
                      <CheckRawIcon className='w-3 h-3' />
                    </div>
                  </div>
                </Table.BodyColumn>
              </Table.Row>

              <Table.Row>
                <Table.BodyColumn>
                  <div className='flex items-center gap-3'>
                    <div className='hidden sm:flex w-12 h-12 items-center'>
                      <img
                        src='/imgs/user-1.png'
                        className='w-full h-full rounded-full object-cover object-center'
                        alt="Client's image"
                      />
                    </div>
                    <div className='flex-1'>
                      <p className='font-semibold text-lg leading-tight text-stone-700'>
                        Martin Gott
                      </p>
                      <span className='text-primary'>Drugs</span>
                    </div>
                  </div>
                </Table.BodyColumn>
                <Table.BodyColumn>30/03/2023</Table.BodyColumn>
                <Table.BodyColumn>12:45</Table.BodyColumn>
                <Table.BodyColumn>
                  <span>£</span>70.00
                </Table.BodyColumn>
                <Table.BodyColumn>Appointment</Table.BodyColumn>
                <Table.BodyColumn>1 hour</Table.BodyColumn>
                <Table.BodyColumn>
                  <div className='flex items-center justify-end'>
                    <div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
                      <CheckRawIcon className='w-3 h-3' />
                    </div>
                  </div>
                </Table.BodyColumn>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Panel>
    </>
  );
};

export default MyPaymentPage;
