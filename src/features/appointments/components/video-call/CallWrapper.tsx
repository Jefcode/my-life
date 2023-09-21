import { motion } from 'framer-motion';

interface CallWrapperProps {
  children?: React.ReactNode;
  className?: string;
  fullscreen: boolean;
}

const CallWrapper = ({
  children,
  className = '',
  fullscreen,
}: CallWrapperProps) => {
  return (
    <motion.div
      layout
      className={`w-full h-[500px] relative ${
        fullscreen && 'lg:h-[700px]'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default CallWrapper;
