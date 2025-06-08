export const sortMedal = (medals: any[], column: string, order: string) => {
    if(column === "total") {
        return medals.sort((a: any, b: any) => {
            if (order === "asc") {
                return a.gold + a.silver + a.bronze - (b.gold + b.silver + b.bronze);
            } else {
                return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
            }
        });
    }
    
    return medals.sort((a: any, b: any) => {
        if (order === "asc") {
            return a[column] - b[column];
        } else {
            return b[column] - a[column];
        }
    });
}