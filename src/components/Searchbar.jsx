import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      // toast ('Print something');
      NotificationManager.warning('Print something');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <BiSearch
            style={{
              width: 36,
              height: 36,
            }}
          />
        </button>

        <input
          value={query}
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleChange = event => {
//     this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
//     // console.log(event.currentTarget.value)
//     // console.log('handleChange:',this.state.searchQuery)
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if(this.state.searchQuery.trim() === '') {
//       // toast ('Print something');
//       NotificationManager.warning('Print something');
//       return;
//     }
//     // const { searchQuery } = this.state;
//     this.props.onSubmit(this.state.searchQuery);
//     // this.setState({ searchQuery: '' });

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form onSubmit={this.handleSubmit} className="SearchForm">
//           <button type="submit" className="SearchForm-button">
//             <BiSearch
//               style={{
//                 width: 36,
//                 height: 36,
//               }}
//             />
//             {/* <span className='SearchForm-button-label'>Search</span> */}
//           </button>

//           <input
//             value={this.state.searchQuery}
//             onChange={this.handleChange}
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// // Searchbar.propTypes = {
// //   onSubmit: PropTypes.func.isRequired
// // };

// export default Searchbar;
