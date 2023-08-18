export function formatTime ( timestamp )
    {
        const date = new Date( timestamp );
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${ hours }:${ minutes < 10 ? '0' : '' }${ minutes }`;
    }