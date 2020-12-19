import React, {useEffect, useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from "@material-ui/core/CircularProgress";
import request from "../../helpers/request";
import { useHistory } from "react-router-dom";

import {AutocompleteStyles, Buttons, Form} from "./InputSearch.css";
import Button from "../Button/Button";
import {gsap} from "gsap";

const InputSearch = () => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 1;

    const [userInput, setUserInput] = React.useState('');

    const history = useHistory();

    useEffect(() => {
        let active = true;

        if (userInput) {
            request.get(`/search/users?q=${userInput}&per_page=4`)

                .then((response) => {
                    if (active) {
                        if (response.status !== 403) {
                            let options = [];
                            response.data.items.map(item => options.push(item['login']));
                            setOptions(options);
                        } else {
                            console.log("Server error, try again later!")
                        }
                    }
                })
                .catch(error => {
                    console.log("Server error, try again later!");
                    console.log(error);
                });
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


    React.useEffect(() => {

    }, [])

    const handleChangeInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.length > 0) {
            history.push(`user/${userInput}`)
        }
    }


    useEffect(() => {
        document.title = 'githubCommits';
    }, [])

    let input = useRef(null);
    let buttons = useRef(null);

    useEffect(() => {
        gsap.from([input, buttons], 0.8, {
            delay: 1.6,
            ease: "power3.out",
            opacity: 0,
            y: 10,
            stagger: {
                amount: 0.3
            }
        })
    }, []);

    return (
        <Form onSubmit={handleSubmit}>
            <AutocompleteStyles ref={el => (input = el)}>
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
                    onChange={(event, value) => setUserInput(value)}
                    getOptionSelected={(option, value) => (option.name === value.name)}
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
            </AutocompleteStyles>

            <Buttons ref={el => (buttons = el)}>
                <Button variant={"regular"} to={'/user/adi52'} type="button">
                    Example
                </Button>

                <Button variant={"primary"} type="submit">
                    Search
                </Button>
            </Buttons>
        </Form>
    );
}

export default InputSearch;