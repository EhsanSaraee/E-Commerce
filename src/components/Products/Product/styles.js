import { CardMedia, Card, CardActions } from '@mui/material';
import { styled } from '@mui/system';

export const RootCard = styled(Card)({
   maxWidth: '100%',
});

export const CardMediaStyles = styled(CardMedia)({
   height: 0,
   paddingTop: '56.25%', // 16.9
});

export const CardContentWrapper = styled('section')({
   display: 'flex',
   justifyContent: 'space-between',
});

export const CardActionsStyled = styled(CardActions)({
   display: 'flex',
   justifyContent: 'flex-end',
});
