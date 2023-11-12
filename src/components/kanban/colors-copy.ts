import prefix from "src/scripts/prefix";

const table = document.getElementById("colors-kanban");

table.onclick = function (e) {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON" && button.title) {
        window.copy(`rgb(var(${button.title}))`);
        window.dispatchEvent(
            new CustomEvent(`${prefix}-message`, {
                detail: {
                    content: "复制成功",
                    primary: "success",
                },
            })
        );
    }
};