import React from "react";
import FormControl from '@material-ui/core/FormControl';

import { useStyles, CssTextField } from './../styles/MuiStyles';

const ControlledInput = ({
    label,
    currItem,
    searchFunc,
    maxWidth,
    width,
    directEnter,
    auto,
    typePass,
    isDisabled,
    isName,
    error,
    setColor,
    bot,
    setClass
}) => {
    return (
        <FormControl className={useStyles.formControl} style={{ maxWidth: maxWidth, width: width, bottom: bot }} >
            {
                directEnter == null ?
                    <CssTextField
                        id={setClass}
                        type={typePass}
                        label={label}
                        value={currItem}
                        autoComplete={auto}
                        onChange={event => searchFunc(event)}
                        disabled={isDisabled}
                        name={isName}
                        error={error}
                        color={setColor}
                        className={setClass}
                    />
                    :
                    <CssTextField
                        id={setClass}
                        type={typePass}
                        label={label}
                        value={currItem}
                        autoComplete={auto}
                        onKeyPress={e => directEnter(e)}
                        onChange={event => searchFunc(event)}
                        disabled={isDisabled}
                        name={isName}
                        error={error}
                        color={setColor}
                        className={setClass}
                    />
            }

        </FormControl>
    );
}

export { ControlledInput };