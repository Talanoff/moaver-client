export default function (): boolean | undefined {
    if (!process.browser) {
        return undefined;
    }

    return /Edge/.test(navigator.userAgent);
}
