import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type NavItems = {
    imageUrl: string | null;
    title: string;
    icon: IconDefinition | null;
    route: string;
    isActive: boolean;
    isDisabled: boolean;
}