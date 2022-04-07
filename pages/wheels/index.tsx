/* eslint-disable max-lines */
import { Alert, Button, ButtonGroup, Container, Icon, Snackbar, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { HEADER_HEIGHT } from '../../components/Layouts/constants';
import LayoutWithSidebar from '../../components/Layouts/LayoutWithSidebar';
import Columns from '../../components/Screens/WheelsList/Columns';
import EmptyCase from '../../components/Screens/WheelsList/EmptyCase';
import Filters from '../../components/Screens/WheelsList/Filters';
import GridView from '../../components/Screens/WheelsList/GridView';
import TableView from '../../components/Screens/WheelsList/TableView';
import { APP_DESCRIPTION, APP_NAME, KEYWORDS } from '../../constants';
import {
  useBreakpoints,
  useColumns,
  useCompareActions,
  useEucList,
  useFilterFields,
  useHeadingStyles,
  useSidebar,
  useSorting,
  useWheelsListTranslations
} from '../../hooks';
import { getBrands, getMaxComparedWheels, getPricesConfig } from '../../store/selectors';
import { TranslationFile, WheelId } from '../../types';
import { formatWheelName } from '../../utils';
import { getTranslationsFromFiles } from '../../utils-server';

interface Props {
  pictures: Record<WheelId, string>;
}

// eslint-disable-next-line max-lines-per-function
const Wheels: React.FC<Props> = ({ pictures }) => {
  const { sm: isTablet } = useBreakpoints();
  const { t } = useWheelsListTranslations();
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const displayTable = view === 'table';
  const ListView = displayTable ? TableView : GridView;
  const showPrice = useSelector(getPricesConfig);
  const maxComparedWheels = useSelector(getMaxComparedWheels);
  const brands = useSelector(getBrands);

  const { handleHide, handleReset, handleShow, ...columns } = useColumns();
  const { fields, filters, handleResetFilters } = useFilterFields();

  const { handleCloseSidebar, handleOpenSidebar, open } = useSidebar();
  const { sorting, handleSort } = useSorting();

  const sortedWheels = useEucList(filters, sorting, pictures);

  const {
    canCompareMoreWheels,
    comparedWheels,
    handleAddAllToComparision,
    handleAddToComparision,
    handleNavigateToComparator,
    isBeingCompared
  } = useCompareActions();

  const canCompareAllWheels = sortedWheels.length > 0 && sortedWheels.length <= maxComparedWheels;
  const canCompareOneWheel = canCompareMoreWheels();
  const styles = useHeadingStyles(canCompareAllWheels, view);

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

      <LayoutWithSidebar
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
        <Container maxWidth={ styles.containerMaxWidth } sx={ styles.buttonsContainer }>
          { /* View toggles */ }
          <ButtonGroup sx={ styles.viewTogglesGroup }>
            <Button onClick={ () => { setView('grid'); } }>
              <Icon color={ view === 'grid' ? 'primary' : 'disabled' }>grid_view</Icon>
            </Button>

            <Button onClick={ () => { setView('table'); } }>
              <Icon color={ view === 'table' ? 'primary' : 'disabled' }>table_rows</Icon>
            </Button>
          </ButtonGroup>

          { /* Comparator */ }
          <ButtonGroup sx={ styles.comparatorGroup } orientation={ styles.comparatorGroupOrientation }>
            { canCompareAllWheels && (
              <Button
                onClick={ () => handleAddAllToComparision(sortedWheels.map(w => w.id)) }
                sx={ styles.compareAllWheels }
              >
                { t('compareAll-btn', { wheels: sortedWheels.length }) }
              </Button>
            ) }
          </ButtonGroup>

          { /* Filters */ }
          <ButtonGroup sx={ styles.filtersGroup }>
            <Button onClick={ handleOpenSidebar } startIcon={ <Icon>filter_list</Icon> }>
              { t('filters-title') }
            </Button>
          </ButtonGroup>
        </Container>

        <Container maxWidth={ styles.containerMaxWidth } sx={ styles.commonContainer }>
          <Typography variant="body1" component="p">
            { t('unicycles-label', { quantity: sortedWheels.length }) }
          </Typography>
        </Container>
      
        <ListView
          columns={ columns }
          handleAddToCompare={ canCompareOneWheel ? handleAddToComparision : undefined }
          handleSort={ handleSort }
          isBeingCompared={ isBeingCompared }
          records={ sortedWheels }
          showPrice={ showPrice }
          sorting={ sorting }
        />

        { comparedWheels.map((wheelId, index) => {
          const isLastSnackbar = index >= comparedWheels.length - 1;
          const wheel = sortedWheels.find(w => w.id === wheelId);

          return (
            <Snackbar
              key={ wheelId }
              anchorOrigin={ { horizontal: 'center', vertical: 'bottom' } }
              autoHideDuration={ 6000 }
              open={ isLastSnackbar }
            >
              <Alert
                action={
                  <Button color="inherit" onClick={ handleNavigateToComparator } size="small">
                    { t('checkResults-btn') }
                  </Button>
                }
                severity="success"
                sx={ { width: '100%' } }
              >
                { t(
                  'wheelAddedToComparator-msg',
                  { wheel: wheel ? formatWheelName(wheel, brands) : wheelId }
                ) }
              </Alert>
            </Snackbar>
          );
        }) }

        { sortedWheels.length <= 0 && (
          <EmptyCase
            handleOpenFilters={ handleOpenSidebar }
            handleResetFilters={ handleResetFilters }
          />
        ) }
      </LayoutWithSidebar>
    </>
  );
};

export default Wheels;

export const getStaticProps = getTranslationsFromFiles([TranslationFile.wheelsList], 'first');
