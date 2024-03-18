import { Button, Tooltip } from '@mui/material';

export const IconButton = ({ onClick, tooltip, icon, value, style, ...rest}) => {
  return (
    <Tooltip title={tooltip} >
      <Button style={{...style}}   variant="text" color="primary" size="small" sx={{ mb: 2, minWidth: 'unset' }} onClick={onClick} {...rest}>
        {icon}
      </Button>
    </Tooltip>
  );
};
