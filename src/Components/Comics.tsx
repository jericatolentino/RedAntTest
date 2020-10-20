import React from 'react';
import { comicListContext } from '../App';
import Comic from './Comic';

interface ComicsProps {
    comicConfig: comicListContext
}

interface ComicsState {
    comics: any[]
}

class Comics extends React.Component<ComicsProps, ComicsState> {
    async componentDidMount() {
        const response = await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288`);
        const json = await response.json();
        this.props.comicConfig.setList(json.data.results)
    } //need to do error handling


    render(): JSX.Element {
        const props: comicListContext = this.props.comicConfig;
        console.log(props)
        console.log('LOOK HERE', !props.isFavouritesList ? 'NOT FAV' : 'FAV');

        const getList = !props.isFavouritesList ? props.list : props.favouritesList;

        return <div className="Comic">
            {getList.length > 0 && getList.map(comic =>
                <Comic key={comic.id} title={comic.title} image={comic.thumbnail.path} />
            )} {/*comic.thumbnail.path*/}
        </div>
    };
}

export default Comics;

