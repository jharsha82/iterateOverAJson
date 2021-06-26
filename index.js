let employee = {
    fetchEmployee: function() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data)=> this.displayEmployee(data));
    },
    displayEmployee: function(data) {
        console.log(data);
        if(data.length) {
            let temp = '';
            data.forEach((record) => {
                temp += '<tr>';
                temp += '<td>' + record.id + '</td>';
                temp += '<td>' + record.name + '</td>';
                temp += '<td>' + record.username + '</td>';
                temp += '<td>' + record.address + '</td>';
                temp += '<td>' + record.email + '</td></tr>';
            })
            document.querySelector('.main-table').innerHTML = temp;
        }
            
    }
}

employee.fetchEmployee();