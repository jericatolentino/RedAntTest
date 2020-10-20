import React from 'react';
import './App.css';
import { ComicData } from './Components/Comic';
import Comics from './Components/Comics';
import FavouriteComic from './Components/FavouriteComic';

type comicList = { [key: number]: ComicData | undefined };

interface AppProps { }

interface AppState {
  isFavouritesList: boolean,
  favouritesList: comicList,
  list: comicList,
  setList: any,
  changeLists: any
}

export interface comicListContext {
  isFavouritesList: boolean,
  favouritesList: comicList,
  list: comicList,
  setList: any,
  changeLists: any
}

export const ComicListContext: React.Context<comicListContext> = React.createContext<comicListContext>({
  isFavouritesList: false,
  favouritesList: {},
  list: {},
  setList: () => {},
  changeLists: () => {}
});

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      isFavouritesList: false,
      favouritesList: {},
      list: {},
      setList: this.setList,
      changeLists: this.changeLists
    }
  }

  setList = (list: comicList) => {
    this.setState({ list });
  }

  changeLists = (item: any) => {
    if (this.state.isFavouritesList) {
      let newFavouritesList = this.state.favouritesList;
      if (newFavouritesList[item.id]) delete newFavouritesList[item.id];

      let newList = this.state.list;
      newList[item.id] = item;

      this.setState({
        favouritesList: newFavouritesList,
        list: newList
      });

    } else {
      let newList = this.state.list;
      if (newList[item.id]) delete newList[item.id];

      let newFavouritesList = this.state.favouritesList;
      newFavouritesList[item.id] = item;

      this.setState({
        favouritesList: newFavouritesList,
        list: newList
      });
    }
  }

  render(): JSX.Element {
    const favouritesList = this.state.favouritesList;

    return (
      <div className="App">
        <header className="App-header">

      
        <main className="site-content">
            <ul id="comics-list" className="comics-list">
              <ComicListContext.Provider value={this.state}>
                <ComicListContext.Consumer>
                  {value => <Comics comicConfig={value} />}
                </ComicListContext.Consumer>
              </ComicListContext.Provider>
            </ul>
          </main>

          <div id="favourites-panel" className={`favourites-panel ${!this.state.isFavouritesList && 'open'}`}>
            <div className="favourites-header">
              <h2>Favourites</h2>
              <button className="close js-close"></button>
            </div>
            <div className="favourites-content">
              <ul className="favourites-list">
                  {
                    Object.keys(favouritesList).length > 0 && 
                    Object.keys(favouritesList).map(item => 
                      <FavouriteComic 
                          key={item} 
                          name={favouritesList[parseInt(item)]!.title}
                          itemValue={favouritesList[parseInt(item)]}
                          changeLists={this.state.changeLists}
                      />
                    )
                  }
              </ul>
            </div>
          </div>
        
        </header>
      </div>
    );
  }
}

export default App;
