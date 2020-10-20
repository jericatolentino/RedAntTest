import React from 'react';

interface FavouriteComicProps {
    name: string,
    itemValue: any,
    changeLists: any
}

const FavouriteComic: React.FC<FavouriteComicProps> = ({name, itemValue, changeLists}) => {

    const onClick = () => {
        console.log('clicked',itemValue);
        changeLists(itemValue);
    }

    return (
        <li>
            {name}
            <button className="remove js-remove" onClick={onClick}></button>
        </li>
    );
};


export default FavouriteComic;
