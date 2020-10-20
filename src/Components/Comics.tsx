import React from 'react';
import Comic from './Comic';

interface ComicsProps { }

interface ComicsState {
    comics: any[]
}

class Comics extends React.Component<ComicsProps, ComicsState> {

    constructor(props: ComicsProps) {
        super(props);
        this.state = {
            comics: []
        }
    }

    async componentDidMount() {
        const response = await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288`);
        const json = await response.json();
        this.setState({ comics: json.data.results });
    } //need to do error handling


    render(): JSX.Element {
        return <div className="Comic">
            {this.state.comics.map(comic => 
                <Comic title={comic.title} thumbnail={comic.thumbnail.path}/>
            )}
    </div>
    };
}

export default Comics;

