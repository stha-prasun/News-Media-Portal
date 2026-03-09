

        document.querySelectorAll(".share-btn").forEach(btn => {
            if (btn.textContent.includes("Copy")) {
                btn.addEventListener("click", () => {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        btn.textContent = "✓ Copied!";
                        setTimeout(() => btn.textContent = "🔗 Copy Link", 2000);
                    });
                });
            }
        });