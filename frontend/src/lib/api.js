import axios from 'axios';

// 게시물 데이터 불러오기
export async function getPosts() {
	const response = await axios.get(`/api/posts`);
	return response.data;
}

// 특정 게시물 데이터 불러오기
export async function getPost(id) {
	const response = await axios.get(`/api/post/${id}`);
	return response.data;
}

// 게시물 추가
export async function addPost() {
	const response = await axios.post(`/api/add-post`);
	return response.data;
}

// 게시물 수정
export async function editPost(id) {
	const response = await axios.post(`/api/edit-post`, { post: id });
	return response.data;
}

// 게시물 삭제
export async function delPost(id) {
	const response = await axios.post(`/api/del-post`, { post: id });
	return response.data;
}

// 게시물 좋아요
export async function like(id) {
	const response = await axios.post(`/api/like/`, { post: id });
	return response.data;
}

// 게시물 좋아요 취소
export async function unlike(id) {
	const response = await axios.post(`/api/unlike/`, { post: id });
	return response.data;
}

// 댓글 달기
export async function toggleOneTodo(id, data = {}) {
	const response = await axios.put(`/api/todos/${id}`, {
		type: 'T',
		data: { ...data },
	});
	return response.data;
}

// 댓글 삭제
export async function toggleOneTodo1(id, data = {}) {
	const response = await axios.put(`/api/todos/${id}`, {
		type: 'T',
		data: { ...data },
	});
	return response.data;
}
