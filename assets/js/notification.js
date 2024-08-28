document.querySelector('.notify').addEventListener('click', function() {
    const popup = document.getElementById('notificationPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    console.log("soos");
    

    const logoutpopup = document.getElementById('logoutPopup');
    logoutpopup.style.display="none";
    });
    
    document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('notificationPopup').style.display = 'none';
    });
    
    document.getElementById('seeMore').addEventListener('click', function() {
    const content = document.getElementById('popupContent');
    content.innerHTML = `
        <p>Notification 1: You have a new message.</p>
        <p>Notification 2: Your order has been shipped.</p>
        <p>Notification 3: Update available for your app.</p>
    `;
    });
    