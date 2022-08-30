export const deleteAPI = {
  async post (postIdl: string) {
    const response = await fetch(`/api/posts/${postIdl}`, { method: 'DELETE' }).then(resp => resp.json())
    return response
  }
}