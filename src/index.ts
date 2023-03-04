import {intro} from "@clack/prompts";

async function main() {
    try {
        intro('CodePilot')

    } catch (e) {
        console.error(e)
    }
}

main().then()
