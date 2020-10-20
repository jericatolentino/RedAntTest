import React from 'react';

interface FavouriteComicProps {
    name: string,
    itemValue: any,
    changeLists: (item: any, favourite: boolean) => void
}

const FavouriteComic: React.FC<FavouriteComicProps> = ({name, itemValue, changeLists}): JSX.Element => {
    const onClick = (): void => {
        changeLists(itemValue, true);
    }

    return (
        <li>
            {name}
            <button className="remove js-remove" onClick={onClick}></button>
        </li>
    );
};


export default FavouriteComic;
