const data = [
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },

    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },  
      { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },  
      { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },  
     { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
        { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    { id: 1, quoNo: 47481, quoDate: "1 Feb, 2020", customerName: "Daya Rai", mobile: "990 470 3101", status: "Converted" },
    { id: 2, quoNo: 44322, quoDate: "24 May, 2020", customerName: "Vinayak Kamble", mobile: "990 470 3101", status: "Receipt" },
    { id: 3, quoNo: 19897, quoDate: "17 Oct, 2020", customerName: "Santosh Machindra More", mobile: "990 470 3101", status: "Cancel" },
    // Add more rows up to 50 or more as needed...
    // Up to 57 entries for example
];

const rowsPerPage = 10;
let currentPage = 1;
let rowsToShow = rowsPerPage;

function displayTable(data, rowsPerPage, page) {
    const tableBody = document.querySelector('#quotationTable tbody');
    tableBody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = data.slice(start, end);

    paginatedItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = "quotationrow";
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${item.quoNo}</td>
            <td>${item.quoDate}</td>
            <td>${item.customerName}</td>
            <td>${item.mobile}</td>
            <td><span class="status ${item.status}">${item.status}</span></td>
            <span class="actions">
                <button class="actionbtn edit"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3.54004C15 3.84082 14.943 4.13249 14.8291 4.41504C14.7152 4.69759 14.5488 4.94824 14.3301 5.16699L5.32715 14.1699L1 15.25L2.08008 10.9229L11.083 1.91992C11.3018 1.70117 11.5524 1.53483 11.835 1.4209C12.1175 1.30697 12.4092 1.25 12.71 1.25C13.0244 1.25 13.3206 1.31152 13.5986 1.43457C13.8766 1.55306 14.1182 1.71712 14.3232 1.92676C14.5329 2.13184 14.6969 2.37337 14.8154 2.65137C14.9385 2.92936 15 3.22559 15 3.54004ZM3.22852 11.0117C3.71159 11.1712 4.1263 11.4264 4.47266 11.7773C4.82357 12.1237 5.07878 12.5384 5.23828 13.0215L12.6279 5.625L10.625 3.62207L3.22852 11.0117ZM2.20313 14.0469L4.45215 13.4863C4.40658 13.2767 4.33138 13.0785 4.22656 12.8916C4.1263 12.7048 4.00326 12.5384 3.85742 12.3926C3.71159 12.2467 3.54525 12.1237 3.3584 12.0234C3.17155 11.9186 2.97331 11.8434 2.76367 11.7979L2.20313 14.0469ZM13.25 5.00293C13.3639 4.889 13.4733 4.7819 13.5781 4.68164C13.6829 4.58138 13.7764 4.47656 13.8584 4.36719C13.9404 4.25326 14.0042 4.13249 14.0498 4.00488C14.0999 3.87272 14.125 3.72005 14.125 3.54688C14.125 3.35091 14.0863 3.16862 14.0088 3C13.9359 2.82682 13.8333 2.67643 13.7012 2.54883C13.5736 2.41667 13.4232 2.31413 13.25 2.24121C13.0814 2.16374 12.8991 2.125 12.7031 2.125C12.5299 2.125 12.3773 2.15007 12.2451 2.2002C12.1175 2.24577 11.9967 2.30957 11.8828 2.3916C11.7734 2.47363 11.6686 2.56706 11.5684 2.67188C11.4681 2.77669 11.361 2.88607 11.2471 3L13.25 5.00293Z" fill="#444444"/>
</svg></button>
                <button class="actionbtn delete"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 3.875H13.0769V13.9375C13.0769 14.1198 13.0409 14.2907 12.9688 14.4502C12.8966 14.6097 12.7981 14.7487 12.6731 14.8672C12.5481 14.9857 12.4014 15.0791 12.2332 15.1475C12.0649 15.2158 11.8846 15.25 11.6923 15.25H4.30769C4.11538 15.25 3.9351 15.2158 3.76683 15.1475C3.59856 15.0791 3.45192 14.9857 3.32692 14.8672C3.20192 14.7487 3.10337 14.6097 3.03125 14.4502C2.95913 14.2907 2.92308 14.1198 2.92308 13.9375V3.875H2V3H5.69231V2.125C5.69231 2.00195 5.71635 1.88802 5.76442 1.7832C5.8125 1.67839 5.8774 1.58724 5.95913 1.50977C6.04567 1.42773 6.14423 1.36393 6.25481 1.31836C6.36538 1.27279 6.48558 1.25 6.61538 1.25H9.38462C9.51442 1.25 9.63462 1.27279 9.74519 1.31836C9.85577 1.36393 9.95192 1.42773 10.0337 1.50977C10.1202 1.58724 10.1875 1.67839 10.2356 1.7832C10.2837 1.88802 10.3077 2.00195 10.3077 2.125V3H14V3.875ZM6.61538 3H9.38462V2.125H6.61538V3ZM12.1538 3.875H3.84615V13.9375C3.84615 14.056 3.89183 14.1585 3.98317 14.2451C4.07452 14.3317 4.18269 14.375 4.30769 14.375H11.6923C11.8173 14.375 11.9255 14.3317 12.0168 14.2451C12.1082 14.1585 12.1538 14.056 12.1538 13.9375V3.875ZM6.61538 12.625H5.69231V5.625H6.61538V12.625ZM8.46154 12.625H7.53846V5.625H8.46154V12.625ZM10.3077 12.625H9.38462V5.625H10.3077V12.625Z" fill="#444444"/>
</svg>
</button>
                <button class="actionbtn view"><svg class="addiconsq" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.61538 1.25C1.72776 1.25 1 1.97776 1 2.86538V13.6346C1 14.5222 1.72776 15.25 2.61538 15.25H13.3846C14.2722 15.25 15 14.5222 15 13.6346V2.86538C15 1.97776 14.2722 1.25 13.3846 1.25H2.61538ZM2.61538 2.32692H13.3846C13.6875 2.32692 13.9231 2.5625 13.9231 2.86538V13.6346C13.9231 13.9375 13.6875 14.1731 13.3846 14.1731H2.61538C2.3125 14.1731 2.07692 13.9375 2.07692 13.6346V2.86538C2.07692 2.5625 2.3125 2.32692 2.61538 2.32692ZM7.46154 4.48077V7.71154H4.23077V8.78846H7.46154V12.0192H8.53846V8.78846H11.7692V7.71154H8.53846V4.48077H7.46154Z" fill="#4B38B3"/>
</svg></button>
            </span>
        `;
        tableBody.appendChild(row);
    });
    


    updateTableInfo(start, end, data.length);
    updatePagination(data, rowsPerPage, page);
}

function updateTableInfo(start, end, total) {
    const tableInfo = document.getElementById('table-info');
    tableInfo.textContent = `Showing ${start + 1} to ${end > total ? total : end} of ${total} entries`;
}

function updatePagination(data, rowsPerPage, page) {
    const paginationNumbers = document.getElementById('paginationNumbers');
    paginationNumbers.innerHTML = "";

    const pageCount = Math.ceil(data.length / rowsPerPage);
    const maxVisibleButtons = 6; // Show only 6 buttons, rest with "Next"

    let startPage = Math.max(1, page - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(pageCount, startPage + maxVisibleButtons - 1);

    if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-button');
        if (i === page) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayTable(data, rowsPerPage, currentPage);
        });

        paginationNumbers.appendChild(pageButton);
    }

    document.getElementById('prevPage').disabled = page === 1;
    document.getElementById('nextPage').disabled = page === pageCount;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayTable(data, rowsPerPage, currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
        currentPage++;
        displayTable(data, rowsPerPage, currentPage);
    }
});

document.getElementById('entries').addEventListener('change', function() {
    rowsToShow = parseInt(this.value);
    currentPage = 1; // Reset to the first page
    displayTable(data, rowsToShow, currentPage);
});

// Initial table display
displayTable(data, rowsToShow, currentPage);

