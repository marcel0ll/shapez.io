import { Loader } from "../../core/loader";
import { enumDirection } from "../../core/vector";
import { SOUNDS } from "../../platform/sound";
import { GameRoot } from "../root";
import { defaultBuildingVariant, MetaBuilding } from "../meta_building";
import { arrayBeltVariantToRotation, MetaBeltBaseBuilding } from "./belt_base";

/** @enum {string} */
export const enumBeltVariants = { red: "red", green: "green", blue: "blue" };

export class MetaBeltBuilding extends MetaBeltBaseBuilding {
    constructor() {
        super("belt");
    }

    getSilhouetteColor() {
        return "#777";
    }

    getPlacementSound() {
        return SOUNDS.placeBelt;
    }

    getPreviewSprite(rotationVariant, variant) {
        let key = variant !== defaultBuildingVariant ? "_" + variant : "";

        switch (arrayBeltVariantToRotation[rotationVariant]) {
            case enumDirection.top: {
                return Loader.getSprite(`sprites/buildings/belt${key}_top.png`);
            }
            case enumDirection.left: {
                return Loader.getSprite(`sprites/buildings/belt${key}_left.png`);
            }
            case enumDirection.right: {
                return Loader.getSprite(`sprites/buildings/belt${key}_right.png`);
            }
            default: {
                assertAlways(false, "Invalid belt rotation variant");
            }
        }
    }

    /**
     * @param {GameRoot} root
     */
    getAvailableVariants(root) {
        return [defaultBuildingVariant, enumBeltVariants.red, enumBeltVariants.blue, enumBeltVariants.green];
    }

    getBlueprintSprite(rotationVariant, variant) {
        let key = variant !== defaultBuildingVariant ? "_" + variant : "";

        switch (arrayBeltVariantToRotation[rotationVariant]) {
            case enumDirection.top: {
                return Loader.getSprite(`sprites/blueprints/belt${key}_top.png`);
            }
            case enumDirection.left: {
                return Loader.getSprite(`sprites/blueprints/belt${key}_left.png`);
            }
            case enumDirection.right: {
                return Loader.getSprite(`sprites/blueprints/belt${key}_right.png`);
            }
            default: {
                assertAlways(false, "Invalid belt rotation variant");
            }
        }
    }
}
