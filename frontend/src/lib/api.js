import axios from 'axios';

// 게시물 전체 데이터 불러오기(홈)
export async function getHome() {
	const response = await axios.get(`/home`);
	return response.data;
}

// 게시물 전체 데이터 불러오기(나침반)
export async function getMain() {
	const response = await axios.get(`/main`);
	return response.data;
}

// 특정 게시물 데이터 불러오기
export async function getPost(id) {
	const response = await axios.get(`/post/${id}`);
	return response.data;
}

// 게시물 저장(추가)
export async function insertPost() {
	const response = await axios.post(`/post`);
	return response.data;
}

// 게시물 수정
export async function updatePost(id) {
	const response = await axios.post(`/post/update`, { id });
	return response.data;
}

// 게시물 삭제
export async function deletePost(id) {
	const response = await axios.post(`/post/delete`, { id });
	return response.data;
}

// 게시물 좋아요, 좋아요 취소
export async function likePost(id) {
	const response = await axios.post(`/post/like`, { id });
	return response.data;
}

// 댓글 저장(추가)
export async function insertComment() {
	const response = await axios.post(`/comment`);
	return response.data;
}

// 댓글 삭제
export async function deleteComment(id, comment_id) {
	const response = await axios.post(`/comment/delete`, { id, comment_id });
	return response.data;
}

// 댓글 좋아요, 좋아요 취소
export async function likeComment(id, comment_id) {
	const response = await axios.post(`/comment/like`, { id, comment_id });
	return response.data;
}
