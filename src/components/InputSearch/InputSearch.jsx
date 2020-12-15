import React, {useEffect, useRef, useState} from 'react';


import {Input, Buttons} from "./InputSearch.css";
import request from "../../helpers/request";
import Button from "../Button/Button";
import Suggestions from './subcomponents/Suggestions/Suggestions';
import { useHistory } from "react-router-dom";


const InputSearch = () => {
    const [userInput, setUserInput] = useState('');
    const [results, setResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const inputRef = useRef();

    const history = useHistory();

    const handleClickOutsideInput = e => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setShowSuggestions(false);
        }
    };

    const handleChangeInput = (e) => {
        setUserInput(e.target.value);
        setShowSuggestions(true);
    };

    const setTarget = (user) => {
        setUserInput(user);
        setResults([]);
        setShowSuggestions(false);
    }

    useEffect(() => {
        if (userInput.length > 1
            && userInput
            && showSuggestions) {
                // fetch user list!
                request.get(`/search/users?q=${userInput}&per_page=3`)

                    .then((response) => {
                        setResults(response.data.items)
                    })
                    .catch();
        } else {
            setShowSuggestions(false);
            setResults([]);
        }
    }, [showSuggestions, userInput])

    useEffect(() => {
        // Hide suggestions when user click outside input
        document.addEventListener("click", handleClickOutsideInput);

        return () => {
            document.removeEventListener("click", handleClickOutsideInput);
        };
    });

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (userInput.length > 0) {
                history.push(`user/${userInput}`)
            } else {
                history.push('/user/adi52');
            }
        }
    }

    return (
        <>
            <Input
                type={"text"}
                placeholder={"Username"}
                value={userInput}
                onChange={handleChangeInput}
                ref={inputRef}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
            />

            <Suggestions
                results={results}
                setTarget={setTarget}
                showSuggestions={showSuggestions}
            />

            <Buttons>
                <Button variant={"regular"} to={'/user/adi52'}>
                    Example
                </Button>
                <Button variant={"primary"} to={userInput ? `user/${userInput}` : ''}>
                    Search
                </Button>
            </Buttons>
        </>
    );
};

export default InputSearch;