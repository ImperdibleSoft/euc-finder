import { Button, ButtonGroup, Container, Icon, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Columns from '../components/Columns';
import Filters from '../components/Filters';
import LeftSidebarLayout from '../components/Layouts/LeftSidebarLayout';
import NoWheels from '../components/NoWheels';
import WheelsList from '../components/WheelsList';
import WheelsTable from '../components/WheelsTable';
import { APP_DESCRIPTION, APP_NAME } from '../constants';
import { useColumns, useEucList, useFilterFields, useSidebar, useSorting } from '../hooks';
import { getStaticProps } from '../utils/translatedResources';

const EucList: React.FC = () => {
  const { t } = useTranslation();
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const displayTable = view === 'table';
  const Component = displayTable ? WheelsTable : WheelsList;

  const { handleHide, handleReset, handleShow, ...columns } = useColumns();
  const { fields, filters, handleResetFilters } = useFilterFields();

  const { handleCloseSidebar, handleOpenSidebar, open } = useSidebar();
  const { sorting, handleSort } = useSorting();

  const sortedWheels = useEucList(filters, sorting);

  const pageTitle = APP_NAME;
  const pageDescription = APP_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ pageDescription } />

        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:type" content="website" />
      </Head>

      <LeftSidebarLayout
        handleCloseSidebar={ handleCloseSidebar }
        handleOpenSidebar={ handleOpenSidebar }
        open={ open }
        sidebar={ (
          <>
            <Filters
              fields={ fields }
              handleResetFilters={ handleResetFilters }
            />

            { displayTable && (
              <Columns
                columns={ columns }
                handleHide={ handleHide }
                handleReset={ handleReset }
                handleShow={ handleShow }
              />
            ) }
          </>
        ) }
      >
        <Container
          maxWidth={ view === 'grid' ? 'lg' : false }
          sx={ { alignItems: 'center', display: 'flex', flexDirection: 'row', pb: 1 } }
        >
          <Typography variant="body1" component="span" sx={ { display: 'flex', flex: 1 } }>
            { t('unicycles-label', { quantity: sortedWheels.length }) }
          </Typography>

          <ButtonGroup sx={ { display: { xs: 'inline-flex', sm: 'none' } } }>
            <Button onClick={ handleOpenSidebar } startIcon={ <Icon>filter_list</Icon> }>
              { t('filters-title') }
            </Button>
          </ButtonGroup>

          <ButtonGroup sx={ { display: { xs: 'none', xl: 'flex' } } }>
            <Button onClick={ () => { setView('grid'); } }>
              <Icon color={ view === 'grid' ? 'primary' : 'disabled' }>grid_view</Icon>
            </Button>
        
            <Button onClick={ () => { setView('table'); } }>
              <Icon color={ view === 'table' ? 'primary' : 'disabled' }>table_rows</Icon>
            </Button>
          </ButtonGroup>
        </Container>
      
        <Component
          columns={ columns }
          handleSort={ handleSort }
          records={ sortedWheels }
          sorting={ sorting }
        />

        { sortedWheels.length <= 0 && (
          <NoWheels
            handleOpenFilters={ handleOpenSidebar }
            handleResetFilters={ handleResetFilters }
          />
        ) }
      </LeftSidebarLayout>
    </>
  );
};

export default EucList;

export { getStaticProps };