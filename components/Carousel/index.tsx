import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import React, { PropsWithChildren } from 'react';

const getWrapperStyles = (transparent = false): SxProps<Theme> => ({
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  boxShadow: !transparent ? '0px 5px 5px rgba(0, 0, 0, 0.1)' : undefined,
  maxWidth: '100%'
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
  skeleton = false,
  transparent
}) => {
  const items = children({ Item: CarouselItem });
  const childrenCount = React.Children.count(items as React.ReactNode);
  const grandChildrenCount = (items as React.ReactElement)?.props?.children?.length;
  const itemsCount = typeof counter === 'number' ? counter : (grandChildrenCount ?? childrenCount);

  if (itemsCount <= 0) {
    return (
      <Box
        className={ className }
        sx={ getWrapperStyles(transparent) }
      >
        <Box
          sx={ getItemsCountStyles(align !== 'center' ? 'flex-start' : align, true) }
        >
          No { entityName } found
        </Box>
      </Box>
    );
  }

  return (
    <Box
      className={ className }
      id="wrapper"
      sx={ getWrapperStyles(transparent) }
    >
      <Box
        id="scrollable-area"
        sx={ {
          maxWidth: '100%',
          overflow: 'hidden',
          overflowX: 'auto',
          textAlign: align,
          pb: 3
        } }
      >
        <Box
          id="scrolled-list"
          sx={ {
            display: 'inline-flex',
            px: 1
          } }
        >
          { items }
        </Box>
      </Box>

      { !counter && <Box sx={ getItemsCountStyles(align, counter) }/> }
      
      { counter && (
        <Box sx={ getItemsCountStyles(align, counter) }>
          { !skeleton && (
            <Typography variant="body1">
              { itemsCount } { entityName }
            </Typography>
          ) }
        </Box>
      ) }
    </Box>
  );
};

export default Carousel;