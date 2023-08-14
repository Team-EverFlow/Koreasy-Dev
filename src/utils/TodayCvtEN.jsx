function TodayEvtEN() {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const today = new Date();
    const formattedDate = `${
        months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
    return formattedDate;
}

export default TodayEvtEN;
