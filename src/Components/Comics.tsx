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
        try {
            const response = await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288`);
            const json = await response.json();
            let comicMap: any = {};
            (json.data.results).forEach((comic: { id: React.Key; }) => {
                comicMap[comic.id] = comic;
            });
            this.props.comicConfig.setList(comicMap);
        } catch (e) {
            console.log(e);
        }
    }

    render(): JSX.Element {
        const props: comicListContext = this.props.comicConfig;
        console.log(props.list);
        console.log(props.favouritesList);

        const getList = props.isFavouritesList ? props.favouritesList: props.list;
    
        return <div className="Comic">
            {Object.keys(getList).length > 0 && Object.keys(getList).map(k =>{
                const value = getList[parseInt(k)];
                return <Comic 
                    key={value!.id} 
                    id={value!.id}
                    title={value!.title} 
                    image={value!.thumbnail.path} 
                    itemValue={value}
                    changeLists={this.props.comicConfig.changeLists}
                />
               
            })}
        </div>
    };
}

export default Comics;

