const BadgeWrapper = ({ size = 100 }: { size?: number }) => {
  const badgeSize = size - 10;
  const borderSize = size;

  return (
    <div className='relative inline-block'>
      <div className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <svg
          width={badgeSize}
          viewBox='0 0 128 146'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M61.5001 1.29982C63.0471 0.406656 64.9531 0.406657 66.5001 1.29982L124.844 34.9845C126.391 35.8777 127.344 37.5283 127.344 39.3146V106.684C127.344 108.47 126.391 110.121 124.844 111.014L66.5001 144.699C64.9531 145.592 63.0471 145.592 61.5001 144.699L3.15652 111.014C1.60952 110.121 0.656525 108.47 0.656525 106.684V39.3146C0.656525 37.5283 1.60952 35.8777 3.15652 34.9845L61.5001 1.29982Z'
            fill='url(#paint0_linear_41_3953)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_41_3953'
              x1='-9.14276'
              y1='71.5652'
              x2='137.143'
              y2='71.5652'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#117DC1' />
              <stop offset='0.484362' stopColor='#10A4DB' />
              <stop offset='1' stopColor='#AACB98' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div>
        <svg
          width={borderSize}
          viewBox='0 0 140 158'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M65 1.88675C68.094 0.100421 71.906 0.100423 75 1.88675L134.282 36.1132C137.376 37.8996 139.282 41.2008 139.282 44.7735V113.226C139.282 116.799 137.376 120.1 134.282 121.887L75 156.113C71.906 157.9 68.094 157.9 65 156.113L5.71796 121.887C2.62395 120.1 0.717964 116.799 0.717964 113.226V44.7735C0.717964 41.2008 2.62395 37.8996 5.71796 36.1132L65 1.88675Z'
            fill='#EDF8FF'
          />
        </svg>
      </div>
    </div>
  );
};

export default BadgeWrapper;
