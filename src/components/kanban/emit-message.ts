import prefix from "src/scripts/prefix";
import colours from "./colors";

const icons = [
    "check",
    "close",
    "exclamation",
    "info",
] as const;

const launcher = document.getElementById("emit-message-kanban");

launcher.onclick = function (e) {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON") {
        const primary = Object.hasOwn(button.dataset, "primary");
        const icon = icons[Math.floor((Math.random() * icons.length))];
        if (primary) {
            // 取上一次的颜色
            let color = Reflect.get(button.dataset, "color") || "primary";
            window.dispatchEvent(
                new CustomEvent(`${prefix}-message`, {
                    detail: {
                        content: `
                            <svg 
                                class="${prefix}-message-prefix"
                                astro-icon="tips/fill/${icon}-circle-fill"
                            >
                                <use
                                    xlink:href="#astroicon:tips/fill/${icon}-circle-fill"
                                >
                                </use>
                            </svg>
                            <span>
                                发射成功
                            </span>
                        `,
                        primary,
                        // duration: 100000,
                        style: {
                            "--background-color-message": `var(--${color}-5)`,
                            "--box-shadow-color": `var(--${color}-4)`,
                        }
                    },
                })
            );
            // 设置下一次的颜色
            color = colours[Math.floor((Math.random() * colours.length))];
            button.innerText = color;
            button.dataset.color = color;
            button.style.setProperty("--background-color-button", `var(--${color}-5)`)
            button.style.setProperty("--background-color-button-focus", `var(--${color}-6)`)
        } else {
            window.dispatchEvent(
                new CustomEvent(`${prefix}-message`, {
                    detail: {
                        content: `
                            <svg 
                                class="${prefix}-message-prefix"
                                astro-icon="tips/outline/${icon}-circle"
                                data-primary="${{
                                    check: 'success',
                                    close: 'danger',
                                    exclamation: 'warning',
                                    info: "",
                                }[icon]}"
                            >
                                <use
                                    xlink:href="#astroicon:tips/outline/${icon}-circle"
                                >
                                </use>
                            </svg>
                            <span>
                                发射成功
                            </span>
                        `,
                        primary,
                        // duration: 100000,
                    },
                })
            );
        }

    }
};
