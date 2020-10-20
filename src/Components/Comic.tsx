import React from 'react';

interface ComicProps {
    title: string,
    thumbnail: string
}

interface ComicState { }

class Comic extends React.Component<ComicProps, ComicState> {
  render(): JSX.Element {
    const props = this.props;
    return <div className="Comic">
      <li className="comic-item">
        <div className="comic-card">
          <img src={`${props.thumbnail}/portrait_uncanny.jpg`} />
          <h2>{props.title}</h2>
          <button className="button js-add">Add to favourites</button>
        </div> {/*in favourites classname = js-remove*/}
      </li>
    </div>
  };
}

export default Comic;
