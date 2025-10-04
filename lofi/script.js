document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk navigasi antar halaman (simulasi)
    function navigateTo(url) {
        window.location.href = url;
    }

    // Listener untuk FAB (Floating Action Button) di halaman utama
    const fabButton = document.getElementById('fab-add-task');
    if (fabButton) {
        fabButton.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah link default
            navigateTo('add_task.html');
        });
    }

    // Listener untuk tombol kembali (misalnya di add_task atau edit_task)
    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.history.back(); // Kembali ke halaman sebelumnya
        });
    }

    // Listener untuk task items di halaman utama (simulasi klik untuk melihat detail)
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Jika yang diklik adalah checkbox, biarkan aksi default (toggle checked)
            if (event.target.type === 'checkbox') {
                // Simulasi toggle completed class
                item.classList.toggle('completed');
                return;
            }
            // Selain checkbox, navigasi ke halaman edit/detail
            navigateTo('edit_task.html');
        });
    });

    // Listener untuk tombol "Simpan" di halaman tambah/edit (simulasi)
    const saveButton = document.getElementById('save-task-btn');
    if (saveButton) {
        saveButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Tugas disimpan! (Simulasi)');
            navigateTo('index.html'); // Kembali ke daftar tugas
        });
    }

    // Listener untuk tombol "Hapus" di halaman detail (simulasi)
    const deleteButton = document.getElementById('delete-task-btn');
    if (deleteButton) {
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (confirm('Anda yakin ingin menghapus tugas ini? (Simulasi)')) {
                alert('Tugas dihapus! (Simulasi)');
                navigateTo('index.html'); // Kembali ke daftar tugas
            }
        });
    }
});