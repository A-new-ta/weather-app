import moment from 'moment-timezone'

export function dateTransform(
    unixTimestamp,
    timezone = 'Europe/London',
    format = 'dddd'
){
    return moment(unixTimestamp * 1000)
        .tz(timezone)
        .format(format)
}