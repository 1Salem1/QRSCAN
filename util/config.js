


export function string (data){
 


    const result = data.trim().split(/\s+/);

    if(result == null){
        return null
    }
    else{
        if(result.length == 1){
            return null
        }
        else {
            console.log(result[1].substring(0,3))
        
            return {
                name : result[0] ,
                size : result[1].substring(0,3) ,
                serie : result[1]
            }
        }
       
        
    }



}

export function objectToCsv(data) {

    const csvRows = [];

    /* Get headers as every csv data format 
    has header (head means column name)
    so objects key is nothing but column name 
    for csv data using Object.key() function.
    We fetch key of object as column name for 
    csv */
    const headers = Object.keys(data[0]);

    /* Using push() method we push fetched 
       data into csvRows[] array */
    csvRows.push(headers.join(','));

    // Loop to get value of each objects key
    for (const row of data) {
        const values = headers.map(header => {
            const val = row[header]
            return `"${val}"`;
        });

        // To add, sepearater between each value
        csvRows.push(values.join(','));
    }

    /* To add new line for each objects values
       and this return statement array csvRows
       to this function.*/
    return csvRows.join('\n');
};