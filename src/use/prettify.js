export function prettify(num) {
    if (typeof num === "string") {
        // Remove all non-numeric characters
        const cleanedNumber = num.replace(/\D/g, "");

        // Check if the cleaned number has the correct length
        if (cleanedNumber.length === 12) {
            const matches = cleanedNumber.match(/^998(\d{2})(\d{3})(\d{2})(\d{2})$/);

            if (matches) {
                return `+998 (${matches[1]}) ${matches[2]} ${matches[3]} ${matches[4]}`;
            }
        }
    }

    return "Invalid number";
}