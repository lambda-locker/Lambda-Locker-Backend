module.exports = {

    stringify: obj => {
        const { comments } = obj

        return {
            ...obj,
            comments: comments ? JSON.stringify(comments) : []
        }
    },

    parse: obj => {
        const { comments, upvotes } = obj

        return {
            ...obj,
            comments: comments ? JSON.parse(comments) : [],
            upvotes: upvotes ? upvotes : 0
        }
    },

    boolRes: obj => {
        const { is_private } = obj

        return {
            ...obj,
            is_private: is_private === 1
        }
    },

    boolUse: obj => {
        const { is_admin } = obj

        return {
            ...obj,
            is_admin: is_admin === 1
        }
    }

}
