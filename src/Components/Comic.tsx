import React from 'react';

export interface ComicData {
  id: number,
  title: string,
  thumbnail: { path: string }
}

export interface ComicProps {
  id: number,
  title: string,
  image: string,
  itemValue: any,
  changeLists: (item: any) => {}
}

interface ComicState {}

class Comic extends React.Component<ComicProps, ComicState> {
  
  onClick = () => {
    this.props.changeLists(this.props.itemValue);
  }

  render(): JSX.Element {
    const props: ComicProps = this.props;
    return <div className="Comic">
      <li className="comic-item">
        <div className="comic-card">
          <img src={`${props.image}/portrait_uncanny.jpg`} alt={props.title}/>
          <h2>{props.title}</h2>
          <button className="button js-add" onClick={this.onClick}>Add to favourites</button>
        </div>
      </li>
    </div>
  };
}

export default Comic;
