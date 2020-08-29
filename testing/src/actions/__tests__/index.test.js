const { saveComment } = require("..");
const { SAVE_COMMENT } = require("../types");

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');
    });
})