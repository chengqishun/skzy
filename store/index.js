export const state = () => {
    return {
        page: 0,
    }
}

export const mutations = {
    setPage(state, page) {
        state.page = page
    },
}