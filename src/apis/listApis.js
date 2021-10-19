const getLists = (boardId) => {
	return fetch(
		`https://api.trello.com/1/boards/${boardId}/lists?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
		{
			method: "GET",
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

const addList = (ListName, boardId) => {
	return fetch(
		`https://api.trello.com/1/lists?name=${ListName}&pos=bottom&idBoard=${boardId}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
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

export { getLists, addList };
