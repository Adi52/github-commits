import React from 'react';
import {Wrapper} from "./Suggestions.css";

const Suggestions = ({ results, setTarget, showSuggestions }) => {

    const userNames = results ? results.map(user => (
        <li
            key={user.id}
            onClick={() => setTarget(user.login) }
        >
            {user.login}
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