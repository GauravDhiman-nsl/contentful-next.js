import { useRouter } from "next/navigation"

export const useCommonRouting = () => {
    const router = useRouter();
    const handleBack = () => {
        if (window.history.length > 2) {
            router.back();
        } else {
            router.push('/');
        }
    };
    return { router, handleBack };
}
