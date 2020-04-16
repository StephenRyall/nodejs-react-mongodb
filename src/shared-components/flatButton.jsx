import React from 'react';
import Button from '@material-ui/core/Button';
import { PulseLoader } from 'react-spinners';
import { override } from './../styles/MuiStyles';

const FlatButton = ({ 
    execClick, 
    butClassName, 
    loading, 
    pulseClass, 
    pulseColor,
    text,
    isDisabled, 
    setClass
}) => {
    return (
        <Button variant="contained" disabled={!isDisabled} onClick={() => execClick()} className={butClassName} id={setClass}>
            {loading ?
                <div className={pulseClass}>
                    <PulseLoader
                        css={override}
                        sizeUnit={"px"}
                        size={5}
                        color={pulseColor}
                    />
                </div> :
                <p>
                    {text}
                </p>
            }
        </Button>
    );
};

export { FlatButton };