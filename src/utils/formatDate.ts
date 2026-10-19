export function formatDate(date: string): string {
    const formattedDate = new Date(date);

    const day = String(formattedDate.getUTCDate()).padStart(2, "0");

    const month = formattedDate
        .toLocaleDateString("pt-BR", {
            month: "short",
            timeZone: "UTC",
        })
        .replace(".", "");

    const year = formattedDate.getUTCFullYear();

    return `${day} ${month} ${year}`;
}