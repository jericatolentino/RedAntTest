import React from 'react';
import { comicListContext } from '../App';
import Comic from './Comic';

interface ComicsProps {
    comicConfig: comicListContext
}

class Comics extends React.Component<ComicsProps, {}> {
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
        const getList = this.props.comicConfig.list;
    
        return <div className="Comic">
            {Object.keys(getList).length > 0 && Object.keys(getList).map(k =>{
                const value = getList[parseInt(k)];
                return <Comic 
                    key={value!.id} 
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

