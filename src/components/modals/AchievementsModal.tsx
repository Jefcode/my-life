import { ClockIcon, EditIcon } from '../../icons';
import Badge from '../badge/Badge';

const AchievementsModal = () => {
  return (
    <div>
      {/* Top Part */}
      <div className='py-10 px-6 border-b border-stone-200'>
        <div className='flex flex-col items-start md:flex-row md:items-center gap-8'>
          <Badge
            className='w-44'
            gradientColor1='#117DC1'
            gradientColor2='#10A4DB'
            gradientColor3='#AACB98'
          >
            <Badge.Top>
              <Badge.Number className='text-4xl'>10</Badge.Number>
              <Badge.Title className='font-light'>Journals</Badge.Title>
            </Badge.Top>
            <Badge.Icon>
              <EditIcon className='w-6 h-6' />
            </Badge.Icon>
          </Badge>

          <div className='flex-1'>
            <p className='uppercase text-xl mb-2'>10 Journals</p>
            <p className='text-stone-400 text-base mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscingt, sed do
              eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.
            </p>

            {/* Tags Flex Container */}
            <div className='flex flex-wrap items-center gap-2'>
              <div className='rounded-lg px-3 py-2 border border-stone-300 flex items-center justify-center gap-1 text-stone-800'>
                <span>🤯</span>
                <span>Stress</span>
              </div>
              <div className='rounded-lg px-3 py-2 border border-stone-300 flex items-center justify-center gap-1 text-stone-800'>
                <span>🥱</span>
                <span>Tiredness</span>
              </div>
              <div className='rounded-lg px-3 py-2 border border-stone-300 flex items-center justify-center gap-1 text-stone-800'>
                <span>🍽️</span>
                <span>Hunger</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className='py-8 pb-0 px-6'>
        <div className='text-center max-w-sm mx-auto mb-5'>
          <h4 className='font-medium text-2xl text-stone-800 mb-2'>
            Last Achievements
          </h4>
          <p className='text-stone-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore..
          </p>
        </div>

        {/* Badges Flex Containe */}
        <div className='flex flex-wrap items-center justify-center'>
          <div className='flex justify-center'>
            <Badge
              gradientColor1='#4D458D'
              gradientColor2='#7962A8'
              gradientColor3='#EEAEC9'
              className='!w-28'
            >
              <Badge.Top className='-mt-1'>
                <Badge.Number className='!text-2xl'>30</Badge.Number>
                <Badge.Title className='font-light -mt-1 !text-[8px]'>
                  Journals
                </Badge.Title>
              </Badge.Top>
              <Badge.Icon>
                <EditIcon className='w-4 h-4' />
              </Badge.Icon>
            </Badge>
          </div>

          <div className='flex justify-center'>
            <Badge
              gradientColor1='#C62F79'
              gradientColor2='#F07F3C'
              gradientColor3='#ECB934'
              className='!w-28'
            >
              <Badge.Top className='-mt-1'>
                <Badge.Number className='!text-2xl'>10</Badge.Number>
                <Badge.Title className='font-light -mt-1 !text-[8px]'>
                  Journals
                </Badge.Title>
              </Badge.Top>
              <Badge.Icon>
                <ClockIcon className='w-4 h-4' />
              </Badge.Icon>
            </Badge>
          </div>
          <div className='flex justify-center'>
            <Badge
              gradientColor1='#117DC1'
              gradientColor2='#10A4DB'
              gradientColor3='#AACB98'
              className='!w-28'
            >
              <Badge.Top className='-mt-1'>
                <Badge.Number className='!text-2xl'>50</Badge.Number>
                <Badge.Title className='font-light -mt-1 !text-[8px]'>
                  Journals
                </Badge.Title>
              </Badge.Top>
              <Badge.Icon>
                <ClockIcon className='w-4 h-4' />
              </Badge.Icon>
            </Badge>
          </div>
          <div className='flex justify-center'>
            <Badge
              gradientColor1='#4D458D'
              gradientColor2='#7962A8'
              gradientColor3='#EEAEC9'
              className='!w-28'
            >
              <Badge.Top className='-mt-1'>
                <Badge.Number className='!text-2xl'>20</Badge.Number>
                <Badge.Title className='font-light -mt-1 !text-[8px]'>
                  Journals
                </Badge.Title>
              </Badge.Top>
              <Badge.Icon>
                <ClockIcon className='w-4 h-4' />
              </Badge.Icon>
            </Badge>
          </div>

          <div className='flex justify-center'>
            <Badge
              gradientColor1='#C62F79'
              gradientColor2='#EA515E'
              gradientColor3='#F07F3C'
              className='!w-28'
            >
              <Badge.Top className='-mt-1'>
                <Badge.Number className='!text-2xl'>10</Badge.Number>
                <Badge.Title className='font-light -mt-1 !text-[8px]'>
                  Journals
                </Badge.Title>
              </Badge.Top>
              <Badge.Icon>
                <ClockIcon className='w-4 h-4' />
              </Badge.Icon>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;
