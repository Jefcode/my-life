import Button from '../../../components/ui/Button';
import Panel from '../../../components/ui/Panel';
import Calendar from './calendar/Calendar';
import { CalendarActiveIcon } from '../../../assets/icons';
import PanelHeading from '../../../components/ui/PanelHeading';

const Appointments = () => {
  return (
    <Panel className='card h-full'>
      <Panel.Header>
        <PanelHeading title='Appointments' icon={CalendarActiveIcon} />
        <Button href='/appointments'>See all</Button>
      </Panel.Header>

      <div className='mt-3'>
        <Calendar />
      </div>
    </Panel>
  );
};

export default Appointments;
