import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {videos: state.videos};
};

const ConnctedList = ({videos}) => (
    <ul>
        {videos.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnctedList);

export default List;