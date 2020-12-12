import React, {useEffect, useRef, useState} from 'react';


import {Input, Buttons} from "./InputSearch.css";
import request from "../../helpers/request";
import Button from "../Button/Button";
import Suggestions from './subcomponents/Suggestions/Suggestions';


const InputSearch = () => {
    const [userInput, setUserInput] = useState('');
    const [results, setResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const inputRef = useRef();

    const handleClickOutsideInput = e => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setShowSuggestions(false);
        }
    };

    const fetchUsersList = () => {
        request.get(`/search/users?q=${userInput}&per_page=3`)

            .then((response) => {
                setResults(response.data.items)
            })
            .catch();
    }

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
            fetchUsersList()
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



    return (
        <>
            <Input
                type={"text"}
                placeholder={"Username"}
                value={userInput}
                onChange={handleChangeInput}
                ref={inputRef}
                onFocus={() => setShowSuggestions(true)}
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