import CallRow from './CallRow';
import Button from '../../../../components/ui/Button';
import Panel from '../../../../components/ui/Panel';
import Table from '../../../../components/ui/Table';
import PanelHeading from '../../../../components/ui/PanelHeading';
import { CameraIcon, FilterActiveIcon } from '../../../../assets/icons';
import useAppointments from '../../hooks/useAppointments';

const NextCalls = () => {
  const { nextAppointments: nextMeetings } = useAppointments();

  return (
    <Panel className='card flex-auto'>
      {/* Panel Name / Filter Flex Container */}
      <Panel.Header>
        <PanelHeading title='Next Calls' icon={CameraIcon} />
        <Button icon={FilterActiveIcon}>Filter</Button>
      </Panel.Header>

      <Table>
        <Table.Head>
          <Table.HeadColumn>Client</Table.HeadColumn>
          <Table.HeadColumn>Date</Table.HeadColumn>
          <Table.HeadColumn>Time</Table.HeadColumn>
          <Table.HeadColumn></Table.HeadColumn>
        </Table.Head>
        <Table.Body>
          {nextMeetings.map((meeting) => (
            <CallRow key={meeting.id} appointment={meeting} />
          ))}
        </Table.Body>
      </Table>
    </Panel>
  );
};

export default NextCalls;
