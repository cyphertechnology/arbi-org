import { Studio } from "sanity";
import config from "../../sanity.config";

export default function StudioPage() {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0b1329",
            zIndex: 9999,
            overflow: "auto"
        }}>
            <Studio config={config} />
        </div>
    );
}

