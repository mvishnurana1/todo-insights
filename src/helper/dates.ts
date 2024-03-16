const date = new Date();

const months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];


export function getMonth(): string {
    const monthIndex = date.getMonth();
    return months[monthIndex];
}

export function getYear(): string {
    return date.getFullYear().toString();
}

export function getTodaysDate(): string {
    return date.getDate().toString();
}
