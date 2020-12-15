import React from 'react';
import {Wrapper} from "./Suggestions.css";

const Suggestions = ({ results, setTarget, showSuggestions }) => {

    const userNames = results ? results.map(({id, login}) => (
        <li
            key={id}
            onClick={() => setTarget(login) }
        >
            {login}
        </li>
    )) : '';


    return userNames.length > 0 && showSuggestions ? (
        <Wrapper>
            <ul>
                {userNames}
            </ul>
        </Wrapper>
    ) : ('');
};

export default Suggestions;