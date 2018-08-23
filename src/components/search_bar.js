import React, {Component} from 'react';

// Setiap yang ada JSX perlu menggunakan import React karena akan menggunakan method react seperti React.createElement
// const SearchBar = () =>{
//     return <input/>
// };

class SearchBar extends Component{
    // Hanya class based component yang memiliki state, function component tidak
    // Jika state berubah maka akan membuat komponen dirender kembali
    // Constructor dipanggil setiap instance class dibuat
    constructor(props){
        super(props);

        this.state={term : ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                // menggunakan state untuk mengganti data
                value = {this.state.term}
                onChange={(event)=>this.onInputChange(event.target.value)}/>
            </div>
        )
    }
    // function untuk mengecek perubahan input

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// menentukan apa yang akan diexport
// Class component lebih aware daripada function component
export default SearchBar;