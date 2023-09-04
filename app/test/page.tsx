'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Test() {
    const { data: userSession } = useSession();
    // console.log(userSession?.user?.email)
    useEffect(() => {
        async function test() {
            const response = await fetch("/api/test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: userSession?.user?.email }),
            });
            const data = await response.json();
            // console.log(data); 
            // You should see the email in the console
        }
        test();
    }, [])
}

export default Test;

