import React from 'react';
import './App.css';
import { ComicData } from './Components/Comic';
import Comics from './Components/Comics';

interface AppProps {}
interface AppState {
  isFavouritesList: boolean,
  favouritesList: ComicData[],
  list: ComicData[],
  setList: any
}

export interface comicListContext {
  isFavouritesList: boolean,
  favouritesList: ComicData[],
  list: ComicData[],
  setList: any
}

export const ComicListContext: React.Context<comicListContext> = React.createContext<comicListContext>({
    isFavouritesList: false,
    favouritesList: [],
    list: [],
    setList: () => {}
});

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      isFavouritesList: false,
      favouritesList: [],
      list: [],
      setList: this.setList
    } 
  }

  setList = (list: ComicData[]) => {
    this.setState({list});
  }
  
  //add to list + remove from list
  //add to favourites list + remove from list
  
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <ComicListContext.Provider value={this.state}>
            <ComicListContext.Consumer>
              {value => <Comics comicConfig={value}/>}
            </ComicListContext.Consumer>
          </ComicListContext.Provider>
        </header>
      </div>
    );
  }
}

export default App;
