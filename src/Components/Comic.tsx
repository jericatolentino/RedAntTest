import React from 'react';

export interface ComicData {
  id: number,
  title: string,
  thumbnail: { path: string }
}

export interface ComicProps {
    title: string,
    image: string
}

interface ComicState {}

class Comic extends React.Component<ComicProps, ComicState> {
  
  render(): JSX.Element {
    const props: ComicProps = this.props;
    return <div className="Comic">
      <li className="comic-item">
        <div className="comic-card">
          <img src={`${props.image}/portrait_uncanny.jpg`} alt={props.title}/>
          <h2>{props.title}</h2>
          <button className="button js-add">Add to favourites</button>
        </div> {/*in favourites classname = js-remove*/}
      </li>
    </div>
  };
}

export default Comic;
