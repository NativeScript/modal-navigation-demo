import { Page } from "tns-core-modules/ui/page";
import { View, EventData } from "tns-core-modules/ui/core/view";

export function onNavigate(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;
    page.frame.navigate("modal-second/modal-second-page");
}
