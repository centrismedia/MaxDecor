export function prettify(num) {
    if (typeof num === "number") {
        num = num.toString();
    }

    if (typeof num === "string") {
        const cleanedNumber = num.replace(/\D/g, ""); // Remove all non-numeric characters
        const matches = cleanedNumber.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);

        if (matches) {
            return `(${matches[1]}) ${matches[2]} ${matches[3]} ${matches[4]}`;
        }
    }

    return "Invalid number";
}