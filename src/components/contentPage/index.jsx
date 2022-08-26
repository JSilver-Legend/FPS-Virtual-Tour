import React from 'react';

const ContentPage = ({ layout, link, sourceLink, contentText }) => {

    const clickEvent = () => {
        console.log('clicked');
    }

    return (
        <div onClick={clickEvent}>HTML</div>
    );
}

export default ContentPage;