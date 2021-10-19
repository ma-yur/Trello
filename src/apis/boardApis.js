const getBoards = () => {
	return fetch(
		"https://api.trello.com/1/members/me/boards?fields=name,url,prefs&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6",
		{
			method: "GET",
		}
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
const createBoard = (name) => {
	return fetch(
		`https://api.trello.com/1/boards/?name=${name}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
		{
			method: "POST",
		}
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => console.error(err));
};

const getBoard = (boardId) => {
	return fetch(
		`https://api.trello.com/1/boards/${boardId}?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => console.error(err));
};
export { getBoards, createBoard, getBoard };
