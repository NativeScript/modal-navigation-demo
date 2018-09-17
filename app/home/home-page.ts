import { View, EventData } from "tns-core-modules/ui/core/view";
import { Frame } from "tns-core-modules/ui/frame";
import { ShownModallyData } from "tns-core-modules/ui/page";

export function onModalFrame(args: EventData) {
    const view = args.object as View;
    const page = view.page;
    const frame = new Frame();
    const context = "Context from home-page";

    frame.on("shownModally", (args: ShownModallyData) => {
        frame.navigate({
            moduleName: "modal/modal-page",
            context: args.context // context to pass from showModal
        });
    })

    page.showModal(frame, context,
        (closeCallbackContext) => {
            console.log("[home-page] closeModal callback context:", closeCallbackContext);
        }, true);
}
