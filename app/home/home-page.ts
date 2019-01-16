import { View, EventData } from "tns-core-modules/ui/core/view";
import { Frame } from "tns-core-modules/ui/frame";
import { ShownModallyData } from "tns-core-modules/ui/page";
const modalPath = "modal-root/modal-root-page"
export function onModalFrame(args: EventData) {
    const view = args.object as View;
    const page = view.page;

    page.showModal(modalPath, {},
        (closeCallbackContext) => {
            console.log("[home-page] closeModal callback context:", closeCallbackContext);
        }, true);
}
