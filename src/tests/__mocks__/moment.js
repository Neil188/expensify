const moment = require.requireActual('moment');

const momentMock = (timestamp = 0) => moment(timestamp);
momentMock.locale = () => {};

export default momentMock;
