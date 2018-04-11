import { View, EventData } from "tns-core-modules/ui/core/view";
import { Frame } from "tns-core-modules/ui/frame";

export function onModalFrame(args: EventData) {
    const view = args.object as View;
    const page = view.page;

    const frame = new Frame();
    frame.navigate("modal/modal-page");

    page.showModal(frame,
        "context",
        () => console.log("home-page modal frame closed"),
        true);
}
