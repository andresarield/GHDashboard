import React from 'react';

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.description}</td>
                <td>{props.console}</td>
            </tr>
        </React.Fragment>
    )
}
export default MovieList;