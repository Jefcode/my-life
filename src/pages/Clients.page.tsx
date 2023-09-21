import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';
import Panel from '../components/ui/Panel';
import PanelHeading from '../components/ui/PanelHeading';
import { FilterActiveIcon } from '../assets/icons';
import ClientsTable from '../features/clients/components/ClientsTable';

const ClientsPage = () => {
  return (
    <>
      <PageTitle title='My Clients' breadcrumb={[{ title: 'My Clients' }]} />

      <Panel className='mb-5'>
        <Panel.Header>
          <PanelHeading title='Regular Clients' />
        </Panel.Header>

        <ClientsTable />
      </Panel>

      <Panel>
        <Panel.Header>
          <PanelHeading title='All Clients' />

          <Button icon={FilterActiveIcon}>Filter</Button>
        </Panel.Header>

        <ClientsTable />
      </Panel>
    </>
  );
};

export default ClientsPage;
