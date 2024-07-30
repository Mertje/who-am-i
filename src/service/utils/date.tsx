

export function getCurrentAge() {
    const birthYear = 1999
    const birthMonth = 10


    const currentDate = new Date();
    const startDate = new Date(birthYear, birthMonth);
    const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();

    return currentDate.getMonth() < startDate.getMonth() ? yearsDifference - 1 : yearsDifference;
}