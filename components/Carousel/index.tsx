import { Box, SxProps, Theme, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const getWrapperStyles = (transparent = false): SxProps<Theme> => ({
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  boxShadow: !transparent ? '0px 5px 5px rgba(0, 0, 0, 0.1)' : undefined,
  pb: 2,
  maxWidth: '100%'
});

const getScrollableAreaStyles = (align: 'initial' | 'center'): SxProps<Theme> => ({
  maxWidth: '100%',
  overflow: 'hidden',
  overflowX: 'auto',
  textAlign: align,
  pb: 3
});

const getItemsCountStyles = (
  align: 'initial' | 'center' | 'flex-start',
  counter?: boolean | number
): SxProps<Theme> => ({
  alignItems: align,
  display: 'flex',
  flexDirection: 'column',
  p: 2,
  pt: !counter ? 0 : 2,
  textAlign: 'right'
});

const CarouselItem: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <Box
    sx={ {
      display: 'flex',
      flex: 1,
      mx: 1
    } }
  >
    { children }
  </Box>
);

interface ChildrenProps {
  Item: typeof CarouselItem;
}

interface Props {
  align?: 'initial' | 'center';
  children: (props: ChildrenProps) => React.ReactNode | React.ReactElement | React.FC;
  className?: string;
  counter?: boolean | number;
  entityName?: string;
  skeleton?: boolean;
  transparent?: boolean;
}

const Carousel: React.FC<Props> = ({
  align = 'initial',
  children,
  className,
  counter = true,
  entityName = 'items',
  skeleton,
  transparent
}) => {
  const items = children({ Item: CarouselItem });
  const childrenCount = React.Children.count(items as React.ReactNode);
  const grandChildrenCount = (items as React.ReactElement)?.props?.children?.length;
  const itemsCount = typeof counter === 'number' ? counter : (grandChildrenCount ?? childrenCount);

  if (skeleton) {
    return null;
  }

  return (
    <>
      <Box
        className={ `Carousel-wrapper ${ className ?? '' }` }
        sx={ getWrapperStyles(transparent) }
      >
        { itemsCount > 0 && (
          <Box
            className="Carousel-scrollableArea"
            sx={ getScrollableAreaStyles(align) }
          >
            <Box
              className="Carousel-scrolledList"
              sx={ {
                display: 'inline-flex',
                px: 1
              } }
            >
              { items }
            </Box>
          </Box>
        ) }

        { (counter || !itemsCount) && (
          <Box
            className="Carousel-itemsCount"
            sx={ getItemsCountStyles(align, counter) }
          >
            <Typography variant="body1">
              { !!itemsCount && (
                <>
                  { itemsCount } { entityName }
                </>
              ) }

              { !itemsCount && (
                <>
                  No { entityName } found
                </>
              ) }
            </Typography>
          </Box>
        ) }
      </Box>
    </>
  );
};

export default Carousel;