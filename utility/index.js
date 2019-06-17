module.exports = {

    stringify: obj => {
        const { upvotes, comments } = obj

        return {
            ...obj,
            upvotes: upvotes ? JSON.stringify(upvotes) : [],
            comments: comments ? JSON.stringify(comments) : []
        }
    },

    parse: obj => {
        const { upvotes, comments } = obj

        return {
            ...obj,
            upvotes: upvotes ? JSON.parse(upvotes) : [],
            comments: comments ? JSON.parse(comments) : []
        }
    }

}
