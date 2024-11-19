import useFetchData from './useFetchData';

const url = 'https://api.github.com/users/QuincyLarson';

const FetchData = () => {
	const { isLoading, isError, user } = useFetchData(url);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}
	if (isError) {
		return <h2>Error...</h2>;
	}
	const { avatar_url, name, company, bio } = user;

	return (
		<div>
			<img src={avatar_url} alt={name} style={{ width: '100px', borderRadius: '25px' }} />
			<h2>{name}</h2>
			<h4>Works at: {company}</h4>
			<p>{bio}</p>
		</div>
	);
};

export default FetchData;
