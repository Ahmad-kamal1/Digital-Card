
       document.addEventListener('DOMContentLoaded', function () {
            const scanBtn = document.getElementById('scanBtn');
            const closeBtn = document.getElementById('closeBtn');
            const formModal = document.getElementById('formModal');
            const bioForm = document.getElementById('bioForm');
            const qrContainer = document.getElementById('qrcode');
            const profilePicInput = document.getElementById('profilePic');
            const profilePreview = document.getElementById('profilePreview');

            function generateQRCode() {
                qrContainer.innerHTML = '';
                new QRCode(qrContainer, {
                    text: window.location.href.replace(/#.*$/, '') + '#bio-form',
                    width: 120,
                    height: 120,
                    colorDark: "#2c3e50",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            }

            function openFormModal() {
                // Populate inputs from current card state
                const nameEl = document.querySelector('.personal-info h1');
                const titleEl = document.querySelector('.personal-info h3');
                const idEl = document.querySelector('.id-number');

                if (document.getElementById('fullName')) document.getElementById('fullName').value = nameEl ? nameEl.textContent : '';
                if (document.getElementById('jobTitle')) document.getElementById('jobTitle').value = titleEl ? titleEl.textContent : '';
                if (document.getElementById('employeeId')) document.getElementById('employeeId').value = idEl ? idEl.textContent.replace(/^ID:\s*/,'') : '';

                if (profilePreview) profilePreview.src = document.querySelector('.profile-pic').src;

                formModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            // Open modal by clicking QR or scan button
            qrContainer.addEventListener('click', openFormModal);
            scanBtn.addEventListener('click', openFormModal);

            // Close modal
            closeBtn.addEventListener('click', function () {
                formModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            formModal.addEventListener('click', function (e) {
                if (e.target === formModal) {
                    formModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            // Image preview
            profilePicInput.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        profilePreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });

            // Handle form submission
            bioForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const formData = new FormData(bioForm);
                const data = {};
                formData.forEach((value, key) => data[key] = value);

                updateCardInfo(data);
                alert('Bio information updated successfully!');

                formModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            function updateCardInfo(data) {
                if (data.fullName) document.querySelector('.personal-info h1').textContent = data.fullName;
                if (data.jobTitle) document.querySelector('.personal-info h3').textContent = data.jobTitle;
                if (data.employeeId) document.querySelector('.id-number').textContent = `ID: ${data.employeeId}`;

                // Update header picture from preview
                if (profilePreview && profilePreview.src) {
                    document.querySelector('.profile-pic').src = profilePreview.src;
                }
            }

            generateQRCode();

            // If loaded with #bio-form (e.g., scanned QR), open modal
            if (window.location.hash === '#bio-form') {
                openFormModal();
            }
        });