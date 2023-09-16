import Input from '../../components/common/Input';
import MyTabs from '../../components/common/MyTabs';
import { EditIcon, TrashIcon } from '../../icons';
import classNames from '../../utils/classNames';

const ClientJournal = ({ expanded = false }: { expanded?: boolean }) => {
  return (
    <div className='mt-5'>
      <MyTabs defaultValue='story'>
        <MyTabs.List fullBorder>
          <MyTabs.Trigger value='story' text='Client Story' />
          <MyTabs.Trigger value='notes' text='Client Notes' />
          <MyTabs.Trigger value='info' text='Other Information' />
        </MyTabs.List>

        {/* Tabs Content Container */}
        <div className='mt-5'>
          <div
            className={classNames(
              'h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100 pr-3',
              expanded ? 'max-h-[calc(100vh-100px)]' : 'max-h-60'
            )}
          >
            {/* Client Story */}
            <MyTabs.Content value='story' className='text-stone-500 space-y-5'>
              <p>
                MyLife believes that unhealthy, repeated patterns of behaviour
                often stem from emotional loss and pain. The addiction process
                often begins as an attempt to soothe or numb that pain, only
                doing so temporarily. Obsessive preoccupation, secrecy, feelings
                of nagging emptiness, craving and impaired control then follow,
                frequently ruining relationships and one's own self-esteem.
                Financial losses and employment problems can quickly follow.
              </p>
              <p>
                By no means does everybody understand where this 'root cause'
                pain arises from. Through a combination of speaking to trained
                specialists and the features that the app offers to help you
                stay on track, we believe we can help.
              </p>
            </MyTabs.Content>
            <MyTabs.Content value='notes'>
              {/* Notes Flex Container */}
              <div className='flex flex-col gap-4 h-full'>
                {/* One Note */}
                <div className='w-full rounded-lg border border-stone-300 p-5'>
                  {/* Note Data */}
                  <p className='uppercase text-primary text-lg mb-2'>
                    today, may 15:
                  </p>

                  {/* Note Description */}
                  <div className='text-stone-500 mb-2'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Doctor / Action buttons */}
                  <div className='flex items-center justify-between'>
                    <span className='font-semibold text-stone-600 text-lg'>
                      Dr. <span>Maria Gott</span>
                    </span>

                    <div className='flex items-center gap-2'>
                      {/* Delete Button */}
                      <button className='rounded-full text-white bg-[#C62F79] w-6 h-6 flex items-center justify-center'>
                        <TrashIcon className='w-3.5 h-3.5' />
                      </button>

                      {/* Edit Button */}
                      <button className='rounded-full text-white bg-orange-500 w-6 h-6 flex items-center justify-center '>
                        <EditIcon className='w-3.5 h-3.5' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='w-full rounded-lg border border-stone-300 p-5'>
                  {/* Note Data */}
                  <p className='uppercase text-primary text-lg mb-2'>
                    today, may 15:
                  </p>

                  {/* Note Description */}
                  <div className='text-stone-500 mb-2'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Doctor / Action buttons */}
                  <div className='flex items-center justify-between'>
                    <span className='font-semibold text-stone-600 text-lg'>
                      Dr. <span>Maria Gott</span>
                    </span>

                    <div className='flex items-center gap-2'>
                      {/* Delete Button */}
                      <button className='rounded-full text-white bg-[#C62F79] w-6 h-6 flex items-center justify-center'>
                        <TrashIcon className='w-3.5 h-3.5' />
                      </button>

                      {/* Edit Button */}
                      <button className='rounded-full text-white bg-orange-500 w-6 h-6 flex items-center justify-center '>
                        <EditIcon className='w-3.5 h-3.5' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='w-full rounded-lg border border-stone-300 p-5'>
                  {/* Note Data */}
                  <p className='uppercase text-primary text-lg mb-2'>
                    today, may 15:
                  </p>

                  {/* Note Description */}
                  <div className='text-stone-500 mb-2'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Doctor / Action buttons */}
                  <div className='flex items-center justify-between'>
                    <span className='font-semibold text-stone-600 text-lg'>
                      Dr. <span>Maria Gott</span>
                    </span>

                    <div className='flex items-center gap-2'>
                      {/* Delete Button */}
                      <button className='rounded-full text-white bg-[#C62F79] w-6 h-6 flex items-center justify-center'>
                        <TrashIcon className='w-3.5 h-3.5' />
                      </button>

                      {/* Edit Button */}
                      <button className='rounded-full text-white bg-orange-500 w-6 h-6 flex items-center justify-center '>
                        <EditIcon className='w-3.5 h-3.5' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </MyTabs.Content>

            <MyTabs.Content value='info'>
              <div
                className={classNames(
                  'pt-5 flex gap-7 flex-col md:flex-row items-center',
                  expanded ? 'flex-wrap' : ''
                )}
              >
                <div className='w-full'>
                  <Input label='Date of birth' type='date' value='1989-12-05' />
                </div>
                <div className='w-full'>
                  <Input label='Location' value='Hampshire' />
                </div>
                <div className='w-full'>
                  <Input label='Preferred language' value='English (UK)' />
                </div>
              </div>
            </MyTabs.Content>
          </div>
        </div>
      </MyTabs>
    </div>
  );
};

export default ClientJournal;
