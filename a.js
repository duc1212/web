document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const product = document.getElementById('product').value;
        const message = document.getElementById('message').value;

        if (name && email && product && message) {
            alert(`Cảm ơn ${name}! Đơn đặt hàng của bạn cho  trung tam đã được gửi đi.`);
            form.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.getElementById('order-form').addEventListener('submit', function(event) {
    const quantity = document.getElementById('quantity').value;
    if (quantity <= 0) {
        alert('Số lượng phải lớn hơn 0!');
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    let lastScrollY = window.scrollY;

    function handleScroll() {
        if (window.scrollY > lastScrollY) {
            header.classList.remove("show");
        } else {
            header.classList.add("show");
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    header.classList.add("show");
});
