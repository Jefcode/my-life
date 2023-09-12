/**
 * Flex Row
 */

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

const Row = ({ children, className }: RowProps) => {
  return (
    <div className={`flex items-stretch flex-wrap -mx-3 ${className}`}>
      {children}
    </div>
  );
};

export default Row;
