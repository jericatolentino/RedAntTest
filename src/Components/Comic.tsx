import React from 'react';

export interface ComicData {
  id: number,
  title: string,
  thumbnail: { path: string }
}

export interface ComicProps {
  title: string,
  image: string,
  itemValue: any,
  changeLists: (item: any, favourite: boolean) => void
}

const Comic: React.FC<ComicProps> = ({title, image, itemValue, changeLists}): JSX.Element => {
  const onClick = (): void => {
    changeLists(itemValue, false);
  }

  return <div className="Comic">
    <li className="comic-item">
      <div className="comic-card">
        <img src={`${image}/portrait_uncanny.jpg`} alt={title}/>
        <h2>{title}</h2>
        <button className="button js-add" onClick={onClick}>Add to favourites</button>
      </div>
    </li>
  </div>;
}

export default Comic;
