import * as React from "react";

interface IBeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;

    prompt(): Promise<void>;
}

export function useAddToHomescreenPrompt(): [
        IBeforeInstallPromptEvent | null,
    () => void
] {
    const [prompt, setState] = React.useState<IBeforeInstallPromptEvent | null>(
        null
    );

    const promptToInstall = () => {
        if (prompt) {
            return prompt.prompt();
        }
        return Promise.reject(
            new Error(
                'Tried installing before browser sent "beforeinstallprompt" event'
            )
        );
    };
    React.useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e: any) => {
            e.preventDefault();
            setState(e);
        });

        return () => {
            window.removeEventListener("beforeinstallprompt", (e: any) => {
                e.preventDefault();
                setState(e);
            });
        };
    }, []);

    return [prompt, promptToInstall];
}