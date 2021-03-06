class DateHelper {

    constructor() {
        throw new Error('classe não instaciável')
    }

    static dateToString(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static stringToDate(string) {
        if(!/\d{4}-\d{2}-\d{2}/.test(string))
            throw new Error('format Error - string need to be yyyy-mm-dd')

        return new Date(...string.split("-").map((item, index) => item - index % 2))
    }
}