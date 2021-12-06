import { Button, ButtonGroup, Container, Icon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HEADER_HEIGHT } from '../../components/Layouts/constants';
import LeftSidebarLayout from '../../components/Layouts/LeftSidebarLayout';
import Columns from '../../components/WheelsList/Columns';
import Filters from '../../components/WheelsList/Filters';
import NoWheels from '../../components/WheelsList/NoWheels';
import GridView from '../../components/WheelsList/GridView';
import TableView from '../../components/WheelsList/TableView';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import { useColumns, useEucList, useFilterFields, useSidebar, useSorting } from '../../hooks';
import { getStaticProps } from '../../utils/serverTranslatedResources';

const Wheels: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const displayTable = view === 'table';
  const ListView = displayTable ? TableView : GridView;

  const { handleHide, handleReset, handleShow, ...columns } = useColumns();
  const { fields, filters, handleResetFilters } = useFilterFields();

  const { handleCloseSidebar, handleOpenSidebar, open } = useSidebar();
  const { sorting, handleSort } = useSorting();

  const sortedWheels = useEucList(filters, sorting);

  const pageTitle = APP_NAME;
  const pageDescription = APP_DESCRIPTION;

  const collapsableSize = useMemo(() => {
    if (!displayTable || !isTablet) {
      return undefined;
    }

    const headerSize = HEADER_HEIGHT / 2;
    const paddingBottom = 16;
    const button = 36;
    const spacing = headerSize + paddingBottom + button;

    return `calc(50vh - ${ spacing }px)`;
  }, [isTablet, displayTable]);


  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
        <meta name="description" content={ pageDescription } />

        <meta name="keywords" content={ KEYWORDS.join(', ') } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDescription } />
        <meta property="og:image" content={ require('/public/assets/ogImage.png').default?.src } />
        <meta property="og:image:alt" content={ t('appLogo-label', { appName: APP_NAME }) } />
      </Head>

      <LeftSidebarLayout
        handleCloseSidebar={ handleCloseSidebar }
        handleOpenSidebar={ handleOpenSidebar }
        open={ open }
        sidebar={ (
          <>
            <Filters
              collapsedSize={ collapsableSize }
              fields={ fields }
              handleResetFilters={ handleResetFilters }
            />

            { displayTable && (
              <Columns
                collapsedSize={ collapsableSize }
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
          <ButtonGroup sx={ { display: { xs: 'inline-flex', sm: 'none' }, flex: 1 } }>
            <Button onClick={ handleOpenSidebar } startIcon={ <Icon>filter_list</Icon> }>
              { t('filters-title') }
            </Button>
          </ButtonGroup>

          <Typography
            variant="body1"
            component="span"
            sx={ {
              display: 'flex',
              flex: 1,
              justifyContent: { xs: 'flex-end', sm: 'flex-start' }
            } }
          >
            { t('unicycles-label', { quantity: sortedWheels.length }) }
          </Typography>

          <ButtonGroup sx={ { display: { xs: 'none', lg: 'flex' } } }>
            <Button onClick={ () => { setView('grid'); } }>
              <Icon color={ view === 'grid' ? 'primary' : 'disabled' }>grid_view</Icon>
            </Button>
        
            <Button onClick={ () => { setView('table'); } }>
              <Icon color={ view === 'table' ? 'primary' : 'disabled' }>table_rows</Icon>
            </Button>
          </ButtonGroup>
        </Container>
      
        <ListView
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

export default Wheels;

export { getStaticProps };