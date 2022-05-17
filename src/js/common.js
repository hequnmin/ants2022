
const CurrentTimeString = () => {
    //return (new Date()).toLocaleTimeString();
    const d = new Date();
    return (`${d.toLocaleTimeString()}.${d.getMilliseconds()}`);
};

export { CurrentTimeString as CurrentTimeString };


