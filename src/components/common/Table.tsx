import classNames from '../../utils/classNames';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Table = ({ children }: Props) => {
  return (
    <div className='overflow-y-auto mt-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100 overflow-x-auto'>
      <table className='w-full text-left whitespace-nowrap'>{children}</table>
    </div>
  );
};

const Head = ({ children }: Props) => {
  return (
    <thead className='text-stone-400 border-b border-stone-200'>
      <tr>{children}</tr>
    </thead>
  );
};

const HeadColumn = ({ children }: Props) => {
  return <td className='py-2 px-2 first:pl-2'>{children}</td>;
};

const Body = ({ children, className = '' }: Props) => {
  return (
    <tbody className={classNames('divide-y divide-stone-100', className)}>
      {children}
    </tbody>
  );
};

const Row = ({ children, className = '' }: Props) => {
  return (
    <tr className={classNames('bg-white hover:bg-stone-50', className)}>
      {children}
    </tr>
  );
};

const BodyColumn = ({ children, className = '' }: Props) => {
  return (
    <td className={classNames('py-4 px-2 last:pr-2', className)}>{children}</td>
  );
};

Table.Head = Head;
Table.Row = Row;
Table.HeadColumn = HeadColumn;
Table.Body = Body;
Table.BodyColumn = BodyColumn;

export default Table;
