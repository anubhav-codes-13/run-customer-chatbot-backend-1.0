
        function copyText(id, btn) {
            const text = document.getElementById(id).innerText;
            navigator.clipboard.writeText(text).then(() => {
                const orig = btn.innerText;
                btn.innerText = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerText = orig;
                    btn.classList.remove('copied');
                }, 2000);
            });
        }
    