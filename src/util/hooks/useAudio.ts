import { useMemo, useEffect, useState } from "react";

const useAudio = (url: string): [boolean, () => void] => {
    const audio = useMemo(() => new Audio(url), []);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        try {
            playing ? audio.play() : audio.pause();
        } catch (error) {
            
        }
    }, [playing, audio]);

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

export default useAudio;
