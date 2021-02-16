import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

type Props = {
	handleSearch: Function;
};

export default function Search({ handleSearch }: Props) {
	return (
		<InputGroup className='search'>
			<FormControl
				placeholder='Search by Game Name..'
				onChange={(event) => handleSearch(event)}
			/>
		</InputGroup>
	);
}
