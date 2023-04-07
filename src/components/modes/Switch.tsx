import { Toggle, ToggleItem } from "@tremor/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { toDarkMode, toLightMode } from "./theme";

export default function Switch() {
    return(
        <div>
            <Toggle
                color="zinc"
                className="dark:bg-gray-700"
                defaultValue="1"
                onValueChange={(value) => console.log(value)}
            >
                <ToggleItem value="1" icon={SunIcon} onClick={() => toLightMode()} className="dark:text-white" />
                <ToggleItem value="2" icon={MoonIcon} onClick={() => toDarkMode()} />
            </Toggle>
        </div>
    )
}