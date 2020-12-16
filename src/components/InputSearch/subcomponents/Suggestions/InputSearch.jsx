import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from "@material-ui/core/CircularProgress";
import request from "../../../../helpers/request";
import { useHistory } from "react-router-dom";


import {makeStyles} from "@material-ui/core";
import {Buttons} from "../../InputSearch.css";
import Button from "../../../Button/Button";

//
// const useStyles = makeStyles(theme => ({
//     inputRoot: {
//         color: "purple",
//         "& .MuiOutlinedInput-notchedOutline": {
//             borderColor: "green"
//         },
//         "&:hover .MuiOutlinedInput-notchedOutline": {
//             borderColor: "red"
//         },
//         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//             borderColor: "purple"
//         }
//     }
// }));

const InputSearch = () => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 1;

    const [userInput, setUserInput] = React.useState('');

        const history = useHistory();


    useEffect(() => {
        let active = true;


        if (userInput) {
            request.get(`/search/users?q=${userInput}&per_page=5`)

                .then((response) => {
                    if (active) {
                        if (response.status !== 403) {
                            let options = [];
                            response.data.items.map(item => options.push(item['login']));
                            setOptions(options);
                        } else {
                            console.log('suggestions error (github API)')
                        }
                    }
                })
                .catch();
        }
        return () => {
            active = false;
        }

    }, [userInput])

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    const handleChangeInput = (e) => {
        setUserInput(e.target.value);
    };

    // const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.length > 0) {
            history.push(`user/${userInput}`)
        }
    }

    return (

        <form onSubmit={handleSubmit}>

            <Autocomplete
                id="github-users-api"
                style={{ width: 700 }}
                // classes={classes}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionSelected={(option, value) => {
                    setUserInput(value);
                    return option.name === value.name
                }}
                getOptionLabel={(option) => option}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        onChange={handleChangeInput}
                        {...params}
                        label="Username"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />

            <Buttons>
                <Button variant={"regular"} to={'/user/adi52'} type="button">
                    Example
                </Button>

                <Button variant={"primary"} type="submit">
                    Search
                </Button>
            </Buttons>
        </form>
    );
}

export default InputSearch;





