'use server'


export async function sendServerCommand(command: string) {
    const apiUrl = `${process.env.NEWSERV_API_URL}:${process.env.NEWSERV_API_PORT}/y/shell-exec`;

    const body = {"command": command};

    await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
}