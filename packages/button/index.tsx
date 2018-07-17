import * as React from 'react';
import StyledButton, { ButtonProps } from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface IProps extends ButtonProps {
}

const styles = (theme: any) => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
type Props = WithStyles<typeof styles> & IProps;

class Button extends React.Component<Props,{}>{

    render(){
        const { classes, ...rest } = this.props;
        return (<StyledButton {...rest} className={classes.button}>      
            {this.props.children}
        </StyledButton>);
    }

}

export default withStyles(styles)<Props>(Button); 