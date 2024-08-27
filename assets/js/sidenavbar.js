// 

document.addEventListener("DOMContentLoaded", () => {
    const submenuItems = document.querySelectorAll(".submenu_item");

    submenuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();

            const submenu = item.nextElementSibling;
            const parentMenu = item.closest('.menu_items');
            const isActive = submenu && submenu.classList.contains("active");

            // Close other submenus in the same level
            parentMenu.querySelectorAll('.submenu').forEach((sub) => {
                if (sub !== submenu) {
                    sub.classList.remove('active');
                    sub.previousElementSibling.classList.remove('show_submenu');
                }
            });

            // Toggle current submenu
            if (submenu && !isActive) {
                submenu.classList.add("active");
                item.classList.add("show_submenu");
            } else if (submenu && isActive) {
                submenu.classList.remove("active");
                item.classList.remove("show_submenu");
            }
        });
    });

    // Ensure correct initial state on page load
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page file name
    submenuItems.forEach((item) => {
        const target = item.getAttribute("data-target");
        if (target && currentPage.includes(target)) {
            const submenu = item.nextElementSibling;
            if (submenu) {
                submenu.classList.add("active");
                item.classList.add("show_submenu");
            }
        }
    });
});
