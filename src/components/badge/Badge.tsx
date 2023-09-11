/**
 * This Compnenet is the Badge
 * How to use:
 * <Badge>
 *   <Badge.Top>
 *     <Badge.Number>10</Badge.Number>
 *     <Badge.Title>10</Badge.Title>
 *   </Badge.Top>
 *
 *   <BadgeIcon>
 *     <Icon />
 *   </BadgeIcon>
 * </Badge>
 */

import classNames from '../../utils/classNames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface BadgeProps extends Props {
  gradientColor1: string;
  gradientColor2: string;
  gradientColor3: string;
}

const Badge = ({
  className = '',
  children,
  gradientColor1,
  gradientColor2,
  gradientColor3,
}: BadgeProps) => {
  // Generating random names for gradients
  const gradientId = `${Math.random() + Date.now()}`;

  return (
    <div className={classNames('relative inline-block w-40', className)}>
      <svg
        width='160'
        height='160'
        viewBox='0 0 160 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
      >
        {/* Border */}
        <path
          d='M75 2.88675C78.094 1.10042 81.906 1.10042 85 2.88675L144.282 37.1132C147.376 38.8996 149.282 42.2008 149.282 45.7735V114.226C149.282 117.799 147.376 121.1 144.282 122.887L85 157.113C81.906 158.9 78.094 158.9 75 157.113L15.718 122.887C12.6239 121.1 10.718 117.799 10.718 114.226V45.7735C10.718 42.2008 12.624 38.8996 15.718 37.1132L75 2.88675Z'
          fill={`url(#${gradientId})`}
          fillOpacity={0.2}
        />
        {/* Hexegan Shape */}
        <path
          d='M77.5001 8.29982C79.0471 7.40666 80.9531 7.40666 82.5001 8.29982L140.844 41.9845C142.391 42.8777 143.344 44.5283 143.344 46.3146V113.684C143.344 115.47 142.391 117.121 140.844 118.014L82.5001 151.699C80.9531 152.592 79.0471 152.592 77.5001 151.699L19.1565 118.014C17.6095 117.121 16.6565 115.47 16.6565 113.684V46.3146C16.6565 44.5283 17.6095 42.8777 19.1565 41.9845L77.5001 8.29982Z'
          fill={`url(#${gradientId})`}
        />

        {/* Bookmark shape */}
        <path
          d='M44.5714 106.732V27.2962L77.4981 8.29983C79.0461 7.40673 80.9531 7.40779 82.5002 8.30262L114.286 26.6878V106.594C114.286 108.182 112.524 109.137 111.194 108.27L83.3061 90.0924C81.6953 89.0424 79.6252 89.0092 77.9815 90.0068L47.6091 108.441C46.2762 109.25 44.5714 108.291 44.5714 106.732Z'
          fill='url(#paint1_linear_393_4)'
        />

        {/* Gradients */}
        <defs>
          {/* Hexegan Gradient */}
          <linearGradient
            id={gradientId}
            x1='-9.14276'
            y1='71.5652'
            x2='137.143'
            y2='71.5652'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={gradientColor1} />
            <stop offset='0.484362' stopColor={gradientColor2} />
            <stop offset='1' stopColor={gradientColor3} />
          </linearGradient>

          {/* Bookmark gradient (Fixed) */}
          <linearGradient
            id='paint1_linear_393_4'
            x1='79.4285'
            y1='6.85645'
            x2='79.4285'
            y2='110.285'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.33' />
            <stop offset='1' stopColor='white' stopOpacity='0.55' />
          </linearGradient>
        </defs>
      </svg>

      {children}
    </div>
  );
};

// The Top Wrapper: Number and Top should be in this tag
function BadgeTop({ children, className = '' }: Props) {
  return (
    <div
      className={classNames(
        'absolute top-[20%] left-1/2 -translate-x-1/2 z-10 text-white text-center flex flex-col',
        className
      )}
    >
      {children}
    </div>
  );
}

// Number of days
function BadgeNumber({ children, className = '' }: Props) {
  return (
    <span className={classNames('font-bold text-3xl leading-none', className)}>
      {children}
    </span>
  );
}

// The title that aprears on top
function BadgeTitle({ children, className = '' }: Props) {
  return (
    <span className={classNames('uppercase text-xs', className)}>
      {children}
    </span>
  );
}

// The Bottom Icon
function BadgeIcon({ children }: Props) {
  return (
    <div className='absolute bottom-1/4 translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-white'>
      {children}
    </div>
  );
}

Badge.Top = BadgeTop;
Badge.Title = BadgeTitle;
Badge.Number = BadgeNumber;

Badge.Icon = BadgeIcon;

export default Badge;
