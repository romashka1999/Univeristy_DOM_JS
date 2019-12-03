export const validator = (statusCode, response) => {
    const alertDiv = document.createElement("div");
    if( statusCode === 200) {
        alertDiv.classList.add('alert', 'alert-success');
    } else if( statusCode === 400) {
        alertDiv.classList.add('alert', 'alert-danger');
    } else {
        alertDiv.classList.add('alert', 'alert-warning');
    }
    const textNode = document.createTextNode(response);
    alertDiv.appendChild(textNode);
    createAlert.innerHTML = '';
    createAlert.appendChild(alertDiv);
}