export interface Props {
    title: string;
    subtitle: string;
    actionOne?: {
        icon: string;
        onPress: () => void;
    };
    actionTwo?: {
        icon: string;
        onPress: () => void;
    },
    children: React.ReactNode;
}