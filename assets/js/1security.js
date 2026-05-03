
(function () {
    // Disable right-click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Disable text selection & image dragging
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());

    // Block common shortcut keys (F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I/J/C, Ctrl+P)
    document.addEventListener('keydown', function (e) {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
            (e.ctrlKey && ['U', 'S', 'P'].includes(e.key.toUpperCase()))
        ) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // Detect DevTools (resize or delay)
    let devToolsOpen = false;

    function detectDevTools() {
        const threshold = 160;
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;

        if (widthDiff || heightDiff) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                closeSite();
            }
        } else {
            devToolsOpen = false;
        }
    }

    function closeSite() {
        document.documentElement.innerHTML =
            "<h1 style='text-align:center;margin-top:20%;color:red;'>⚠️ Developer Tools Detected!<br>Site Closed for Security Reasons.</h1>";
    }

    setInterval(detectDevTools, 1000);

    // Extra debugger-detection trick
    setInterval(() => {
        const start = Date.now();
        debugger;
        const end = Date.now();
        if (end - start > 200) {
            closeSite();
        }
    }, 1500);

})();

